import React, { useState } from 'react';

const Login = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState('Login');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = currState === 'Login'
            ? 'http://localhost:3000/api/user/login'
            : 'http://localhost:3000/api/user/register';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            
            if (response.ok) {
                // If login/register is successful
                console.log('Success:', data);
                setShowLogin(false); // Hide login popup after success
            } else {
                // If there's an error, display it
                setError(data.message || 'An error occurred');
            }
        } catch (err) {
            setError('An error occurred');
            console.error('Error:', err);
        }
    };

    return (
        <div className='fixed login-popup w-full h-full grid bg-gray-400'>
            <form 
                onSubmit={handleSubmit} 
                className='login-popup-container text-gray-400 place-self-center rounded-md bg-gray-200 cursor-pointer flex flex-col gap-6 px-7 py-6'
            >
                <div className="flex justify-between items-center text-black">
                    <h2 className='font-bold text-xl'>{currState}</h2>
                </div>
                <div className='login-popup-inputs flex flex-col gap-5'> 
                    {currState === "Sign Up" && (
                        <input 
                            name='name' 
                            className='border border-black rounded-sm h-9 p-2'  
                            type="text" 
                            placeholder='Your name' 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                        />
                    )}
                    <input 
                        name='email' 
                        className='border border-black rounded-sm h-9 p-2'  
                        type="email" 
                        placeholder='Your Email' 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                    />
                    <input 
                        name='password' 
                        className='border border-black rounded-sm h-9 p-2'   
                        type="password" 
                        placeholder='Password' 
                        value={formData.password}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <button 
                    className='border-none p-3 border-r-4 rounded-lg text-white bg-red-600 hover:bg-red-700 text-base cursor-pointer' 
                    type='submit'
                >
                    {currState === "Sign Up" ? "Create account" : "Login"}
                </button>
                {error && <p className="text-red-600">{error}</p>}
                <div className="flex items-start gap-2 mt-3">
                    <input className='mt-1' type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Login" ? (
                    <p>Create a new Account? <span className='text-black' onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                ) : (
                    <p>Already have an Account? <span className='text-black' onClick={() => setCurrState("Login")}>Login here</span></p>
                )}
            </form>
        </div>
    );
};

export default Login;
