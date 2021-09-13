import axios from 'axios'
import { useEffect, useState } from 'react'
import { FetchURIs } from '../../Helpers/FetchURIs'
import './Header.css'

export const Header = (props: any) => {

  const [movie, setMovie] = useState<any>({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(FetchURIs[0].uri)
        setMovie(data.data.results[Math.floor(Math.random() * data.data.results.length - 1)])
      } catch (err) {
        console.log(err)
      }
    }  
    fetchData()
  }, [])

  return (
    <header className='container' style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }}>
      <div className="content">
        <h1 className='title'>{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className="buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h4 className="desc">{movie?.overview}</h4>
      </div>
      <div className="bottomFadeout" />
    </header>
  )
}
