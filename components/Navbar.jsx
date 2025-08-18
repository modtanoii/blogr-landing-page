import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white flex pt-10 px-45 justify-between items-center md:min-w-full relative'>
        <div className='container flex gap-10 items-center'>
          <img src="/images/logo.svg" />
            <ul className='flex gap-5'>
                <li>Product</li>
                <li>Company</li>
                <li>Connect</li>
            </ul>
        </div>
        <div className='flex gap-3 items-center'>
            <p>Login</p>
            <button className='border rounded-3xl w-28 h-10'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar