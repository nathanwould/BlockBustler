import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Form(props) {
  const { handleCreate, handleUpdate, movies } = props;
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    isAvailable: true,
    directors: [],
    actors: []
  });
  const { title, date, directors, actors } = formData
  const { id } = useParams();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  useEffect(() => {
    const prefillFormData = () => {
      const movie = movies.find(movie => movie.id === Number(id));
      setFormData({
        title: movie.title,
        date: movie.date,
        directors: movie.directors,
        actors: movie.actors
      })
    }
    if (movies.length) {
      prefillFormData()
    }
  }, [movies, id])

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      id ?
        handleUpdate(id, formData)
        : handleCreate(formData);
    }}>
      <h4>Add Movie</h4>
      <label>Title:
        <input
          type='text'
          name='title'
          value={title}
          onChange={handleChange}
        />
      </label>
      <label>Year:
        <input
          type='number'
          name='date'
          value={date}
          onChange={handleChange}
        />
      </label>
      <label>Directors:
        <input
          type='text'
          name='directors'
          value={directors[0]}
          onChange={handleChange}
        />
        <input
          type='text'
          name='directors'
          value={directors[1]}
          onChange={handleChange}
        />
        <input
          type='text'
          name='directors'
          value={directors[2]}
          onChange={handleChange}
        />
      </label>
      <label>Starring:
        <input
          type='text'
          name='actors'
          value={actors}
          onChange={handleChange}
        />
        <input
          type='text'
          name='actors'
          value={actors}
          onChange={handleChange}
        />
        <input
          type='text'
          name='actors'
          value={actors}
          onChange={handleChange}
        />
        <input
          type='text'
          name='actors'
          value={actors}
          onChange={handleChange}
        />
        <input
          type='text'
          name='actors'
          value={actors}
          onChange={handleChange}
        />
        <input
          type='text'
          name='actors'
          value={actors}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}