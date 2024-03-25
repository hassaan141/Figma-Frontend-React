import React from 'react'
import './EventTest.css'
import img from './trash-2.svg'


function EventTest() {
  return (
    <div className='eventBox'>
      <div className='heading'>
        <h3 className='title'>Camera Monitoring List</h3>
        <img className='img' src={img} alt="" />
      </div>
      <div className='list'>

      </div>
    </div>

  )
}

export default EventTest;