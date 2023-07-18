import { useState, useContext } from 'react';
import axios from 'axios';
import "./css/LoginPage.css"
import authContext from '../store/authContex';

const LoginPage = () => {
  const [register, setRegister] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [display, setDisplay] = useState('none')

  const authCtx = useContext(authContext)

  const submitHandler = (e) => {
    e.preventDefault();
  
    setDisplay('none');
  
    const body = {
      username,
      password,
    };
  
    const url = 'http://localhost:3817/';
  
    axios.post(register ? `${url}api/register` : `${url}api/login`, body)
      .then((res) => {
        if (res.data) {
          console.log('AFTER AUTH', res.data);
          console.log(authCtx);
          authCtx.login(res.data.token, res.data.exp, res.data.userId);
        } else {
          setMessage("Invalid response from the server");
          setDisplay('block');
        }
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          setMessage(err.response.data);
          setDisplay('block');
        } else {
          setMessage("An error occurred during the request");
          setDisplay('block');
        }
        setPassword('');
        setUsername('');
      });
  };

  return (
      <main>
          <h1>Login/Register</h1>
          <form className='form auth-form' onSubmit={submitHandler}>
              <input 
                  type='text' 
                  placeholder='username' 
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className='form-input'/>
              <input 
                  type='password' 
                  placeholder='password' 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className='form-input'/>
              <button className='form-btn'>
                  {register ? 'Sign Up' : 'Login'}
              </button>
          </form>
          <p style={{display: display}} className='auth-msg'>{message}</p>
          <button className='form-btn' onClick={() => setRegister(!register)}>
              Need to {register ? 'Login' : 'Sign Up'}?
          </button>
      </main>
  )
}

export default LoginPage;