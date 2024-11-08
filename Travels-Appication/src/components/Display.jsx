import Vehiclehome from "./Vehiclehome"


function Display() {
  return (
    <div>
      <div>
      <div className='flex justify between px-36 py-16'>
        <p className='text-3xl font-bold '>Display</p>
        <div className='flex flex-col py-16 space-y-5'>
        <p>       
             Welcome to our travel vehicle selection system! Here, you can choose the perfect vehicle for your journey based on 
            your group size and preferences. Whether you’re traveling solo or with a large group, we have a variety of options to suit 
            your needs. Whether you’re planning your daily commute or a special trip, our system provides up-to-date details to     
            help you navigate with ease. 
        </p>
        <p>
            Choose from a range of vehicles based on the number of passengers. We offer options for small groups, 
            medium-sized groups, and large groups. Select between air-conditioned (AC) and non-air-conditioned (non-AC) buses 
            to ensure your comfort during the ride. 
        </p>
        <div>
                
        </div>
        </div>
      </div>
      </div>
      <div>
        <Vehiclehome/>
        <Vehiclehome/>
      </div>
    </div>
  )
}

export default Display
