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
              <nav className='flex flex-row justify-between items-center bg-black text-white h-20 px-10'>
       <div className="flex flex row space-x-4 ">
       <p><Link to ="/">HOME</Link></p>
        <p><Link to ="/Packages">PACKAGES</Link></p>
        </div> 
        
       <div className="flex flex row space-x-4 ">
    
            <p><Link to ="/Signup">SIGNUP</Link></p>
        </div>
    </nav>
            <div className='h-screen bg-top bg-cover flex justify-center items-center' style={{ backgroundImage: `url(${bgimg})` }}>
        <div className='h-auto w-full max-w-md border-2 my-24 rounded-xl bg-opacity-40 bg-gray-50 p-8 md:p-12'>
            <p className='text-center text-3xl md:text-5xl font-bold mb-8'>Login</p>
            <div className='mb-6'>
                <label className='block text-lg px-2'>Username:</label>
                <div className='h-12 bg-white rounded-lg mt-2'>
                    <input className='h-full w-full px-2' type="text" name="username" id="name" onChange={handleUsername} />
                </div>
            </div>
            <div className='mb-6'>
                <label className='block text-lg px-2'>Password:</label>
                <div className='h-12 bg-white rounded-lg mt-2'>
                    <input className='h-full w-full px-2' type="password" name="password" id="password" onChange={handlePassword} />
                </div>
            </div>
            <div className='flex justify-end mb-4'>
                <p className='text-right text-sm'>Forgot password?</p>
            </div>
            <div className='flex justify-center'>
                <button className='h-10 w-28 bg-black rounded-lg text-white font-semibold' onClick={submit}>
                    Login
                </button>
            </div>
            <p className='my-6 text-center'>______________________ or ______________________</p>
            <div className='text-center'>
                <p className='mb-2'>Create a new account?</p>
                <p className='font-bold text-blue-600 cursor-pointer'><Link to ="/Signup">Sign up</Link></p>
            </div>
        </div>
    </div>
    </div>
        
    );
}

export default Login;
