import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../State/Cart/Action'

const Cart = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {cart} = useSelector(store=>store)

    const handleCheckout = ()=>{
        navigate("/checkout?step=2")
    }

    useEffect(()=>{
        dispatch(getCart())
    
    },[cart.updateCartItem, cart.deleteCartItem])

  return (
    <div>
        <div className='lg:grid grid-cols-3 lg:px-16 lg:py-16 relative'>
            <div className='col-span-2'>
                {cart.cart?.cartItems.map((item)=><CartItem item={item}/>)}
                
            </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className='border'>
                <p className='uppercase font-bold opacity-60 pb-4'>price details</p>
                <hr/>
                <div className='space-y-3 font-semibold mb-10'>
                    <div className='flex justify-between pt-3 text-black'>
                        <span>Precio</span>
                        <span>${cart.cart?.totalPrice}</span>
                    </div>
                    <div className='flex justify-between pt-3 text-black'>
                        <span>Descuento</span>
                        <span>0%</span>
                    </div>
                    <div className='flex justify-between pt-3 text-black font-bold'>
                        <span>Total</span>
                        <span>${cart.cart?.totalPrice}</span>
                    </div>

                    

                </div>
                    <Button onClick={handleCheckout} className=' w-full mt-5' variant="contained" sx={{px:"2.5rem",py:"1.5rem"}}>
                        PAGAR
                    </Button>
            </div>

        </div>
        </div>


    </div>
  )
}

export default Cart