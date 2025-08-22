import React from 'react'
import logo from '/src/assets/images/logo.svg'
import menu from '/src/assets/images/icon-hamburger.svg'

const Navbar = () => {
  return (
    <div className='flex text-white pt-14 px-6 md:px-45 justify-between items-center'>
        <div className='container flex gap-14 items-center justify-between md:justify-start'>
          <img src={logo} className='w-[84px] md:w-auto' />
          <img src={menu} className='md:hidden' />
            <ul className='md:flex gap-10 hidden'>
                <li>Product</li>
                <li>Company</li>
                <li>Connect</li>
            </ul>
        </div>
        <div className='md:flex gap-8 items-center hidden'>
            <p>Login</p>
            <button className='bg-white text-red-400 font-bold border rounded-4xl w-35 h-13 hover:'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar