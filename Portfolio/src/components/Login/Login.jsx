import React, { useState } from 'react'
import './Login.css'

const Login = ({setShowLogin}) => {

  const [currState, setCurrState] = useState('Login');
  return (
    <div className='fixed login-popup  w-full h-full grid'>
        <form  className='login-popup-container text-gray-400 place-self-center bg-white cursor-pointer flex flex-col gap-6 px-7 py-6'>
            <div className=" flex justify-between items-center text-black">
                <h2 className='font-bold text-xl '>{currState}</h2>
                <button className='w-8 h-8 cursor-pointer rounded-full bg-gray-300' onClick={() =>setShowLogin(false)}  alt="">X</button>
            </div>
            <div className='login-popup-inputs flex flex-col gap-5'> 
                {currState==="Login"?<></>:<input name='name'  type="text" placeholder='Your name' required/>}
                <input name='email'  type="email" placeholder='Your Email' required/>
                <input name='password'   type="password" placeholder='password' required/>
            </div>
            <button className='border-none p-3 border-r-4 rounded-lg text-white bg-red-600 hover:bg-red-700 text-base cursor-pointer' type='submit'>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="flex items-start gap-2 mt-3">
                <input className='mt-1' type="checkbox" required />
                <p>By continuing, i agree to the  terms of use & privacy policy.</p>
            </div>
            {currState==="Login"
            ?<p>Create a new Account? <span className='text-black' onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an Account? <span className='text-black' onClick={()=>setCurrState("Login")}>Login here</span></p>}
            
            
        </form>
    </div>
  )
}

export default Login




