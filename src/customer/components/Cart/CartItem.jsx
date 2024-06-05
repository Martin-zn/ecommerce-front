import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>

        <div className='flex items-center}'>

            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] '>
                <img className='w-full h-full object-cover object-top' src="https://img.freepik.com/vector-gratis/fondo-plano-dia-san-valentin_52683-157845.jpg?t=st=1717165510~exp=1717169110~hmac=053ae258e1b8602d32f8f5cf64b66085e9d0a0881f2942551669af8f692cafb1&w=996" alt="product" />
            </div>
            <div className='ml-5 space-y-1'>
                <p className='fond-semibold'>Este es el titulo</p>
                <p className='opacity-70 fond-semibold'>Este vendriaasiendo el subtitulo </p>
                <p className='opacity-70 mt-2'> Esta sera una pequeña descripcion</p>

                <div className="flex space-x-5 items-center text-gray-900 pt-6">
                    <p className='font-semibold'>$50.000</p>
                    <p className='font-semibold opacity-50 line-trhough'>$50.000</p>
                    <p className='font-semibold text-green-600'>$50.000</p>
                </div>
            </div>
        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
                    <div className='flex items-center space-x-2'>
                        <IconButton >
                            <RemoveCircleOutlineIcon/>
                        </IconButton>
                        <span className='py-1 px-7 border rounded-sm '>3</span>
                        <IconButton >
                            <AddCircleOutlineIcon/>
                        </IconButton>
                    </div>
                    <div>
                        <Button>REMOVE</Button>
                    </div>

                </div>

    </div>
  )
}

export default CartItem