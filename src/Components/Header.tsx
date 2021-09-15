import axios from 'axios'
import { useEffect, useState } from 'react'
import { MovieType } from '../Helpers/Types'
import { FetchURIs } from '../Helpers/FetchURIs'
import { Box, Button, Container, makeStyles, Typography, Grid, useMediaQuery, useTheme } from '@material-ui/core'
import { Loader } from './Loader'

const useStyles = makeStyles(() => ({
  container: {
    minHeight: '80vh',
    maxHeight: '80vh',
    marginBottom: '20px',
    objectFit: 'contain'
  },

  title: {
    paddingBottom: '1rem'
  },

  desc: {
    lineHeight: '1.5',
    paddingTop: '1rem',
  },

  button: {
    color: 'white',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    marginRight: '1rem',
    backgroundColor: 'rgba(51, 51, 51, 0.5)',
    '&:hover': {
      color: 'black',
    },
  },

  bottomFadeout: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '82vh',
    backgroundImage: 'linear-gradient(180deg, transparent, rgba(27, 27, 27, 0.61),#111)',
  }
}))

export const Header = () => {

  const classes = useStyles()
  const [movie, setMovie] = useState<MovieType | null>(null)
  const [loading, setLoading] = useState(true)
  const theme = useTheme()
  const breakPoint = useMediaQuery(theme.breakpoints.up('xs'))

  const getDesc = (str: string | undefined) => str && str.length > 300 ? `${str?.substr(0, 297)}...` : str

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(FetchURIs[0].uri)
        setMovie(data.data.results[Math.floor(Math.random() * data.data.results.length - 1)])
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }  
    fetchData()
  }, [])

  if (loading) return <Loader height='80vh' />

  return (
    <Box className={classes.container} style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }}>
      <Box className={classes.bottomFadeout}>
        <Grid container direction='column' spacing={breakPoint ? 8 : 10}>
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={12} container >
            <Grid item xs={1} />
            <Grid item>
              <Container maxWidth='sm'>
                <Typography variant="h4" component="h2" className={classes.title} color='textPrimary'>
                  {movie?.name || movie?.title || movie?.original_name || movie?.original_title}
                </Typography>
                  <Button variant='contained' className={classes.button}>Play</Button>
                  <Button variant='contained' className={classes.button}>My List</Button>
                <Typography variant="body2" component="h2" className={classes.desc} color='textPrimary' align='justify'>
                  {getDesc(movie?.overview)}
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
