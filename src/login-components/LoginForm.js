import React, {useState, useContext} from 'react'
import { useNavigate} from 'react-router-dom';
import { UserContext } from '../context/UserContext.js';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { setUser, user } = useContext(UserContext);


  const handleSubmit = (e) => {
    e.preventDefault()  

    fetch('/login', {
      method: 'POST',
      headers: {    
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then((res) => {
        if (res.ok) {
          res.json().then((user) => {
            setUser(user);
            navigate('/');  
          });
        } else {
          res.json().then((error) => setErrors(error.errors))
          setTimeout(() => {
            setErrors(null);
          }, 3000);
          return;
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
        setErrors('An error occurred during login. Please try again later.');
      });
  };
  
  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type='username'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='form-input'
        />
        <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='form-input'
        />
        <button className='form-button' type='submit'>
          LOGIN
        </button>
      </form>
      {errors && (
          <div className="error-messages">
            {errors.map((error, index) => (
              <p key={index} className="error-message">
                {error}
              </p>
            ))}
          </div>
        )}
    </div>
  )
}

export default LoginForm