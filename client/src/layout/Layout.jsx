import { Link } from 'react-router-dom';
import './Layout.css';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <Link to='/' id='logo'><div>BLOCKBUSTLER</div></Link>
        {
          currentUser ?
            <div className="header-links">
              <Link
                className='primary-button'
                to='/movies'>Movies</Link>
              <button
                onClick={handleLogout}
                id="log-out"
                className='secondary-button'
              >Sign Out</button>
            </div>
            :
            <div className="header-links">
            <Link to='/sign-in'>Sign In/Register</Link>
            </div>
        }
      </header>
      {props.children}
    </div>
  )
}