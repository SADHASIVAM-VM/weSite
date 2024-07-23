import React from 'react'
import Image from 'next/image'
const Webdev = () => {
  return (
   <div className="flex flex-col md:flex-row mx-5 md:px-20 my-10">
     <div className='md:w-1/2 flex md:justify-center'>
      <div className="">
      <h1 className='text-xl font-bold my-2'>Full development Cycle</h1>
      <p className='my-2 text-sm font-bold'>we use present technologics</p>

      <div className="my-2">
        <h5 className='font-bold'>Web</h5>
        <p className='text-sm font-normal'>PHP / JavaScript/Node.Js/WebSocket/Vue.Js</p>
      </div>
      <div className="my-2">
        <h5 className='font-bold'>Mobile</h5>
        <p className='text-sm font-normal'>PHP / JavaScript/Node.Js/WebSocket/Vue.Js</p>
      </div>
      </div>
    </div>

    <div className="md:w-1/2 flex md:justify-center">
    
 <div className="">
    <p className="text-sm my-2 cursor-pointer font-bold flex">IOS development <Image src="/Svgs/dropdown.svg" className='w-5' alt="" width={10} height={10} /></p>
    <p className="text-sm my-2 cursor-pointer font-bold flex">UI/UX design <Image src="/Svgs/dropdown.svg" className='w-5' alt="" width={10} height={10} /></p>
    <p className="text-sm my-2 cursor-pointer font-bold flex">Testing <Image src="/Svgs/dropdown.svg" className='w-5' alt="" width={10} height={10} /></p>
    <p className="text-sm my-2 cursor-pointer font-bold flex">Launch <Image src="/Svgs/dropdown.svg" className='w-5' alt="" width={10} height={10} /></p>
    <p className="text-sm my-2 cursor-pointer font-bold flex">IT consulting <Image src="/Svgs/dropdown.svg" className='w-5' alt="" width={10} height={10} /></p>
 </div>
    </div>

   </div>
  )
}

export default Webdev
