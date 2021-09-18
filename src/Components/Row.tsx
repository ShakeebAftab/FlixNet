import axios from 'axios'
import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Box, Typography } from '@material-ui/core'
import { Loader } from './Loader'

// Types
import { MovieType, RowProps } from '../Helpers/Types'
import { Movie } from './Movie'
import { Poster } from './Poster'

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

}))

export const Row = ({title, uri}: RowProps) => {

  const classes = useStyles()
  const [movies, setMovies] = useState<MovieType[] | null>(null)
  const [youtubeId, setYoutubeId] = useState<string | null>('')
  const [open, setOpen] = useState(false)

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
        {movies?.map(movie => <Poster movie={movie} setOpen={setOpen} setYoutubeId={setYoutubeId} large />)}
      </Box>
      {open && <Movie id={youtubeId ? youtubeId : ''} open={open} setOpen={setOpen} />}
    </Box>
  )
}
