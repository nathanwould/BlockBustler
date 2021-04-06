import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneMovie } from '../../services/movies';
import './MovieDetails.css'

export default function MovieDetails(props) {
  const [movie, setMovie] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await getOneMovie(id);
      setMovie(movieData);
      setIsLoaded(true);
    }
    fetchMovie();
  }, [id])

  if (!isLoaded) {
    return <h3>Loading...</h3>
  }


  return (
    <div className='movie-details'>
      <div className='top-div'>
      <h2 className='movie-title'>{movie.title}</h2>
      <div className='clickybois'>
        {movie.isAvailable ?
            <button
              className='primary-button'
              // onClick={checkOut}
            >Check Out</button>
            : <button
              className='primary-button'
            >Return</button>
        }
        <Link
        className='secondary-button'
        to={`/movies/${movie.id}/edit`}
        >Edit</Link>
          </div>
      </div>
      <div className='bottom-div'>
      <h4 className='movie-date'>{movie.date}</h4>
      <ul className='directors-list'>Directed By:
      {movie?.directors.map(director => (
        <li
          className='director-name'
          key={director.id}>
          {director.name}</li>
      ))}
      </ul>
      <ul className='actors-list'>Starring:
      {movie?.actors.map(actor => (
        <li
          className='actor-name'
          key={actor.id}>
          {actor.name}</li>
        ))}
        </ul>
        </div>
    </div>
  )
}