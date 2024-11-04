import banner from '../assets/tempotravellerrental.jpg'

function Contacts() {
  return (
    <div>
    <div className='h-[80vh] bg-center bg-cover flex flex-row justify-center  ' style={{backgroundImage:`url(${banner})`}}>
      <div className='h-[330px] w-[550px] bg-white rounded-lg shadow-outline my-[430px]'>
        <div className=''>
            <p className='text-xl font-bold pt-5 px-52 '>Head Office</p>
            <p className='text-lg pt-2 pl-[12rem]'>TrackedIn Travels</p>
        </div>
        <p className='px-8 pt-10 text-lg'>No.61, sivasamy road, Near City Tower, Ram Nagar, Coimbatore, <br />TamilNadu-641018</p>
        <div className='flex flex-row justify-between px-10 pt-10 text-lg'>
            <p>0422-4349490</p>
            <p>TrackedIn@gmail.com</p>
        </div>
      </div>
    </div>
    <div className='h-[100vh] bg-black mt-20 flex justify-center'>
        <div className='flex flex-col h-[300px]   mt-52 justify-center'>
            
        <div className='flex flex-row  justify-center space-x-6'>
            <p className='text-white '>Enter your email here :</p>
            <div className='h-[20px] w-[300px] bg-white rounded-sm'>
            </div>
        </div>

        <div className='flex flex-row mt-6 justify-center space-x-6'>
            <p className='text-white ml-[110px]'>
                Write a query :
            </p>
            <div className='h-[150px] w-[350px] bg-white rounded-lg mx-12 '>
            </div>
            </div>
            <div className='h-10 w-28 bg-white rounded-lg ml-[23rem] my-5'>
                    <p className='text-black flex flex-row justify-center py-2 text-lg'>send</p>
              </div>
        </div>
        
    </div>
    
    </div>
  )
}

export default Contacts
/*
 <div className='flex flex-row pt-52 justify-center space-x-6'>
            <p className='text-white '>Enter your email here :</p>
            <div className='h-[20px] w-[300px] bg-white rounded-sm'>
            </div>
        </div>

        <div className='flex flex-row mt-6 justify-center space-x-6'>
            <p className='text-white '>
                Write a query :
            </p>
            <div className='h-[150px] w-[350px] bg-white rounded-lg pl-6 '>
            </div>
        </div>
*/