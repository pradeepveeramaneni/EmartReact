import React from 'react'
import {mobileData} from '../data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const MobilePage = () => {
    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler=(add)=>{
        if(selectedProduct.includes(add)){
            setSelectedProduct(selectedProduct.filter(item=>item !== add))
        }else{
            setSelectedProduct([...selectedProduct,add])
        }
    }

    const filteredProduct = selectedProduct.length===0? mobileData : mobileData.filter((e)=>selectedProduct.includes(e.company))

  return (
    <>
    <Navbar/>
    <div className="fullPage">
    <div className="pro-selected">
        {
            mobileData.map((item1)=>{
                return(
                    <div>
                        <label>
                        <input type='checkbox'
                        checked={selectedProduct.includes(item1.company)} 
                        onChange={()=>companyHandler(item1.company)} 
                        />
                        {item1.company}
                        </label>
                    </div>
                )
            })
        }
    </div>
    <div className='pageSection'>
        {
        filteredProduct.map((item)=>{
            return(
                <div className='pro-input'>
                    <Link to={`/mobiles/${item.id}`}>
                    <div className="pageImg">
                        <img src={item.image} alt=""/>
                    </div>
                    </Link>
                    <div className='proModel'>
                        {
                          item.company
                        },{item.model}
                    </div>
                </div>
            )
        })}
    </div>
    </div>
    </>
  )
}

export default MobilePage