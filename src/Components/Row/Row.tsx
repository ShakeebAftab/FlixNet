import axios from 'axios'
import { useEffect, useState } from 'react'
import './Row.css'

// Types
import { RowProps } from '../Types'

export const Row = ({title, uri}: RowProps) => {

  const [movies, setMovies] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(uri)
        setLoading(false)
        setMovies(data.data.results)
      } catch (err) {
        console.log(err)  
      }
    }
    fetchData();
  }, [uri])

  if (loading) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <div className="row">
      <h2 className="rowTitle">{title}</h2>
      <div className="posters">
        {movies.map(movie => <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.id}`} key={movie.id} className='img' />)}
      </div>
    </div>
  )
}
