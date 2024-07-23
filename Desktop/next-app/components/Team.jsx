import React from 'react'
import Image from 'next/image'
const Team = () => {
  return (
    <div className='flex flex-col md:flex-row p-5 gap-5 md:px-20 bg-gray-100'>
      <div className="md:w-1/2 flex flex-col justify-around">
        <h1 className='text-2xl font-bold'>Our team</h1>
        <p className='my-5'>Thousand is a full-cycle digital production company with its own porduct analytics,
            design, web, and mobile development
        </p>
        <div className="flex justify-around my-5 ">
            <div className="text-center">
                <h1 className='text-xl md:text-4xl  font-bold'>28</h1>
                <p className='text-gray-400'>team member</p>
            </div>
            <div className="text-center">
                <h1 className='text-xl md:text-4xl font-bold'>+100</h1>
                <p className='text-gray-400'>projects</p>
            </div>
            <div className="text-center">
                <h1 className='text-xl md:text-4xl font-bold'>7 years</h1>
                <p className='text-gray-400'>in IT sphere</p>
            </div>
        </div>
        <p>All the nescessary specialists- from a designer to a tester-are on our staff
            . We hire the best specialists in the market. It's expensive but worth it
        </p>
      </div>

      <div className="md:w-1/2">
        <Image src="/gd.jpg" alt="" width={600} height={300}className=' rounded-md' />
      </div>
    </div>
  )
}

export default Team
