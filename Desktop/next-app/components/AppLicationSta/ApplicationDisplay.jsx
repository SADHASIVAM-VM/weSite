"use client"
import React from 'react'
import ApplicationItem from './ApplicationItem'
const ApplicationDisplay = () => {
    const AppLiData =[
        {
            id:1,
            title:"Analysis",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae reprehenderit quaerat nobis maiores consequatur ex a dolore, error quae quia!"
        },
        {
            id:2,
            title:"Design",
            content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae reprehenderit quaerat nobis maiores consequatur ex a dolore, error quae quia!"
        },
        {
            id:3,
            title:"Development",
            content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae reprehenderit quaerat nobis maiores consequatur ex a dolore, error quae quia!"
        },
        {
            id:4,
            title:"Testing",
            content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae reprehenderit quaerat nobis maiores consequatur ex a dolore, error quae quia!"
        },
        {
            id:5,
            title:"Launching",
            content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae reprehenderit quaerat nobis maiores consequatur ex a dolore, error quae quia!"
        },
        {
            id:6,
            title:"support",
            content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae reprehenderit quaerat nobis maiores consequatur ex a dolore, error quae quia!"
        },
      ]
  return (
   <div className="grid grid-cols-1 md:grid-cols-3 place-content-center place-items-center  md:px-20">
     <div className=''>
        {
            AppLiData.map((i)=>(
                <ApplicationItem key={i.id} id={i.id} title={i.title} 
                content={i.content}/>
            )).slice(0,3)
        }
    </div>
    <div className="flex flex-col  order-2 md:order-1">
        <img src="/iphone.png" alt=""  className='w-52'/>
    </div>
    <div className='flex flex-col  order-1'>
        {
            AppLiData.map((i)=>(
                <ApplicationItem key={i.id} id={i.id} title={i.title} 
                content={i.content}/>
            )).slice(3,6)
        }
    </div>
   </div>
  )
}

export default ApplicationDisplay
