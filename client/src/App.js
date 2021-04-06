import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout'
import MovieScreen from './screens/moviescreen/MovieScreen';
import SignIn from "./screens/signin/SignIn.jsx";
import SignUp from "./screens/signup/SignUp.jsx";
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, [])

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/movies');
  }

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/movies');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/sign-in');
  }

  return (
    <div className="App">
      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
      >
        <Switch>
          <Route path='/sign-in'>
            <SignIn handleLogin={handleLogin}/>
          </Route>
          <Route path='/register'>
            <SignUp handleRegister={handleRegister}/>
          </Route>
          <Route path='/'>
            <MovieScreen />
          </Route>
        </Switch>

      </Layout>
    </div>
  );
}

export default App;