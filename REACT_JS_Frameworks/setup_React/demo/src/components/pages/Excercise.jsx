import React from 'react'
import Card from '../Card'

export default function Excercise() {
  return (
    <>
    <h1 className='bg-amber-300'>Hello you</h1>
      <div className="flex">
      <Card name={"Lenz"}jobtitle={"Abteilungsvorstand"}description={"lässig"}/>
      <Card name={"Riedmann"}jobtitle={"SWP-Lehrer"}description={"cool:)"}/>
      </div>
    </>
  )
}
