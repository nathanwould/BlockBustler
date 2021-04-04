import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignIn(props) {
  const [formData, setFormData] = useState({
    employeeID: '',
    password: ''
  })
  const { employeeID, password } = formData;
  const { handleLogin } = props;

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
      handleLogin(formData);
    }}>
      <h3>Login</h3>
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
      <Link to='/register'>Register</Link>
      <button>Submit</button>
    </form>
  )
}