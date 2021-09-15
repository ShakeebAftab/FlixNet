import axios from 'axios'
import { useEffect, useState } from 'react'

// Types
import { MovieType, RowProps } from '../Helpers/Types'
import { makeStyles } from '@material-ui/styles'
import { Box, Typography } from '@material-ui/core'
import { Loader } from './Loader'

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

  const [movies, setMovies] = useState<MovieType[] | null>(null)

  const classes = useStyles()

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
        {movies?.map(movie => <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.id}`} key={movie.id} className={classes.img} />)}
      </Box>
    </Box>
  )
}
