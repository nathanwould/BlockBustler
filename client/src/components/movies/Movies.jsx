import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search/Search';
import './Movies.css'

export default function Movies(props) {
  const { movies, setMovies } = props;

  const handleSearch = e => {
    const results = movies.filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase()));
    setMovies(results)
  }
  
  return (
    <div>
      <h2 className='page-title'>Movies</h2>
      <Search
        className='search'
        movies={movies}
        handleSearch={handleSearch}
      />
        <div className='movie-info movie-header'>
          <p className='table-cell'>Title</p>
          <p className='table-cell'>Release Date</p>
          <p className='table-cell'>Availability</p>
          <p className='table-cell'>See More</p>
        </div>
      <div className='movie-table'>
      {
        movies.map(movie => (
          <div className='movie-info' key={movie.id}>
              <p className='movie-title table-cell'>{movie.title}</p>
              <p className='movie-date table-cell'>{movie.date}</p>
              {movie.isAvailable ? <p className='movie-data table-cell'>&#10003;</p> : <p>-</p>}
            <Link
              to={`/movies/${movie.id}`}
              className='movie-data table-cell'
            >View Details</Link>
          </div>
        ))
        }
        </div>
    </div>
  )
}