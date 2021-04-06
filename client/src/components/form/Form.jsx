import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Form.css'

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
    setDirectorInput('');
  }

  const handleAddActor = (e) => {
    e.preventDefault();
    setFormData(prevState => ({
      ...prevState,
      actors: [
        ...prevState.actors,
        {name: actorInput}
      ]
    }))
    setActorInput('');
  }
  
  const handleRemoveDirector = (name) => {
    setFormData(prevState => ({
      ...prevState,
      directors: prevState.directors.filter(director => {
        return director.name !== name
      })
    }))
  }

  const handleRemoveActor = (name) => {
    setFormData(prevState => ({
      ...prevState,
      actors: prevState.actors.filter(actor => {
        return actor.name !== name
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
    <form 
      className='movie-form'
      onSubmit={(e) => {
      e.preventDefault();
      id ?
        handleUpdate(id, formData)
        : handleCreate(formData);
      }}>
      <label className='field-container'>Title:
        <input
          type='text'
          name='title'
          value={title}
          onChange={handleChange}
        />
      </label>
      <label className='field-container'>Year:
        <input
          type='number'
          name='date'
          value={date}
          onChange={handleChange}
        />
      </label>
      <label className='field-container'>Directed By:
      {formData.directors.map((director, index) => (
        <div key={index}>
          <p>{director.name}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleRemoveDirector(director.name)
          }}
          >Remove</button>
        </div>
      ))}
        <input
          type='text'
          name='directors'
          value={directorInput}
          onChange={handleDirectorChange}
        />
      <button
      onClick={handleAddDirector}
      >Add Director</button>
      </label>
      <label className='field-container'>Starring:
      {formData.actors.map((actor, index) => (
        <div key={index}>
          <p>{actor.name}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleRemoveActor(actor.name)
          }}
          >Remove</button>
        </div>
      ))}
        <input
          type='text'
          name='actors'
          value={actorInput}
          onChange={handleActorChange}
        />
      <button
      onClick={handleAddActor}
      >Add Actor</button>
      </label>
      <button className='primary-button'>Save</button>
    </form>
  )
}