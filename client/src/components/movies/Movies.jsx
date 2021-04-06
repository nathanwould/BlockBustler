import React from 'react';
import { Link } from 'react-router-dom';
import './Movies.css'

export default function Movies(props) {
  const { movies } = props;
  
  return (
    <div>
      <h2 className='page-title'>Movies</h2>
      <div className='movie-table'>
      {
        movies.map(movie => (
          <div className='movie-info' key={movie.id}>
              <p>{movie.title}</p>
              <p>{movie.date}</p>
              {movie.isAvailable ? <p>&#10003;</p> : <p>-</p>}
            <Link to={`/movies/${movie.id}`}>View Details</Link>
          </div>
        ))
        }
        </div>
    </div>
  )
}