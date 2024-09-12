import React, { useState } from 'react';
import '../../../../Portfolio/src/components/Login/Login.css'
import axios from 'axios';

const Login = ({onLogin}) => {
  const [currState, setCurrState] = useState('Login');
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const url = "http://localhost:3000";

  // Handle input changes
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    let apiUrl = currState === "Login" ? `${url}/api/user/login` : `${url}/api/user/register`;

    try {
      const response = await axios.post(apiUrl, data);
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);

        if (currState === "Login") {
          // Specific user redirection after login
          if (data.email === 'abc@gmail.com' && data.password === '1234567') {
            window.location.href = 'http://localhost:5174/'; // Redirect specific user
          } else {
            window.location.href = 'http://localhost:5173/'; // Redirect other users
          }
        } else {
          alert("Registration successful. Please log in.");
          setCurrState("Login"); // Switch to login state after successful registration
        }

        onLogin(); // Invoke the onLogin prop to update App state
      } else {
        alert(response.data.message); // Display message from the backend
      }
    } catch (error) {
      alert("An error occurred while processing your request. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className='fixed login-popup w-full h-full grid bg-gray-400'>
      <form onSubmit={onSubmitHandler} className='login-popup-container text-gray-400 place-self-center rounded-md bg-gray-200 cursor-pointer flex flex-col gap-6 px-7 py-6'>
        <div className="flex justify-between items-center text-black">
          <h2 className='font-bold text-xl'>{currState}</h2>
        </div>
        <div className='login-popup-inputs flex flex-col gap-5'>
          {currState === "Sign Up" && (
            <input
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              className='border border-black rounded-sm h-9 p-2'
              type="text"
              placeholder='Your name'
              required
            />
          )}
          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            className='border border-black rounded-sm h-9 p-2'
            type="email"
            placeholder='Your Email'
            required
          />
          <input
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            className='border border-black rounded-sm h-9 p-2'
            type="password"
            placeholder='Password'
            required
          />
        </div>
        <button className='border-none p-3 border-r-4 rounded-lg text-white bg-red-600 hover:bg-red-700 text-base cursor-pointer' type='submit'>
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="flex items-start gap-2 mt-3">
          <input className='mt-1' type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login"
          ? <p>Create a new Account? <span className='text-black cursor-pointer' onClick={() => setCurrState("Sign Up")}>Click here</span></p>
          : <p>Already have an Account? <span className='text-black cursor-pointer' onClick={() => setCurrState("Login")}>Login here</span></p>}
      </form>
    </div>
  );
}

export default Login;
