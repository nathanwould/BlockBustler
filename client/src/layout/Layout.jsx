import { Link } from 'react-router-dom';

export default function Layout(props) {
  return (
    <div>
      <header>
        <Link to='/'><h1>BlockBustler</h1></Link>
      </header>
      {props.children}
    </div>
  )
}