// <<<<<<< Starlin

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import bgimg from '../assets/Delhi.jpg'

function Login({token,handleToken}) {
    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")

    const navigate = useNavigate()

    const handleUsername = (e)=>{
        setUserName(e.target.value)
        console.log(username)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log(password);
    };

//  Starlin
    const submit =()=>{
        async function apiCall() {
            const data = {
                "username": `${username}`,
                "password": `${password}`
            };
            try {
                const response = await fetch("http://localhost:8081/login",{
                    method : "POST",
                    headers : {
                        'content-type' : 'application/json'
                    },
                    body : JSON.stringify(data)
                })
                if(!response.ok){
                    alert("Wrong credentials")
                    throw new Error(`Http response Status : ${response.status}`)
                }
                const result = await response.json()
                handleToken(result.token)
                navigate("/")
            } catch (error) {
                console.log("Error fetching api:",error)
            }
        }
        apiCall()
    }

    const toSignup =()=>{
        navigate("/sign-up")
    }
    // async function submit() {
    //     const res = await fetch("http://localhost:8080/hello")
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error(error))
// =======
    

    return (
        <div> 
            <div className='h-screen bg-top bg-cover flex justify-center items-center' style={{ backgroundImage: `url(${bgimg})` }}>
        <div className='h-auto w-full max-w-md border-2 my-24 rounded-xl bg-opacity-40 bg-gray-50 p-8 md:p-12'>
            <p className='text-center text-3xl md:text-5xl font-bold mb-5'>Login</p>
            <div className='mb-5'>
                <label className='block text-lg px-2 font-medium'>Username:</label>  <div className='h-12 bg-white rounded-lg mt-2'>
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
    );
}

export default Login;

// {/* //  Starlin */}
// <p>____________________________or_______________________________</p>
// <div>
//     <p className='px-32 pt-4'>Create a new account?</p>
//     <p className='px-48 p font-bold cursor-pointer' onClick={toSignup}>Sign up</p>
// {/* //  */}
// <div className='flex justify-center'>
//     <button className='h-10 w-28 bg-black rounded-lg text-white font-semibold' onClick={submit}>
//         Login
//     </button>
