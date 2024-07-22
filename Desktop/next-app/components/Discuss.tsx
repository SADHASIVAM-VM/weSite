import React from 'react'

const Discuss = () => {
  return (
    <div className='bg-yellow-400 text-white flex justfy-center items-center flex-col md:flex-row p-5 gap-5 md:px-20'>
      <div className="md:w-1/2">
        <h1 className='text-4xl font-bold my-5'>Let's discuss <br /> Your Project</h1>
        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quia. Quos at eveniet aspernatur, voluptatum ut voluptate animi et alias?</p>
      </div>

      <div className="md:w-1/2">
      <div className="rounded-md shadow-md md:mx-5 p-5 bg-white text-black">

      <form action="" >
             <div className="flex flex-col md:flex-row gap-5">
             <div className="">
              <label htmlFor="name" className='text-[10px]'>Full Name :</label>
              <input type="text" name='Full Name' placeholder='Name' className='border-b py-1 focus:outline-none border-black bg-transparent'/>
              </div>
              <div className="">
              <label htmlFor="name" className='text-[10px]'> Phone Number :</label>
              <input type="text" name='phone Number' placeholder='91+ 0000000000' className='border-b py-1 focus:outline-none border-black bg-transparent'/>
              </div>
             </div>

             <div className="flex flex-col md:flex-row gap-5 mt-2">
             <div className="">
              <label htmlFor="name" className='text-[10px]'>Business Name :</label>
              <input type="text" name='Company' placeholder='Company ' className='border-b py-1 focus:outline-none border-black bg-transparent'/>
              </div>
              <div className="">
              <label htmlFor="name" className='text-[10px]'>Business Email :</label>
              <input type="mail" name='mail' placeholder='E-mail ' className='border-b py-1 focus:outline-none border-black bg-transparent'/>
              </div>
             </div>

             <div className=" my-2 inline-grid ">
              <button className='p-2 bg-yellow-400 px-10 rounded-md text-white'>Start</button>
             </div>

            </form>
           

          </div></div>
    </div>
  )
}

export default Discuss
