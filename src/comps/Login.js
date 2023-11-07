import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
    const { signIn } = UserAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError('');

        try {
            await signIn(email, password);
            navigate('/');
        } catch(err) {
            setError(err.message);
            console.log(err.message);
        }
    }

    return (
        <div>
    <div className="Login">
        <h1>Login</h1>
        <p>Login to your account</p>
        <p>Don't have an account?  <Link to='/signup'>Sign up</Link></p>
    </div>

    <div className="form">
        <form onSubmit={handleSubmit}>
            {/* <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" /> */}

            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />

            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />

            <button type="submit">Sign in</button>
        </form>
    </div>
  </div>
    )
}   

export default Login;