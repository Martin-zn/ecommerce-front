import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'

const OrderSummary = () => {
  return (
    <div>
        <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard/>
        </div>

        <div>
        <div className='lg:grid grid-cols-3 lg:px-16 lg:py-16 relative'>
            <div className='col-span-2'>
                {[1,1,1,1].map((item)=><CartItem/>)}
                
            </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className='border'>
                <p className='uppercase font-bold opacity-60 pb-4'>price details</p>
                <hr/>
                <div className='space-y-3 font-semibold mb-10'>
                    <div className='flex justify-between pt-3 text-black'>
                        <span>Price</span>
                        <span>$5.000</span>
                    </div>
                    <div className='flex justify-between pt-3 text-black'>
                        <span>Price</span>
                        <span>$5.000</span>
                    </div>
                    <div className='flex justify-between pt-3 text-black font-bold'>
                        <span>Total</span>
                        <span>$5.000</span>
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