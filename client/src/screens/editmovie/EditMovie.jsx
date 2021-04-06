import Form from '../../components/form/Form.jsx'

export default function EditMovie(props) {
  const {handleCreate, handleChange, handleUpdate, movies} = props
  return (
    <Form
      movies={movies}
      handleCreate={handleCreate}
      handleChange={handleChange}
      handleUpdate={handleUpdate}
    />
  )
}