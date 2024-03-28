import React from 'react'
import './CongestionDetection.css';
import Test from './test.json';
import alerttriangle from './alert-triangle.png';


function congTest() {
  return (

    //  Heading
    <div className = 'detectedDiv'>
        <div className = 'headerandicon'>
            <img src={alerttriangle}/>
            <h2 className='title'> Detected Congestion </h2>
        </div>
        
        {/* Video */}
        <div className= 'congestionVideo'>
          <video className='smallVideo'autoPlay muted loop >
            <source src={`${process.env.PUBLIC_URL}/vid1.mp4`} type="video/mp4" />
          </video>
        </div>

        <div className= 'cameraNumber'>
          <h6 className='details'>Camera</h6>
          <h6 className='descrip'>1</h6>
        </div>

        <div className= 'reportNumber'>
          <h6 className='details'>Report</h6>
          <h6 className='descrip'>00096</h6>
        </div>
        <div className='congestionLocation'>
           <h6 className='details'>Location</h6>
          <h6 className='descrip'>Dixie & McLaughlin</h6>
        </div>

        <div className = 'congestionButtons'>
            <button className='clean buttonss'> Clean Alert </button>
            <button className='dispatch buttonss'> Contact Dispatch </button>
        </div>
    </div>
  )
}

export default congTest
