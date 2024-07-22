import Navbar from '@/components/Navbar'
import ProjectDt from '@/components/ProjectsDt'
import Webdev from '@/components/Webdev'
import React from 'react'
import Discuss from '@/components/Discuss'
import ApplicationDisplay from '@/components/AppLicationSta/ApplicationDisplay'
import Team from '@/components/Team'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

const page = () => {
const dummy = Array.from({length:6})


  return (
    <div className=''>
    <div className="bg-gray-100 pb-5 relative">
    <div className="py-2 ">
     <Navbar/>
     </div>

      <div className="flex flex-col md:flex-row gap-5 ">
        <div className="md:w-1/2 text-sm px-5 md:px-20">
        <div className=" ">
          <div className=' my-5'>
          <h1 className='text-2xl md:text-4xl font-bold '>
            <span className='text-orange-400'>User-Centric Excellence </span> :
          Our App Development services Tackles Yout Pain Points</h1>

          <p className='text-[16px ] font-bold mt-2'>Experience a seamless Digital Journey with <span className='text-green-400'>Desun</span>- where Every time of code Resloves Your Challanges and  <span className='text-orange-400'>Elevator your App Experience to Unparalled Heights.</span></p>
          </div>

          <div className="rounded-md shadow-md md:mx-5 p-5 bg-white">
            <h4 className=' mb-3 font-bold text-xl'>Leave your contacts and we will call you back 
              within 30minutes
            </h4>

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
           

          </div>
        </div>
        </div>

        <div className="md:w-1/2">
        <img src="/hero1.png" alt="" className='w-full object-cover'/>
        </div>
      </div>

    </div>
     <div className="my-10">
     <hr className='border '/>

<div className="flex gap-2 h-32 items-center justify-between md:px-20  flex-wrap">
  {
    dummy.map((i,index)=>(
      <div key={index} className=" border-2 rounded-md p-2">
        planet
      </div>
    ))
  }
</div>

<hr className='border'/>
     </div>

     <div className="" id='service'>
      <Webdev/>
     </div>

    <div className="" id='media'>
    <ProjectDt/>

    </div>
      
      <div className="">
      
      </div>
      <div className="" id=''>
        <Discuss/>
      </div>

      <div className="" id='cases'>
        <h1 className="font-bold text-2xl my-2 px-2 md:px-20">
          Application Development Stages
        </h1>
        <ApplicationDisplay/>
      </div>

      <div className="my-5">
          <Team/>
      </div>
      <div className="my-10" id='faq'>
        <FAQ/>
      </div>

      <div className="" id='contact'>
        <Footer/>
      </div>
    </div>
  )
}

export default page
