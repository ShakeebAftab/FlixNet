import axios from 'axios'
import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Box, Typography } from '@material-ui/core'
import movieTrailer from 'movie-trailer'
import { Loader } from './Loader'

// Types
import { MovieType, RowProps } from '../Helpers/Types'
import { Movie } from './Movie'

const useStyles = makeStyles(() => ({
  title: {
    paddingLeft: '20px',
  },

  posters: {
    display: 'flex',
    padding: '20px',
    overflowY: 'hidden',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },

  img: {
    objectFit: 'contain',
    width: '100%',
    maxHeight: '230px',
    marginRight: '20px',
    transition: '700ms',
    '&:hover': {
      transform: 'scale(1.08)'
    }
  }

}))

export const Row = ({title, uri}: RowProps) => {

  const classes = useStyles()
  const [movies, setMovies] = useState<MovieType[] | null>(null)
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
    const fetchData = async () => {
      try {
        const data = await axios.get(uri)
        setMovies(data.data.results)
      } catch (err) {
        console.log(err)  
      }
    }
    fetchData();
  }, [uri])

  if (!movies) return <Loader height={'230px'} />

  return (
    <Box>
      <Typography variant="h6" component="h2" color='textPrimary' className={classes.title}>
        {title}
      </Typography>
      <Box className={classes.posters}>
        {movies?.map(movie => <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.id}`} key={movie.id} className={classes.img} onClick={() => handlePosterClick(movie)} />)}
      </Box>
      {open && <Movie id={youtubeId ? youtubeId : ''} open={open} setOpen={setOpen} />}
    </Box>
  )
}
