// import React from 'react';
// import img from '../Video/nocamera.jpg';
// import './VideoPlayerTest.css';
// import { useData } from '../../send-backend/dataContext';
// import VideoFrameSender from '../../send-backend/sendBack'

// function VideoPlayerTest() {
//   const { videoSelections } = useData();

//   const selectedVideosCount = videoSelections.filter(Boolean).length;
//   const videoSources = [
//     `${process.env.PUBLIC_URL}/vid1.mp4`,
//     `${process.env.PUBLIC_URL}/vid2.mp4`,
//     `${process.env.PUBLIC_URL}/test_4.mp4`,
//     `${process.env.PUBLIC_URL}/vid3.mp4`
//   ];


//   return (
//     <>
//       <div className={`box video-${selectedVideosCount}`}>
//         {selectedVideosCount === 0 && (
//           <img className='img' src={img} alt="No Camera Available" />       
//         )}
      
//         {videoSelections.map((isSelected, index) => isSelected && (
//   <div key={index} className="video-container">
//     <video autoPlay muted loop > 
//       <source src={videoSources[index]} type="video/mp4" />
//       Your browser does not support the video tag.
//     </video> 
//   </div>
// ))}

//       </div>

//       {activeVideos.map((videoElement, index) => (
//         <VideoFrameSender
//         videoElement= "" // 
//         containerSize= "" // SIZE OF THE DIV OF THE VIDEO
//         videoId= "" // VIDEO ID
//       />
// ))}
//     </>
//   );
// }

// export default VideoPlayerTest;


// import React, { useRef, useEffect } from 'react';
// import img from '../Video/nocamera.jpg';
// import './VideoPlayerTest.css';
// import { useData } from '../../send-backend/dataContext';
// import VideoFrameSender from '../../send-backend/sendBack';

// function VideoPlayerTest() {
//   const { videoSelections } = useData();
//   const videoRefs = useRef([]);
//   const selectedVideosCount = videoSelections.filter(Boolean).length;
//   const videoSources = [
//     `${process.env.PUBLIC_URL}/vid1.mp4`,
//     `${process.env.PUBLIC_URL}/vid2.mp4`,
//     `${process.env.PUBLIC_URL}/test_4.mp4`,
//     `${process.env.PUBLIC_URL}/vid3.mp4`
//   ];

//   return (
//     <>
//       <div className={`box video-${videoSelections.filter(Boolean).length}`}>
//       {selectedVideosCount === 0 && (
//            <img className='img' src={img} alt="No Camera Available" />       
//          )}
//         {videoSelections.map((isSelected, index) => isSelected && (
//           <div key={index} className="video-container">
//             <video ref={el => videoRefs.current[index] = el} autoPlay muted loop> 
//               <source src={videoSources[index]} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video> 
//           </div>
//         ))}
//       </div>

//       {videoSelections.map((isSelected, index) => {
//         if (!isSelected) return null;
//         const videoElement = videoRefs.current[index];
//         const containerSize = videoElement ? videoElement.parentNode.getBoundingClientRect() : {width: 0, height: 0};
//         const videoId = `video-${index}`;

//         return (
//           <VideoFrameSender
//             key={index}
//             videoElement={videoElement}
//             containerSize={containerSize}
//             videoId={videoId}
//           />
//         );
//       })}
//     </>
//   );
// }

// export default VideoPlayerTest;


import React, { useRef, useEffect, useState } from 'react';
import img from '../Video/nocamera.jpg';
import './VideoPlayerTest.css';
import { useData } from '../../send-backend/dataContext';
import VideoFrameSender from '../../send-backend/sendBack';

function VideoPlayerTest() {
  const { videoSelections } = useData();
  const videoRefs = useRef([]);
  const [activeVideos, setActiveVideos] = useState([]);
  const selectedVideosCount = videoSelections.filter(Boolean).length;
  const videoSources = [
    `${process.env.PUBLIC_URL}/vid1.mp4`,
    `${process.env.PUBLIC_URL}/vid2.mp4`,
    `${process.env.PUBLIC_URL}/test_4.mp4`,
    `${process.env.PUBLIC_URL}/vid3.mp4`
  ];

  useEffect(() => {
    const filteredVideos = videoSelections
      .map((isSelected, index) => isSelected ? videoRefs.current[index] : null)
      .filter(el => el !== null);
    setActiveVideos(filteredVideos);
  }, [videoSelections]);

  return (
    <>
      <div className={`box video-${selectedVideosCount}`}>
        {selectedVideosCount === 0 && <img className='img' src={img} alt="No Camera Available" />}
        {videoSelections.map((isSelected, index) => isSelected && (
          <div key={index} className="video-container">
            <video ref={el => videoRefs.current[index] = el} autoPlay muted loop> 
              <source src={videoSources[index]} type="video/mp4" />
              Your browser does not support the video tag.
            </video> 
          </div>
        ))}
      </div>

      {activeVideos.map((videoElement, index) => {
        if (!videoElement) return null;
        const containerSize = videoElement.getBoundingClientRect();
        const videoId = `video-${index}`;

        return (
          <VideoFrameSender
            key={index}
            videoElement={videoElement}
            containerSize={containerSize}
            videoId={videoId}
          />
        );
      })}


      {/* {activeVideos.map((videoElement, index) => (
  !videoElement ? null :
  <VideoFrameSender
    key={index}
    videoElement={videoElement}
    containerSize={videoElement.getBoundingClientRect()}
    videoId={`video-${index}`}
  />
))} */}
    </>
  );
}

export default VideoPlayerTest;
