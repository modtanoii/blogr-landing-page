import React from 'react'
import logo from '/src/assets/images/logo.svg'
import menu from '/src/assets/images/icon-hamburger.svg'

const Navbar = () => {
  return (
    <div className='text-white pt-14 px-6 justify-between items-center md:min-w-full'>
        <div className='container flex gap-16 items-center justify-between'>
          <img src={logo} className='w-[84px]' />
          <img src={menu} />
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