import React from 'react'
import {mobileData} from '../data/mobiles';
import {Link} from 'react-router-dom'

const Mobiles = () => {
    const firstFiveImgs=mobileData.slice(0,5);

  return (
    <fragment>
        
        <div className="proTitle">
            <h1>Mobiles</h1>
            </div>
    <div className='prosection'>
        {

            firstFiveImgs.map((item)=>
            {
                return(
                    <div className='imgbox'>
                    <Link to={`/mobiles/${item.id}`}>
                    <img className='proimg' src={item.image} alt=''/>
                    </Link>
                    </div>
                )
            }
            )
        }
       
    </div>
    </fragment>
  )
}

export default Mobiles;