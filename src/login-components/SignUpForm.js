import React, {useState, useContext} from 'react'
import { UserContext } from '../context/UserContext.js';

import './Login.css'; 

const SignUpForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const { setUser, user } = useContext(UserContext);
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)

    fetch("/signup", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
          body: JSON.stringify({
                username,
                password,
                passwordConfirmation
            }),
        })
        .then((r) => {
            setLoading(false);
            if (r.ok) {
                r.json().then((user) => setUser(user))
            } else {
              r.json().then((error) => setErrors(error.errors))
              setTimeout(() => {
                setErrors(null);
              }, 3000);
            }
        })
        .catch((error) => {
          console.error("Error:", error);

    })
  }

  return (
    <div  className='login-container'>
      <div >
    <h2 >SIGN UP</h2>
    <form  onSubmit={handleSubmit}>
      <label  htmlFor="username">
        USERNAME
      </label>
      <input
        id="username"
        type="text"
        placeholder="Must be unique"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='form-input'
      />  
        <br></br><br></br>
      <label  htmlFor="password">
        PASSWORD
      </label>
      <input
        id="password"
        type="password"
        placeholder="Must have 6 or more characters"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='form-input'
      />
      <label  htmlFor="password_confirmation">
        Password Confirmation
      </label>
      <input
        id="password_confirmation"
        type="password"
        placeholder="Enter the same password again"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        className='form-input'
      />
       {/* <input
        id="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='form-input'
      /> */}
      <button className='form-button' type="submit" >
        {loading ? 'Loading...' : 'Sign Up'}
      </button>
      {errors && (
          <div className="error-messages">
            {errors.map((error, index) => (
              <p key={index} className="error-message">
                {error}
              </p>
            ))}
          </div>
        )}
    </form>
  </div>
</div>
  )
}

export default SignUpForm
