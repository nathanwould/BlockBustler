import Form from '../../components/form/Form.jsx'
import './AddMovie.css'

export default function AddMovie(props) {
  const {handleCreate, handleChange, movies} = props
  return (
    <>
    <h2>New Movie</h2>
    <Form
      movies={movies}
      handleCreate={handleCreate}
      handleChange={handleChange}
      />
      </>
  )
}