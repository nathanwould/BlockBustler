import Movies from '../movies/Movies.jsx';
import { Link } from 'react-router-dom';
import Search from '../search/Search';

export default function MovieContainer(props) {
  // const [queriedMovies, setQueriedMovies] = useState([]);
  const { movies, setMovies, handleDelete, currentUser } = props;

  const handleSearch = e => {
    const results = movies.filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase()));
    setMovies(results)
  }
  return (
    <div className='movies-div'>
      <Search
        movies={movies}
        handleSearch={handleSearch}
      />
      <Movies
        movies={movies}
      />
      <Link to='/movies/new'>Add Movie</Link>
    </div>
  )
}