import React from 'react';
import './css/LoginPage.css';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className='login'>Login/Register</h2>
        <form>
          <input type="" placeholder="Username" className="small-input" />
          <input type="password" placeholder="Password" className="small-input" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;