import React from 'react'
import avatar from '../components/img_avatar.png' 

export default function Card({name, jobtitle, description}) {
  return (
    <div className='border-2 w-50 ml-5 mt-5'>
    <img src={avatar}/>
    <p className='font-bold'>{name}</p>
    <p>{jobtitle}</p>
    <p>{description}</p>
    </div> 
)
}
