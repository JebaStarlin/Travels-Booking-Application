import veh1 from '../assets/Vehicle18seater.jpg'

function ViewDetails() {
  return (
    <div>
      <div className='min-h-screen bg-no-repeat bg-center bg-cover font-semibold flex flex-col items-center p-4 md:p-8' style={{ backgroundImage: `url(${veh1})` }}>

      </div>

      <div className='text-3xl font-bold mx-32 mt-5'>
        <p>Details</p>
      </div>
      <div className='mx-52 flex flex-col text-lg font-semibold my-5 '>
        <p>Vehicle Name&nbsp;&nbsp;&nbsp;:</p>
        <p>Vehicle Model&nbsp;&nbsp;:</p>
        <p>Vehicle Color&nbsp;&nbsp;&nbsp;&nbsp;:</p>
        <p>Vehicle Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</p>
        <p>No.of.Seat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</p>
        </div>
        <div className='mx-32 text-lg py-5'>
<p> &emsp; &emsp;&emsp;&emsp;&emsp;The Renault Lodgy is a versatile and practical multi-purpose vehicle (MPV) designed for those who need ample space and comfort on their journeys. Introduced by Renault, this vehicle quickly became known for its impressive seating capacity, capable of accommodating up to eight passengers. The Lodgys spacious interior makes it an ideal choice for families, offering ample legroom and a range of seating configurations to suit various needs. Its design strikes a balance between functionality and style, featuring modern aesthetics and a robust build. The vehicle is equipped with numerous storage compartments and a generously-sized boot, ensuring that it can handle everything from daily commutes to long road trips with ease.</p> <br /> <br />
<p> &emsp; &emsp;&emsp;&emsp;&emsp;Under the hood, the Renault Lodgy is powered by a range of efficient engine options, providing a blend of performance and fuel economy. The diesel variants, in particular, are praised for their smooth power delivery and impressive mileage, making them a cost-effective choice for long-distance travel. The Lodgy also comes with a suite of modern features, including advanced infotainment systems, climate control, and a range of safety technologies designed to protect passengers on the road. Its ride quality is enhanced by a well-tuned suspension system that absorbs road imperfections, ensuring a comfortable journey for all occupants. Overall, the Renault Lodgy stands out as a reliable and versatile MPV, perfect for those seeking a vehicle that combines practicality with modern comforts.</p>
        </div>
        
    </div>
  )
}

export default ViewDetails
