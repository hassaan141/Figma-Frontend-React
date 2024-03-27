import React , {useState, useEffect, useRef}from 'react'
import img from '../Video/nocamera.jpg'
import './VideoPlayerTest.css'
// import CameraLong from '../CameraListView/CameraLong';
import {useData} from '../../send-backend/dataContext'

function VideoPlayerTest() {

  const {showVideo, image} = useData();

  // const [showVideo1, setShowVideo1] = useState(false);
  // const [showVideo2, setShowVideo2] = useState(false);
  // const [showVideo3, setShowVideo3] = useState(false);
  // const [showVideo4, setShowVideo4] = useState(false);
  // const [image, setImage] = useState(true);

  const videoRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  return (
    <>
      <div className='box'>
        {!showVideo && (
          <img className='img' src={img} alt="ok" />       
        )}
      

        {/* Existing JSX */}
        {showVideo && (
        <div className='video1'>
          <video ref={videoRefs.current[0]}  autoPlay muted loop >
            <source src={`${process.env.PUBLIC_URL}/vid1.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video> 
        </div>
        )}

        {showVideo && (
        <div className='video2'>
          <video ref={videoRefs.current[1]} autoPlay muted loop>
            <source src={`${process.env.PUBLIC_URL}/vid2.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        )}

      {showVideo && (
        <div className='video3'>
          <video ref={videoRefs.current[2]} autoPlay muted loop >
            <source src={`${process.env.PUBLIC_URL}/test_4.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        )}

        {showVideo && (
        <div className='video4'>
          <video ref={videoRefs.current[3]} autoPlay muted loop >
            <source src={`${process.env.PUBLIC_URL}/vid3.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        )}      
      </div>
    </>
  )
}

export default VideoPlayerTest
