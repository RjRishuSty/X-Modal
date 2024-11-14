import React, { useState } from 'react'
import Modal from './Component/Modal/Modal'

const App = () => {
  const [isOpen, setIsOpen]= useState(false);
  // const handlerModal=()=>{

  // }
  return (
    <div className='App'>
      <h1 className='heading'>User Details Modal</h1>
      <button type='button' className='openButton' onClick={()=>setIsOpen(!isOpen)}>Open Form</button>
      {
        isOpen?<Modal setIsOpen={setIsOpen} isOpen={isOpen}/>:''
      }
    </div>
  )
}

export default App
