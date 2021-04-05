import Form from '../../components/form/Form.jsx'

export default function AddMovie(props) {
  const {handleCreate, handleChange, movies} = props
  return (
    <Form
      movies={movies}
      handleCreate={handleCreate}
      handleChange={handleChange}
    />
  )
}