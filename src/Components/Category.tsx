import { Box, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import axios from "axios"
import { useCallback, useEffect, useRef, useState } from "react"
import { FetchURIs } from "../Helpers/FetchURIs"
import { CategoryProps, MovieType } from "../Helpers/Types"
import { Header } from "./Header"
import { Loader } from "./Loader"
import movieTrailer from 'movie-trailer'
import { Movie } from "./Movie"

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

  const handlePosterClick = async (movie: MovieType) => {
    try {
      const url = await movieTrailer(movie.name || movie.original_name || movie.original_title || movie.title || '')
      const params = new URLSearchParams(new URL(url).searchParams)
      setYoutubeId(params.get('v'))
      setOpen(true)
    } catch (err) {
      console.log(err)
    }
  }

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
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.id}`} className={classes.img} onClick={() => handlePosterClick(movie)} />
            </Grid> :
            <Grid item key={`${movie.id}:${idx}`} >
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.id}`} className={classes.img} onClick={() => handlePosterClick(movie)} />
            </Grid>
          ))}
        </Grid>
      </Box>
      {open && <Movie id={youtubeId ? youtubeId : ''} open={open} setOpen={setOpen} />}
    </Box>
  )
}