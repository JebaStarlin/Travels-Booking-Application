
import Package from './Package';

function Packages() {
  return (
    <div className='bg-black text-white px-4 md:px-10 lg:px-20 py-10'>
      <p className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Packages</p>
      <div className='flex flex-wrap gap-8 md:gap-16 justify-center lg:justify-around px-4 md:px-10 lg:px-20 py-10'>
        <Package />
        <Package />
        <Package />
      </div>
    </div>
  );
}

export default Packages;
