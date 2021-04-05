import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import MovieContainer from '../../components/moviecontainer/MovieContainer.jsx';
import AddMovie from '../addmovie/AddMovie.jsx';
import EditMovie from '../editmovie/EditMovie.jsx';
import MovieDetails from '../moviedetails/MovieDetails.jsx';

import { getAllMovies, getOneMovie, postMovie, putMovie, destroyMovie } from '../../services/movies';

export default function MovieScreen(props) {
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await getAllMovies();
      setMovies(movieData)
    }
    fetchMovies();
  }, [])

  const handleCreate = async (movieData) => {
    const newMovie = await postMovie(movieData);
    setMovies(prevState => [...prevState, newMovie]);
    history.push('/movies');
  }

  const handleUpdate = async (id, movieData) => {
    const updatedMovie = await putMovie(id, movieData);
    setMovies(prevState => prevState.map(movie => {
      return movie.id === Number(id) ? updatedMovie : movie
    }))
    history.push('/movies');
  }

  const handleDelete = async (id) => {
    await destroyMovie(id);
    setMovies(prevState => prevState.filter(movie => movie.id !== id))
  }

  return (
    <Switch>
      <Route path='/movies/new'>
        <AddMovie
          handleCreate={handleCreate}
          postMovie={postMovie}
        />
      </Route>
      <Route path='/movies/:id/edit'>
        <EditMovie
          movies={movies}
          handleUpdate={handleUpdate}
          putMovie={putMovie}
        />
      </Route>
      <Route path='/movies/:id'>
        <MovieDetails
          getOneMovie={getOneMovie}
          handleDelete={handleDelete}
          currentUser={currentUser}
        />
      </Route>
      <Route path='/movies'>
        <MovieContainer
          movies={movies}
          handleDelete={handleDelete}
          currentUser={currentUser}
        />
      </Route>
    </Switch>
  )
}