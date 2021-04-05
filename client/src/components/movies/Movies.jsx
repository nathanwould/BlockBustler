import React from 'react';
import { Link } from 'react-router-dom';

export default function Movies(props) {
  const { movies } = props;
  
  return (
    <div>
      <h3>Movies</h3>
      {
        movies.map(movie => (
          <React.Fragment key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <p>{movie.title}</p>
              <p>{movie.date}</p>
              {movie.isAvailable ? <p>&#10003;</p> : <p>-</p>}
            </Link>
          </React.Fragment>
        ))
      }
    </div>
  )
}