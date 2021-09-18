import { makeStyles } from "@material-ui/core"
import { MovieType, PosterProps } from "../Helpers/Types"
import movieTrailer from 'movie-trailer'

const useStyles = makeStyles(() => ({
  img: {
    objectFit: 'contain',
    width: '100%',
    marginRight: '20px',
    transition: '700ms',
    '&:hover': {
      transform: 'scale(1.08)'
    }
  }
}))

export const Poster = ({ movie, large, setOpen, setYoutubeId }: PosterProps) => {

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

  const classes = useStyles()
  return <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.id}`} className={classes.img} style={{maxHeight: (large ? '230px' : '200px'), width: (large ? '100%' : '130px')}} onClick={() => handlePosterClick(movie)} />
}
