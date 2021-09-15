import axios from 'axios'
import { useEffect, useState } from 'react'
import './Row.css'

// Types
import { MovieType, RowProps } from '../Types'

export const Row = ({title, uri}: RowProps) => {

  const [movies, setMovies] = useState<MovieType[] | null>(null)

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

  if (!movies) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <div className="row">
      <h2 className="rowTitle">{title}</h2>
      <div className="posters">
        {movies?.map(movie => <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.id}`} key={movie.id} className='img' />)}
      </div>
    </div>
  )
}
