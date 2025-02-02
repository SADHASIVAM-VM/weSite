'use client'
import React from 'react'
import { useState } from 'react'
import ProjectsDisplay from './ProjectsDisplay'
import Image from 'next/image'

const ProudSec = () => {
  const [title, setTitle] = useState("")

    const ProjectData = [
        {
            id:1,
            title: "Project1",
            content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ducimus cum nobis voluptate omnis reprehenderit deserunt accusantium voluptatibus corporis dolores.",

        },
        {
            id:2,
            title: "Project2",
            content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ducimus cum nobis voluptate omnis reprehenderit deserunt accusantium voluptatibus corporis dolores.",

        },
        {
            id:3,
            title: "Project3",
            content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ducimus cum nobis voluptate omnis reprehenderit deserunt accusantium voluptatibus corporis dolores.",

        },
        {
            id:4,
            title: "Project4",
            content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ducimus cum nobis voluptate omnis reprehenderit deserunt accusantium voluptatibus corporis dolores.",

        },
    ]

    const projectTopic = [
        "Project1","Project2","Project3",
        "Project4", 
    ]
    
  return (
    
    <div className="mt-10 ">
  <div className="flex md:flex-row flex-col gap-5">
  <div className='md:w-1/2'>
      <div className="">
      <h1 className='font-bold text-2xl md:text-xl '>Projects we are proud of</h1>
      <p className=' text-sm my-2'>Our software Development company is truly proud of the wonderfull clients we have 
        worked with. We enjoy a long-term partnership </p>
      </div>

      <div className="">
        <div className='flex gap-4 font-bold border bg-white rounded-md shadow-md p-2 my-5'>{projectTopic.map((i,index)=>(
            <h1 key={index} className='cursor-pointer text-[12px]' onClick={()=> setTitle(i)}>{i}</h1>
        ))}</div>
      </div>
     <div className="">
    {
       ProjectData.filter((i)=> i.title === title).map((o)=> <ProjectsDisplay id={o.id} title={o.title} content={o.content}/>)
      } 
     </div>
     <div className="flex gap-2 my-2">
      <p className='flex items-center gap-1'><Image src="Svgs/marker.svg" alt="" className='w-3' width={10} height={10} /> india</p>
      <p># Real Estate</p>
     </div>
     <div className="">
      <div className="flex gap-5 my-5">
      <div className="">
        <h1 className='font-bold text-xl'>400%</h1>
        <p className='text-gray-400 text-[14px]'>User Growth</p>
      </div>

      <div className="">
        <h1 className='font-bold text-xl'>+200 000</h1>
        <p className='text-gray-400 text-[14px]'>Active User</p>
      </div>

      </div>
      
      <div className="flex gap-2 my-2">
        <Image src="/play_store.png" alt=""  className='w-32 object-contain' width={100} height={10} />
        <Image src="/app_store.png" alt="" className='w-32 object-contain' width={100} height={10} />
      </div>
     </div>
    </div>

    <div className="md:w-1/2">
    <Image src="/hero.png" alt="" className='w-full object-contain' width={600} height={100} />
    </div>
  </div>
    </div>

  )
}

export default ProudSec
