import React, { useState } from 'react';
import axios from 'axios';
import { redirect } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (event) => {
      event.preventDefault();
      try {
          const response = await axios.post('http://localhost:3000/api/auth/register', {
              username,
              password,
          });
          console.log(response.data);
          alert('Registration successful');
          //TODO - Redirect to dashboard page upon successful registration
      } catch (error) {
          console.error('Registration error:', error.response ? error.response.data : error.message);
          alert('Registration failed');
          //TODO - Have warning to include x-amount of char and upper/lowercase gatekeeper for security
      }
    };

    //TODO - Improve UI for RegisterPage with responsive Page
    //TODO - Allow user to go Back to Login Page
    return (
      <>
         <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Register your account
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleRegister}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="username" className="sr-only">Username</label>
                                <input id="username" name="username" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input id="password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
      </>
    ) 
  }
  
export default LoginPage;