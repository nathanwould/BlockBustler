import Form from '../../components/form/Form.jsx'
import './AddMovie.css'

export default function AddMovie(props) {
  const {handleCreate, handleChange, handleUpdate, movies} = props
  return (
    <>
    <h2>New Movie</h2>
    <Form
        movies={movies}
        handleUpdate={handleUpdate}
      handleCreate={handleCreate}
      handleChange={handleChange}
      />
      </>
  )
}