import { useState } from 'react';
import bgimg from '../assets/Well.jpg';
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (e) => {
        setUserName(e.target.value);
        console.log(username);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log(password);
    };

    const submit = () => {
        // Add your submit logic here
    };

    return (
        <div>
              
            <div className='h-screen bg-top bg-cover flex justify-center items-center' style={{ backgroundImage: `url(${bgimg})` }}>
        <div className='h-auto w-full max-w-md border-2 my-24 rounded-xl bg-opacity-40 bg-gray-50 p-8 md:p-12'>
            <p className='text-center text-3xl md:text-5xl font-bold mb-5'>Login</p>
            <div className='mb-5'>
                <label className='block text-lg px-2 font-medium'>Username:</label>
                <div className='h-12 bg-white rounded-lg mt-2'>
                    <input className='h-full w-full px-2 ' type="text" name="username" id="name" onChange={handleUsername} />
                </div>
            </div>
            <div className='mb-5'>
                <label className='block text-lg px-2 font-medium'>Password:</label>
                <div className='h-12 bg-white rounded-lg mt-2'>
                    <input className='h-full w-full px-2' type="password" name="password" id="password" onChange={handlePassword} />
                </div>
            </div>
            <div className='flex justify-end mb-4'>
                <p className='text-right text-sm font-medium'>Forgot password?</p>
            </div>
            <div className='flex justify-center'>
                <button className='h-10 w-28 bg-black rounded-lg text-white font-semibold' onClick={submit}>
                    Login
                </button>
            </div>
            <div className="flex items-center my-5">
    <div className="flex-grow border-t border-black border"></div>
    <span className="px-4 text-black text-lg">or</span>
    <div className="flex-grow border-t border-black border"></div>
</div>
            <div className='text-center'>
                <p className='mb-2 font-medium'>Create a new account?</p>
                <p className='font-bold text-blue-600 cursor-pointer text-lg'><Link to ="/Signup">Sign up</Link></p>
            </div>
        </div>
    </div>
    </div>
        
    );
}

export default Login;
