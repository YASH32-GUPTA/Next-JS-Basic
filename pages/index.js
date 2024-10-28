import Image from 'next/image'
import {useRouter} from 'next/router'

function LandPage() {
  const router = useRouter() ; 

  return (
    <div className="container fullScreen LandingPageColor">
         <div className="row text-center spaceTop">
            {/* Logo */}
              <div className="col-12">
                  <Image 
                  src='/mainLogo.jpg' 
                  height={500}
                  width={600} 
                  style={{ objectFit : 'contain'}}
                  alt='Logo Of NextJS'
                  />
              </div>
            {/* Button */}
              <div className="col">
                  <button onClick={() => router.push('/home')} className='btn btn-primary '>Take A Tour</button>
              </div>
         </div>
    </div>
  )
}

export default LandPage ; 
