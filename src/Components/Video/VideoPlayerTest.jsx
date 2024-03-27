import React from 'react';
import img from '../Video/nocamera.jpg';
import './VideoPlayerTest.css';
import { useData } from '../../send-backend/dataContext';

function VideoPlayerTest() {
  const { videoSelections } = useData();

  const selectedVideosCount = videoSelections.filter(Boolean).length;
  const videoSources = [
    `${process.env.PUBLIC_URL}/vid1.mp4`,
    `${process.env.PUBLIC_URL}/vid2.mp4`,
    `${process.env.PUBLIC_URL}/test_4.mp4`,
    `${process.env.PUBLIC_URL}/vid3.mp4`
  ];

  return (
    <>
      <div className={`box video-${selectedVideosCount}`}>
        {selectedVideosCount === 0 && (
          <img className='img' src={img} alt="No Camera Available" />       
        )}
      
        {videoSelections.map((isSelected, index) => isSelected && (
  <div key={index} className="video-container">
    <video autoPlay muted loop>
      <source src={videoSources[index]} type="video/mp4" />
      Your browser does not support the video tag.
    </video> 
  </div>
))}

      </div>
    </>
  );
}

export default VideoPlayerTest;
