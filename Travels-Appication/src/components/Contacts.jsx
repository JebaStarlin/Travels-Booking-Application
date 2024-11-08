
import banner from '../assets/tempotravellerrental.jpg';

function Contacts() {
  return (
    <div>
      <div className='h-[80vh] bg-center bg-cover flex justify-center items-end' style={{ backgroundImage: `url(${banner})` }}>
        <div className='h-[330px] w-[90%] md:w-[550px] bg-white rounded-lg shadow-outline mb-12 md:mb-28'>
          <div className='text-center'>
            <p className='text-xl font-bold pt-5'>Head Office</p>
            <p className='text-lg pt-2'>TrackedIn Travels</p>
          </div>
          <p className='px-8 pt-10 text-lg'>No.61, Sivasamy Road, Near City Tower, Ram Nagar, Coimbatore, <br />Tamil Nadu-641018</p>
          <div className='flex flex-row justify-between px-10 pt-10 text-lg'>
            <p>0422-4349490</p>
            <p>TrackedIn@gmail.com</p>
          </div>
        </div>
      </div>
      <div className=' bg-black my-20 flex justify-center'>
        <div className='flex flex-col items-center h-[300px] mt-24 md:mt-12 justify-center'>
          <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6'>
            <p className='text-white'>Enter your email here:</p>
            <div className='h-[20px] w-[300px] bg-white rounded-sm'></div>
          </div>
          <div className='flex flex-col md:flex-row mt-6 justify-center items-center space-y-4 md:space-y-0 md:space-x-6'>
            <p className='text-white'>Write a query:</p>
            <div className='h-[150px] w-[350px] bg-white rounded-lg'></div>
          </div>
          <div className='h-10 w-28 bg-white rounded-lg mt-5'>
            <p className='text-black flex justify-center py-2 text-lg'>Send</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
