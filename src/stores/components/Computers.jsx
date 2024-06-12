import React, { Fragment } from 'react'
import {computerData} from '../data/computers'

const Computers = () => {
    const firstFiveImgs=computerData.slice(0,5);
    return (
        <fragment>
           
            <div className="proTitle">
            <h1>Computers</h1>
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

export default Computers