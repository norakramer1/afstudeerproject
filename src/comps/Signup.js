import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const createUser = UserAuth();

    const handleSubmit = async(e) => {  
    e.preventDefault();
    setError('');
    try {
        await createUser(email, password);
        navigate('/');

    } catch(err) {
        setError(err.message);
        console.log(err.message);
    }
};
    
    return (
<div>
    <div className="Signup">
        <h1>Signup</h1>
        <p>Sign up to create your account</p>
        <p>Already have an account?  <Link to='/login'>Sign in</Link></p>
    </div>

    <div className="form">
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" />

            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />

            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />

            <button type="submit">Sign up</button>
        </form>
    </div>
  </div>
 )
}   
export default Signup;