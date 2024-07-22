import React from 'react'

const ApplicationItem = ({title,content}) => {
  

  return (
    <div className='grid  gap-2 p-5'>
      <div className="border p-5 rounded-md md:w-[400px] w-[300px]">
      <div className="card_title flex items-center my-2">
        <p className=''>@</p>
        <h4 className='font-bold ml-2'>{title}</h4>
      </div>
      <div className="card_body">
        <p className='text-sm'>{content}</p>
      </div>
    </div>
    </div>
  )
}

export default ApplicationItem
