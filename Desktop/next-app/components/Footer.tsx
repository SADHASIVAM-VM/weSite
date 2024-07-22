import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white p-5'>
      <div className="flex justify-center my-5">
        <h1>We45</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center place-content-center">
        <div className="">
            <p className='text-gray-400'>Contact Number</p>
            <p >+91 000000000</p>
        </div>
        <div className="">
            <p className='text-gray-400'>Gmail</p>
            <p >we45@gmail.com</p>
        </div>
        <div className="">
            <p className='text-gray-400'>Leave a request</p>
            <p >request</p>
        </div>
        <div className="">
            <p className='text-gray-400'>Adress</p>
            <p >Chennai, india</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
