import React from 'react'
import './EventTest.css'
import img from './trash-2.svg'


function EventTest() {
  return (
    <div className='eventBox'>
      <div className='heading'>
        <h3 className='title'>Camera Monitoring List</h3>
        <img src={img} alt="" />
      </div>
      <div className='list'>
        <div className="table-container">
          <div className="table-header">
            <span>Camera</span>
            <span>Monitors</span>
            <span>Intersection</span>
            </div>
          <div className="table-body">
          <div className="no-data-message">
          <img src="/path-to-your-icon/no-camera-icon.svg" alt="No Cameras" />
          <span>No Cameras</span>
        </div>
      </div>
    </div>
      </div>
      <div className='buttons2'>
      <button className='connectCamera'>
        Connect Camera
      </button>
      <button className='addCamera'> 
        Add Camera
      </button>
      </div>
    </div>

  )
}

export default EventTest;