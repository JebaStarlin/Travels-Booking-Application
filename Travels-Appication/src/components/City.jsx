
import Path from '../assets/bg3.jpg';

function City() {
  return (
    <div className='flex flex-col items-center'>
      <img className='h-32 w-32 sm:h-40 sm:w-40 md:h-52 md:w-52 lg:h-64 lg:w-64 rounded-full' src={Path} alt="Goa" />
      <p className='mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl'>Goa</p>
    </div>
  );
}

export default City;
