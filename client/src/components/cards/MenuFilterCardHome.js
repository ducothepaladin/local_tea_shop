import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuFilterCardHome() {

    



  return (
    <div className='flex p-5 w-full container mx-auto py-10 gap-8 justify-center'>
            <Link to='/shop' className='w-1/2 flex flex-col items-center justify-between hover:bg-slate-100 p-5 py-8 rounded-lg border'>
                <p className='text-5xl lg:text-8xl text-center text-color2-600 mb-3'><i className="fa-solid fa-bowl-food"></i></p>
                <p className='font-bold lg:text-3xl text-center'>Food</p>
            </Link>
            <Link to='/shop' className='w-1/2 flex flex-col items-center justify-between hover:bg-slate-100 p-5 py-8 rounded-lg border'>
                <p className='text-5xl lg:text-8xl text-center text-color2-600 mb-3'><i className="fa-solid fa-mug-hot"></i></p>
                <p className='font-bold lg:text-3xl text-center'>Tea</p>
            </Link>
    </div>
  )
}
