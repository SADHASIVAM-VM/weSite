
import React from 'react'

const ProjectsDisplay = ({id, title, content}) => {
  return (
    <div key={id}>
      <h1 className='font-bold text-xl my-2'>{title}</h1>
      <p className='text-sm'>{content}</p>
    </div>
  )
}

export default ProjectsDisplay
