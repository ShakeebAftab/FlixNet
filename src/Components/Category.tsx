import { useCallback, useEffect, useRef, useState } from "react"
import { Box, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import axios from "axios"
import { FetchURIs } from "../Helpers/FetchURIs"
import { CategoryProps, MovieType } from "../Helpers/Types"
import { Header } from "./Header"
import { Loader } from "./Loader"
import { Movie } from "./Movie"
import { Poster } from "./Poster"

const useStyles = makeStyles(() => ({
  posters: {
    display: 'flex',
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
}))

export const Category = ({ match }: CategoryProps) => {

  const classes = useStyles()
  const [movies, setMovies] = useState<MovieType[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  const observer = useRef<any>(null)
  const lastPoster = useCallback((node) => {
    if (loading) return
    if (observer.current?.isConnected) observer.current.disconnect()
    observer.current = new IntersectionObserver(enteries => {if (enteries[0].isIntersecting) setPage(page => page+1)})
    if (node) observer.current.observe(node)
  }, [loading])

  const [youtubeId, setYoutubeId] = useState<string | null>('')
  const [open, setOpen] = useState(false) 

  useEffect(() => {
    const fetchData = async() => {
      const idx = FetchURIs.findIndex((uri) => uri.route === match.params.type)
      const data = await axios.get(`${FetchURIs[idx].uri}&page=${page}`)
      setLoading(false)
      setMovies(movies => [...new Set([...movies, ...data.data.results])])
    }
    fetchData()
  }, [match, page])

  return (
    <Box overflow='hidden'>
      <Header type={match.params.type} />
      <Box className={classes.posters}>
        <Grid container>
          {loading ? <Loader height='100%' /> : movies?.map((movie, idx) => (
            movies.length - 1 === idx ? 
            <Grid item key={`${movie.id}:${idx}`} ref={lastPoster} >
              <Poster movie={movie} large={false} setOpen={setOpen} setYoutubeId={setYoutubeId}/>
            </Grid> :
            <Grid item key={`${movie.id}:${idx}`} >
              <Poster movie={movie} large={false} setOpen={setOpen} setYoutubeId={setYoutubeId}/>
            </Grid>
          ))}
        </Grid>
      </Box>
      {open && <Movie id={youtubeId ? youtubeId : ''} open={open} setOpen={setOpen} />}
    </Box>
  )
}