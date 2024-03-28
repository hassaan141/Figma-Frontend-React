import React, { useEffect, useState } from 'react';
import './CongestionDetection.css';
import alerttriangle from './alert-triangle.png';
import { useData } from '../../send-backend/dataContext';

function CongTest() {
  const { responseData } = useData();
  const [newEvent, setNewEvent] = useState({});

  useEffect(() => {
    if (responseData && responseData.success) {
      const event = {
        camera: responseData.data.video_id,
        congType: responseData.data.is_congestion ? 'Yes' : 'No',
        start: responseData.data.congestion_start_time,
        end: responseData.data.congestion_stop_time,
      };
      setNewEvent(event);
    }
  }, [responseData]);

  return (
    <div className='detectedDiv'>
        <div className='headerandicon'>
            <img src={alerttriangle} alt="Alert"/>
            <h2 className='title'> Detected Congestion </h2>
        </div>
        
        <div className='congestionVideo'>
          <video className='smallVideo' autoPlay muted loop>
            <source src={`${process.env.PUBLIC_URL}/vid${1}.mp4`} type="video/mp4" />
          </video>
        </div>

        <div className='cameraNumber'>
          <h6 className='details'>Camera</h6>
          <h6 className='descrip'>{newEvent.camera}</h6>
        </div>

        <div className='reportNumber'>
          <h6 className='details'>Report</h6>
          <h6 className='descrip'>00096</h6>
        </div>

        <div className='congestionLocation'>
           <h6 className='details'>Location</h6>
           <h6 className='descrip'>Dixie & McLaughlin</h6>
        </div>

        <div className='congestionButtons'>
            <button className='clean buttonss'> Clean Alert </button>
            <button className='dispatch buttonss'> Contact Dispatch </button>
        </div>
    </div>
  );
}

export default CongTest;
