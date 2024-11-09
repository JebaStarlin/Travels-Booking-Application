import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bgimg from '../assets/Delhi.jpg'

function Signup() {
    const [username,setUsername]= useState("")
    const [password,setPassword]= useState("")
    const [email,setEmail]= useState("")
    const [password1,setPassword1]= useState("")
    const [password2,setPassword2]= useState("")

    const navigate = useNavigate()

    const handleUsername = (e)=>{
        setUsername(e.target.value)
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handlePassword1 = (e)=>{
        setPassword1(e.target.value)
    }
    const handlePassword2 = (e)=>{
        setPassword2(e.target.value)
    }
    // const submit = async()=>{
    //     if(password1==password2){
    //         setPassword(password1)
    //         const res = await fetch("http://localhost:8081/register",{method:"POST",
    //             body : JSON.stringify({
    //                 username : {username},
    //                 password : {password},
    //                 email : {email}
    //             })
    //          })
    //         const data = await res.json()
    //         console.log(data)
    //         console.log(username,email,password1,password2)
    //     }
    //     else{
    //         alert("Password not same")
    //     }
    // }

    async function submit() {
        if(password1==password2){
            const url = 'http://localhost:8081/register';
            setPassword(password1)
            const data = {
                // username: 'Starlin4', password: 'S123', email: 'hbicasonaosikc@example.com'
                "username": `${username}`,
                "password": `${password}`,
                "email": `${email}`
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
                    alert("Username Already Exist")
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
        
                const result = await response.json();
                console.log('User registered successfully:', result);
                navigate("/login")
            } catch (error) {
                console.error('Error registering user:', error);
            }
        }
        else{
            alert("Password not matching")
        }
    }
    
    const toLogin=()=>{
        navigate("/login")
    }

  return (
    <div className='h-[150vh] bg-top  bg-cover flex flex-row justify-center' style={{backgroundImage:`url(${bgimg})`}}>
        <div className='h-[800px] w-[450px] border-2 my-24 rounded-xl bg-opacity-40 bg-gray-50'>
            <p className='py-10 flex justify-center text-5xl font-bold'>Sign up</p>
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
                    gmail or mobile no:
                </p>
                <div className='h-12 w-60 bg-white rounded-lg mx-24 my-4'>
                <input className='h-full w-full' type="email" name="mail" id="mail" onChange={handleEmail}/>
                </div>
            </div>
            <div>
                <p className='text-lg px-10'>
                    password:
                </p>
                <div className='h-12 w-60 bg-white rounded-lg mx-24 my-4'>
                <input className='h-full w-full' type="password" name="password1" id="password1" onChange={handlePassword1}/>
                </div>
            </div>
            <div>
                <p className='text-lg px-10'>
                    re-password:
                </p>
                <div className='h-12 w-60 bg-white rounded-lg mx-24 my-4'>
                <input className='h-full w-full' type="password" name="password2" id="password2" onChange={handlePassword2}/>
                </div>
            </div>
            
            <div>
                <div className='h-10 w-28 bg-black rounded-lg mx-40 my-5'>
                    <p className='text-white flex flex-row justify-center py-2' onClick={submit}>Sign Up</p>
              </div>
            </div>
            <p>____________________________or_______________________________</p>
            <div className='h-[20vh] flex flex-col gap-4 items-center justify-center'>
                <p className=''>Already have an account?</p>
                <p className=' font-bold cursor-pointer' onClick={toLogin}>Sign In</p>
            </div>
        </div>
    </div>
  )
}

export default Signup
