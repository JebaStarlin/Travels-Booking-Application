
import bgimg from '../assets/Delhi.jpg'
function Login() {
  return (
    <div className='h-[100vh] bg-top  bg-cover flex flex-row justify-center' style={{backgroundImage:`url(${bgimg})`}}>
        <div className='h-[550px] w-[450px] border-2 my-24 rounded-xl bg-opacity-40 bg-gray-50'>
            <p className='py-10 flex justify-center text-5xl font-bold'>Login</p>
            <div>
                <p className='text-lg px-10'>
                    username:
                </p>
                <div className='h-12 w-60 bg-white rounded-lg mx-24 my-4'></div>
            </div>
            <div>
                <p className='text-lg px-10'>
                    password:
                </p>
                <div className='h-12 w-60 bg-white rounded-lg mx-24 my-4'></div>
            </div>
            <div>
                <p className='pl-60'>Forgot password?</p>
                <div className='h-10 w-28 bg-black rounded-lg mx-40 my-5'>
                    <p className='text-white flex flex-row justify-center py-2'>Login</p>
              </div>
            </div>
            <p>____________________________or_______________________________</p>
            <div>
                <p className='px-32 pt-4'>Create a new account?</p>
                <p className='px-48 p font-bold  '>Sign up</p>
            </div>
        </div>
    </div>
  )
}

export default Login
