import React from 'react'

const Navbar = ({ onLogout }) => {
  return (
    <div className='w-full bg-gray-50 h-20 '>
      <div className='flex items-end p-4 flex-col-reverse justify-between'>
      <button
             onClick={onLogout}
              className="bg-red-600  text-white font-bold text-base h-8 w-20 sm:h-10 sm:w-24 md:h-12 md:w-28 lg:h-14 lg:w-32 px-2 py-1 sm:px-4 sm:py-2 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300  sm:text-base md:text-lg"
            >
              Logout
            </button>
      </div>
    </div>
  )
}

export default Navbar
