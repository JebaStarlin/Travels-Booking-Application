
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bgimg from '../assets/Delhi.jpg'

function Login({token,handleToken}) {
    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")

    const navigate = useNavigate()

    const handleUsername = (e)=>{
        setUserName(e.target.value)
        console.log(username)
    }

    const handlePassword = (e)=>{
        setPassword(e.target.value)
        console.log(password)
    }

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
        
    // }

  return (
    <div className='h-[100vh] bg-top  bg-cover flex flex-row justify-center' style={{backgroundImage:`url(${bgimg})`}}>
        <div className='h-[550px] w-[450px] border-2 my-24 rounded-xl bg-opacity-40 bg-gray-50'>
            <p className='py-10 flex justify-center text-5xl font-bold'>Login</p>
            <div>
                <p className='text-lg px-10'>
                    username:
                </p>
                <div className='h-12 w-60 bg-white rounded-lg mx-24 my-4'>
                    <input className='h-full w-full' type="text" name="username" id="name" onChange={handleUsername}/>
                </div>
            </div>
            <div>
                <p className='text-lg px-10'>
                    password:
                </p>
                <div className='h-12 w-60 bg-white rounded-lg mx-24 my-4'>
                <input className='h-full w-full' type="password" name="password" id="password" onChange={handlePassword}/>
                </div>
            </div>
            <div>
                <p className='pl-60'>Forgot password?</p>
                <div className='h-10 w-28 bg-black rounded-lg mx-40 my-5'>
                    <p className='text-white flex flex-row justify-center py-2' onClick={submit}>Login</p>
              </div>
            </div>
            <p>____________________________or_______________________________</p>
            <div>
                <p className='px-32 pt-4'>Create a new account?</p>
                <p className='px-48 p font-bold cursor-pointer' onClick={toSignup}>Sign up</p>
            </div>
        </div>
    </div>
  )
}

export default Login
