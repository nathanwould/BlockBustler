import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './SignIn.css'

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
      <div className='form-field'>
      <label>
        Employee ID:
        <input
          type='text'
          name='employeeID'
          value={employeeID}
          onChange={handleChange}
        />
        </label>
        </div>
      <br />
      <div className='form-field'>
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
        </label>
        </div>
      <br />
      <Link to='/register'>Register</Link>
      <br />
      <br />
      <button>Submit</button>
    </form>
  )
}