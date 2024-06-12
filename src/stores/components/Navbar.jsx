
import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {

    const {cartItems}=useCart()
  return (
    <>
   <div className="navsection">
  
    <div className="title">
        <h2>E-Mart</h2>
    </div>
    <div className="search">
        <input type='text' placeholder='search...'/>
    </div>
    
    <div className="user">
        <div className="user-details">
            signIN/signUp
        </div>
        <Link to='/cart'>
        <div className="cart">
            Cart<span>{cartItems.length}</span>
        </div>
        </Link>
    </div>
 
   </div>

   <div className="subMenu">
    <ul>
        <Link to='/mobiles'>
        <li>Mobiles </li>
        </Link>
        <li>Computers</li>
        <li>Watches</li>
        <li>Ac's</li>
    </ul>
   </div>
   </>
  )
}

export default Navbar