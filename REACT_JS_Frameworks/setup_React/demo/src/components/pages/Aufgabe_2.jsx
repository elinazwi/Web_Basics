import React, { useState } from 'react'
import Card from '../Card'
import Button from '../Button'


export default function List() {
  const [buttonClicked, setButtonClicked] = useState(false)
  return (
    <>
      <h1 className='bg-amber-300'>Aufgabe2</h1>
      <div>
        <h2 className="p-5 border-2 border-white bg-pink-700 ml-3 w-50">Getränke:</h2>
        <div className="p-5 border-2 border-white bg-pink-400 ml-3 hover:bg-pink-700 transition w-50">Coffee</div>
        <div className="p-5 border-2  border-white bg-pink-400 ml-3 hover:bg-pink-700 transition w-50">Tea</div>
        <div className="p-5 border-2 border-white bg-pink-400 ml-3 hover:bg-pink-700 transition w-50">Beer</div>
      </div>

      <Button title={"Clicki Micki"} onClick={() => {setButtonClicked(!buttonClicked) }} />

     {buttonClicked &&  <Card name={"Lenz"} jobtitle={"Abteilungsvorstand"} description={"lässig"} />}
    </>

  


  )
}