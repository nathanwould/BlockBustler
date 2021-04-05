import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneMovie } from '../../services/movies';

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
      <h4>{movie.title}</h4>
      <h4>{movie.date}</h4>
      <ul>Directed By:
      {movie?.directors.map(director => (
        <li key={director.id}>{director.name}</li>
      ))}
      </ul>
      <ul>Starring:
      {movie?.actors.map(actor => (
        <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
      <Link to={`/movies/${movie.id}/edit`}>Edit</Link>
    </div>
  )
}