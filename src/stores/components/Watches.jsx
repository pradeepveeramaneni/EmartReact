import React from 'react'
import {watchData} from '../data/watch';


const Watches = () => {
 
    const firstFiveImgs=watchData.slice(0,5);
    return (
      <fragment>
          
          <div className="proTitle">
          <h1>Watches</h1>
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

export default Watches