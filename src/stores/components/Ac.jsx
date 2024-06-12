import React from 'react'
import {acData} from '../data/ac'


const Ac = () => {
    const firstFiveImgs=acData.slice(0,5);
    return (
        <fragment>
            <div className="proTitle">
            <h1>Ac's</h1>
            </div>
            
      <div className='prosection'>
          {
  
              firstFiveImgs.map((item)=>
              {
                  return(
                      <div className='imgbox'>
                      <img className='proimg' src={item.image} alt=''/>
                      </div>
                  )
              }
              )
          }
         
      </div>
      </fragment>
      )
}

export default Ac