import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {

    const navigate = useNavigate();


    return (
        <div onClick={() => navigate(`/product/${product.id}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem]'>
                <img
                    className='h-full w-full object-cover object-left-top'
                    src={product.imageUrl ? product.imageUrl : 'https://lafabricadelschablon.com.ar/wp-content/themes/urutienda/img/default.png'}
                    alt="product"
                />
            </div>
            <div className='textPart bg-white p-3'>
                <div>
                    <p className='font-bold opacity-60'>{product.brand}</p>
                    <p>{product.name}</p>
                </div>
                <div> {/*className='flex items-center space-x-2'*/}
                    <p className='font-semibold'>${product.price}</p>
                </div>


            </div>

        </div>
    )
}

export default ProductCard
