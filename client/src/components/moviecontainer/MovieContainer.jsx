import Movies from '../movies/Movies.jsx';
import { Link } from 'react-router-dom';

export default function MovieContainer(props) {
  const { movies, handleDelete, currentUser } = props;
  return (
    <div className='movies-div'>
      <Movies
        movies={movies}
      />
      <Link to='/movies/new'>Add Movie</Link>
    </div>
  )
}