import PackageEntry from './PackageEntry'
import Goa from '../assets/Goa.jpg'
import lakshadweep from '../assets/lakshadweep.jpg'
import FeatureImageCoorgKodagu from '../assets/FeatureImageCoorgKodagu.jpg'
import KodaikanalTamilNadu from '../assets/KodaikanalTamilNadu.jpg'
import Well from '../assets/Well.jpg'
function PackageEntryFill() {
  const images = [Goa, lakshadweep, FeatureImageCoorgKodagu, KodaikanalTamilNadu,Well];

  return (
    <div className='flex flex-row'>
     {images.map((image, index) => (
      <PackageEntry key={index} image={image} />
    ))}
    </div>
  )
}

export default PackageEntryFill
