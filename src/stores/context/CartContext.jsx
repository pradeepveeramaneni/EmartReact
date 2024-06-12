
import { createContext, useContext, useState } from "react"

export const CartContext = createContext()
   

export const CartProvider = ({children})=>{

    const[cartItems,setCartItems]=useState([])
    const addToCart=(item)=>{
        setCartItems([...cartItems,item])
    }

    // const removeFromCart = (item)=>{
    //     setCartItems(cartItems.filter((e)=>e!==item))
    // }

    // const removeFromCart = (item) => {
    //     const indexToRemove = cartItems.indexOf(item);
      
    //     if (indexToRemove !== -1) {
    //       const updatedCart = [...cartItems];
    //       updatedCart.splice(indexToRemove, 1);
    //       setCartItems(updatedCart);
    //     }
    //   };

    const removeFromCart = (item) => {
        const indexToRemove = cartItems.findIndex((apple) => apple === item);
        if (indexToRemove !== -1) {
          const updatedCart = [...cartItems];
          updatedCart.splice(indexToRemove, 1);
          setCartItems(updatedCart);
        }
      };
      
      

    return(
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart=()=>{
    return useContext(CartContext)
}