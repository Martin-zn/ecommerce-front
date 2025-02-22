import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'

const OrderSummary = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get("order_id")
    const {order} = useSelector(store=>store) 

    useEffect(()=>{
        dispatch(getOrderById(orderId))
    },[orderId])

  return (
    <div>
        <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard/>
        </div>

        <div>
        <div className='lg:grid grid-cols-3 lg:px-16 lg:py-16 relative'>
            <div className='col-span-2'>
                {order.order?.orderItems.map((item)=><CartItem item={item}/>)}
                
            </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className='border'>
                <p className='uppercase font-bold opacity-60 pb-4'>price details</p>
                <hr/>
                <div className='space-y-3 font-semibold mb-10'>
                    <div className='flex justify-between pt-3 text-black'>
                        <span>Precio</span>
                        <span>${order.order?.totalPrice}</span>
                    </div>
                    <div className='flex justify-between pt-3 text-black'>
                        <span>Descuento</span>
                        <span>0</span>
                    </div>
                    <div className='flex justify-between pt-3 text-black font-bold'>
                        <span>Total</span>
                        <span>${order.order?.totalPrice}</span>
                    </div>

                    

                </div>
                    <Button className=' w-full mt-5' variant="contained" sx={{px:"2.5rem",py:"1.5rem"}}>
                        PAGAR
                    </Button>
            </div>

        </div>
        </div>


    </div>

    </div>
  )
}

export default OrderSummary