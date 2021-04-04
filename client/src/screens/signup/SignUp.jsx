import { useState } from 'react';

export default function Register(props) {
  const [formData, setFormData] = useState({
    employeeID: '',
    password: ''
  })
  const { employeeID, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
<form onSubmit={(e)=>{
      e.preventDefault();
      handleRegister(formData);
    }}>
      <h3>Register</h3>
      <label>
        Employee ID:
        <input
          type='text'
          name='employeeID'
          value={employeeID}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  )
}