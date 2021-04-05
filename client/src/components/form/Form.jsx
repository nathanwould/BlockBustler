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
  const [directorInput, setDirectorInput] = useState('');
  const [actorInput, setActorInput] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleActorChange = (e) => {
    const value = e.target.value;
    setActorInput(value);
  }

  const handleDirectorChange = (e) => {
    const value = e.target.value;
    setDirectorInput(value);
  }

  const handleAddDirector = (e) => {
    e.preventDefault();
    setFormData(prevState => ({
      ...prevState,
      directors: [
        ...prevState.directors,
        {name: directorInput}
      ]
    }))
    setDirectorInput('')
  }

  const handleRemoveDirector = (name) => {
    setFormData(prevState => ({
      ...prevState,
      directors: prevState.directors.filter(director => {
        return director.name !== name
      })
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
    if (movies?.length) {
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
      {formData.directors.map((director, index) => (
        <div key={index}>
          <p>{director.name}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleRemoveDirector(director.name)
          }}
          >-</button>
        </div>
      ))}
      <label>Directors:
        <input
          type='text'
          name='directors'
          value={directorInput}
          onChange={handleDirectorChange}
        />
      </label>
      <button
      onClick={handleAddDirector}
      >+</button>
      <label>Starring:
        <input
          type='text'
          name='actors'
          value={actors}
          onChange={handleActorChange}
        />
      </label>
      <button>+</button>
      <button>Submit</button>
    </form>
  )
}