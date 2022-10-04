import React from 'react'
import Navbar from './Navbar'

const LandingPage = () => {
  return (
    <div className='bg-[#111a21] h-[100vh] text-white flex flex-col content-evenly'>
        <Navbar/>
        <div className='flex flex-col p-1 lg:pl-2 lg:w-3/5 mt-20 mb-40 md:ml-3'>
            <div className='text-2xl lg:text-4xl'>Sports Fest</div>
            <div className='text-4xl lg:text-8xl lg:mt-2'>VRIDDHI'2022</div>
            <div className='text-md lg:text-xl lg:mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita et nihil animi sint at! Dolores consequuntur quis, vitae animi fugiat illum perspiciatis sed, blanditiis beatae accusantium suscipit, ad tempore quas sit deleniti alias consectetur nobis?</div>
        </div>
    </div>
  )
}

export default LandingPage