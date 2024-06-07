import React from 'react'
import'../CSS/Login.css'
const Login = () => {
  return (
    <div className='login'>
      <div className='login-container'>
      <h1>Create Your Account</h1>
      <div className="signup-input">
        <input type="text" placeholder='Enter your E-mail here'/>
        <input type="password" placeholder='Password'/>

      </div>
      <div className='signup-date'>
        <h2>Date of birth</h2>
        <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
        <input type="date" />
      </div>
      <button>Signup</button>
      </div>
    </div>
  )
}

export default Login
