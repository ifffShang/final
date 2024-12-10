import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = async (e) => {
    e.preventDefault();

    try {
     // Send POST request to backend
     const response = await axios.get('http://localhost:8000/', {
      // email: data.email,
      // password: data.password,
    });

    // Handle successful login response
    console.log(response.data);  // Example: log the response data
    // You can also store the token or user info here, or redirect to another page
  } catch (error) {
    // Handle any error that occurs during the request
    console.error("Error during login:", error);
    // Optionally show an error message to the user
  }
};


  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}></input>
        <label>Password</label>
        <input type='password' placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}></input>

        <button type = 'submit' className='btn_secondary'>Login</button>
      </form>
    </div>
  )
}
