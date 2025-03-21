import React from 'react'

export default function Card({name, jobtitle, description}) {
  return (
    <div className='bg-pink-200 border-2 border-pink-600 w-full'>
      <p className='font-bold'>{name}</p>
      <p>{jobtitle}</p>
      <p>{description}</p>
    </div>
  )
}
