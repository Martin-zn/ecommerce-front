import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from 'react-redux';
import { removeItemToCart, updateItemToCart } from '../../../State/Cart/Action';

const CartItem = ({item}) => {

    const dispatch = useDispatch();

    const handleUpdateCartItem=(num)=>{
        const data={data:{quantity:item.quantity + num}, cartItemId:item?.id}
        dispatch(updateItemToCart(data))
    }

    const handleRemoveCartItem=()=>{
        dispatch(removeItemToCart(item.id))
    }


  return (
    <div className='p-5 shadow-lg border rounded-md'>

        <div className='flex items-center}'>

            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] '>
                <img className='w-full h-full object-cover object-top' src={item.product.imageUrl ? item.product.imageUrl : 'https://t3.ftcdn.net/jpg/02/54/26/14/240_F_254261417_IszNrQI6NfV7PUYbMYE3yYZJhqZjVfFd.jpg'} alt="product" />
            </div>
            <div className='ml-5 space-y-1'>
                <p className='fond-semibold'>{item.product.name}</p>
                <p className='opacity-70 fond-semibold'>{item.product.brand} </p>
                <p className='opacity-70 mt-2'>{item.product.shortDescription}</p>

                <div className="flex space-x-5 items-center text-gray-900 pt-6">
                    {/* <p className='font-semibold'>$50.000</p>
                    <p className='font-semibold opacity-50 line-trhough'>$50.000</p> */}
                    <p className='font-semibold text-green-600'>${item.product.price}</p>
                </div>
            </div>
        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
                    <div className='flex items-center space-x-2'>
                        <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1} >
                            <RemoveCircleOutlineIcon/>
                        </IconButton>
                        <span className='py-1 px-7 border rounded-sm '>{item.quantity}</span>
                        <IconButton onClick={()=>handleUpdateCartItem(1)}>
                            <AddCircleOutlineIcon/>
                        </IconButton>
                    </div>
                    <div>
                        <Button onClick={handleRemoveCartItem}>Eliminar</Button>
                    </div>

                </div>

    </div>
  )
}

export default CartItem