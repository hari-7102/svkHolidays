import React from 'react'

const HeaderPhn = () => {
  const phoneNumber = "+91 99653 21543";
  const phoneNumber2 = "+91 99653 98765";
  const rawNumber = "15550001234";

  return (
    <div className=' px-7 mb-2'>
    <div className="flex items-center justify-around  rounded-xl  bg-gray-700 py-1 gap-2 text-sm font-medium">
      
      <a 
        href={`tel:${rawNumber}`}
        className="text-white transition-opacity hover:opacity-75 text-xl active:text-blue-800"
      >
        {phoneNumber} 
      </a>
      <p   className='text-2xl font-semibold text-white font-nunito'>Book A Journey</p>
      <a href=""
      className="text-white transition-opacity hover:opacity-75 text-xl active:text-blue-800"
      >
        {phoneNumber2}
      </a>
    </div>
    </div>
  )
}

export default HeaderPhn