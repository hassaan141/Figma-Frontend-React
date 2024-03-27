import React from 'react';
import './CongestionDetection.css';
import alerttriangle from './alert-triangle.png';

function CongestionDetection() {
  

  return(
    <div className = 'detectedDiv'>
        <div className = 'headerandicon'>
            <img src={alerttriangle}/>
            <h1> Detected Congestion </h1>
        </div>
        <div className= 'congestionImg'>
            {/* <img/> */}
        </div>
        <div className= 'cameraNumber'>

        </div>
        <div className= 'reportNumber'>
            
        </div>
        <div className='congestionLocation'>
            
        </div>

        <div className = 'congestionButtons'>
            <button> Clean Alert </button>
            <button> Contact Dispatch </button>
        </div>
    </div>
  )
}

export default CongestionDetection;