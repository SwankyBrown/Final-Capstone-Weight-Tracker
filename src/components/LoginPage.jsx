import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from "./css/LoginPage.module.css"
import authContext from '../store/authContex';
import videoSource from "../components/Video.mp4"

const LoginPage = () => {
  const [register, setRegister] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [display, setDisplay] = useState('none');

  const authCtx = useContext(authContext);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    setDisplay('none');

    if (username.length < 3 || password.length < 8) {
      setMessage(" Username not long enough | password must be at least 8 characters long");
      setDisplay('block');
      return;
    }

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
          navigate('/');
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
    <main className={styles['login-page']}>
      <video autoPlay loop muted className={styles['video-bg']}>
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className="content">
        <h1 className={styles['business-name']}>Kaizen</h1>
        <h1>{register ? 'Register' : 'Login'}</h1>
        <form className={`form auth-form ${styles['form']}`} onSubmit={submitHandler}>
          <input
            type='text'
            placeholder='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
            className={`form-input ${styles['form-input']}`}
          />
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={`form-input ${styles['form-input']}`}
          />
          <button className={`form-btn ${styles['form-btn']}`}>
            {register ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <p style={{ display: display }} className={`auth-msg ${styles['auth-msg']}`}>{message}</p>
        <button className={`form-btn ${styles['form-btn']}`} onClick={() => setRegister(!register)}>
          {register ? 'Already have an account? Login' : 'Need to Sign Up?'}
        </button>
      </div>
    </main>
  );
};

export default LoginPage;
