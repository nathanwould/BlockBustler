import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <Link to='/'><h1>BlockBustler</h1></Link>
        {
          currentUser ?
            <>
              <p>{currentUser.username}</p>
              <button onClick={handleLogout}>Sign Out</button>
            </>
            :
            <Link to='/sign-in'>Sign In/Register</Link>
        }
      </header>
      {currentUser && (
        <>
          <Link to='/movies'>Movies</Link>  
        </>
      )}
      {props.children}
    </div>
  )
}