import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black'>
        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' src="https://img.freepik.com/vector-gratis/fondo-plano-dia-san-valentin_52683-157845.jpg?t=st=1717165510~exp=1717169110~hmac=053ae258e1b8602d32f8f5cf64b66085e9d0a0881f2942551669af8f692cafb1&w=996" alt="" />
        </div>
        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Prueba</h3>
            <p className='mt-2 text-sm text-gray-500'>esto es una prueba</p>
        </div>
    </div>
  )
}

export default HomeSectionCard