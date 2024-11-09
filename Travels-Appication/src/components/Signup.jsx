import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgimg from '../assets/Well.jpg';
import { Link } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const navigate = useNavigate();

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword1 = (e) => {
        setPassword1(e.target.value);
    };
    const handlePassword2 = (e) => {
        setPassword2(e.target.value);
    };
     //  Starlin
    const toLogin=()=>{
        navigate("/login")
    }
    // =======
    async function submit() {
        if (password1 === password2) {
            const url = 'http://localhost:8081/register';
            setPassword(password1);
            const data = {
                "username": username,
                "password": password,
                "email": email
            };

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (!response.ok) {
                    alert("Username Already Exist");
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                console.log('User registered successfully:', result);
                navigate("/login");
            } catch (error) {
                console.error('Error registering user:', error);
            }
        } else {
            alert("Password not matching");
        }
    }

    return (
        <div>
            <nav className='flex flex-row justify-between items-center bg-black text-white h-20 px-10'>
                <div className="flex flex row space-x-4 ">
                <p><Link to ="/">HOME</Link></p>
                    <p><Link to ="/Packages">PACKAGES</Link></p>
                    </div> 
                    
                <div className="flex flex row space-x-4 ">
                

                <p><Link to ="/Login">LOGIN</Link></p>
                </div>
            </nav>

        <div className='h-screen bg-top bg-cover flex justify-center items-center ' style={{ backgroundImage: `url(${bgimg})` }}>
            <div className='h-auto w-full max-w-md border-2 rounded-xl bg-opacity-40 bg-gray-50 p-8 my-20 md:p-12'>
                <p className='text-center text-3xl md:text-5xl font-bold mb-8'>Sign up</p>
                <div className='mb-6'>
                    <label className='block text-lg px-2'>Username:</label>
                    <div className='h-12 bg-white rounded-lg mt-2'>
                        <input className='h-full w-full px-2' type="text" name="username" id="name" onChange={handleUsername} />
                    </div>
                </div>
                <div className='mb-6'>
                    <label className='block text-lg px-2'>Gmail or Mobile No:</label>
                    <div className='h-12 bg-white rounded-lg mt-2'>
                        <input className='h-full w-full px-2' type="email" name="mail" id="mail" onChange={handleEmail} />
                    </div>
                </div>
                <div className='mb-6'>
                    <label className='block text-lg px-2'>Password:</label>
                    <div className='h-12 bg-white rounded-lg mt-2'>
                        <input className='h-full w-full px-2' type="password" name="password1" id="password1" onChange={handlePassword1} />
                    </div>
                </div>
                <div className='mb-6'>
                    <label className='block text-lg px-2'>Re-password:</label>
                    <div className='h-12 bg-white rounded-lg mt-2'>
                        <input className='h-full w-full px-2' type="password" name="password2" id="password2" onChange={handlePassword2} />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='h-10 w-28 bg-black rounded-lg text-white font-semibold' onClick={submit}>
                        Sign Up
                    </button>
                </div>
                <p className='my-6 text-center'>____________________________or_______________________________</p>
                <div className='text-center'>
                    <p className='mb-2'>Already have an account?</p>
                    <p className='font-bold text-blue-600 cursor-pointer'><Link to ="/Login">Sign in</Link></p>
                </div>
                {/* <div>
                <div className='h-10 w-28 bg-black rounded-lg mx-40 my-5'>
                    <p className='text-white flex flex-row justify-center py-2' onClick={submit}>Sign Up</p>
                </div>
                </div>
                <p>____________________________or_______________________________</p>
                <div className='h-[20vh] flex flex-col gap-4 items-center justify-center'>
                    <p className=''>Already have an account?</p>
                    <p className=' font-bold cursor-pointer' onClick={toLogin}>Sign In</p>
                </div> */}
            </div>
{/* // Starlin */}
            
{/* // ====
//  main */}
        </div>

        </div>
       
    );
}

export default Signup;
