import Movies from '../movies/Movies.jsx';
import { Link } from 'react-router-dom';
import './MovieContainer.css'

export default function MovieContainer(props) {
  const { movies, setMovies, handleDelete, currentUser } = props;

  return (
    <div className='movies-div'>
      <Movies
        movies={movies}
        setMovies={setMovies}
      />
    </div>
  )
}