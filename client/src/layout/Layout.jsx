import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <Link to='/' id='logo'><h1>BlockBustler</h1></Link>
        {
          currentUser ?
            <>
              <p>{currentUser.employeeID}</p>
              <Link to='/movies'>Movies</Link>  
              <button onClick={handleLogout}>Sign Out</button>
            </>
            :
            <Link to='/sign-in'>Sign In/Register</Link>
        }
      </header>
      <hr/>
      {props.children}
    </div>
  )
}