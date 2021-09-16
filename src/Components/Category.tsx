import { Box, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import axios from "axios"
import { useEffect, useState } from "react"
import { FetchURIs } from "src/Helpers/FetchURIs"
import { CategoryProps, MovieType } from "../Helpers/Types"
import { Header } from "./Header"
import { Loader } from "./Loader"

const useStyles = makeStyles(() => ({
  posters: {
    display: 'flex',
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  img: {
    objectFit: 'contain',
    width: '130px',
    maxHeight: '200px',
    margin: '10px',
    transition: '700ms',
    '&:hover': {
      transform: 'scale(1.08)'
    }
  }
}))

export const Category = ({ match }: CategoryProps) => {

  const classes = useStyles()
  const [movies, setMovies] = useState<MovieType[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async() => {
        const idx = FetchURIs.findIndex((uri) => uri.route === match.params.type)
        const [ dataOne, dataTwo ] = await Promise.all([axios.get(FetchURIs[idx].uri), axios.get(`${FetchURIs[idx].uri}&page=2`)])
        setLoading(false)
        setMovies([ ...dataOne.data.results, ...dataTwo.data.results ])
    }
    fetchData()
  }, [match])

  return (
    <Box overflow='hidden'>
      <Header type={match.params.type} />
      <Box className={classes.posters}>
        <Grid container>
          {loading ? <Loader height='100%' /> : movies?.map(movie => (
            <Grid item key={movie.id} >
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.id}`} className={classes.img} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}