import { useEffect, useState } from 'react';
import { useData } from './dataContext';
import { useCongestion } from '../Components/Congestion/CongestionContext';

function VideoFrameSender({ videoElement, containerSize, videoId }) {
  const { updateCongestionState } = useCongestion(); // Using the context to get the update function
  const [isCongested, setIsCongested] = useState(false);
  const {setResponseData} = useData();


  const sendFrameAndSize = () => {
    if (!videoElement) console.log(videoElement); // Check if videoElement is defined


    // console.log("Video Element: " + videoElement);
    // console.log("container size: " + containerSize);
    // console.log("Video ID: " + videoId);
    const canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

    // console.log("VIDEO ELEMENT:" + videoElement)
    // console.log("CANVAS WIDTH: " + videoElement.videoWidth)
    // console.log("CANVAS HEIGHT: " + videoElement.videoHeight)
    canvas.toBlob(blob => {
      const formData = new FormData();
      formData.append('frame', blob, 'frame.jpg');
      formData.append('video_id', videoId);
      formData.append('width', containerSize.width.toString());
      formData.append('height', containerSize.height.toString());

      // console.log("VIDEO ID: " + videoId);
      // console.log("CONTAINER WIDTH :" + containerSize.width.toString());
      // console.log("CONTAINER HEIGHT : " + containerSize.height.toString());


      fetch('http://localhost:5000/process', {
        method: 'POST',
        body: formData,
      })
      .then(response => {
        // console.log("RESPONSE" + response.json());
        return response.json();
    })
      .then(data => {
        // console.log("DATA" + data);
        setResponseData(data)
        if (data.success && data.data && data.data.is_congestion) {
          console.log('Congestion is true for videoId:', videoId);
          // // console.log(data);
          // console.log(data.data.is_congestion)
          updateCongestionState(videoId, true); // Update global state to indicate congestion
          setIsCongested(true);
        } else {
          console.log('Congestion is false for videoId:', videoId);
          updateCongestionState(videoId, false); // Update global state to indicate no congestion
        
          // console.log(data.data.is_congestion)
          setIsCongested(false);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }, 'image/jpeg');
  };

  useEffect(() => {
    const intervalId = setInterval(sendFrameAndSize, 5000);
    return () => clearInterval(intervalId);
  }, [videoElement, containerSize, videoId]);

  useEffect(() => {
    const videoIdElement = document.querySelector(`.video${videoId}`);
    if (videoIdElement) {
      videoIdElement.style.border = isCongested ? '3px solid red' : 'none';
    }
  }, [isCongested, videoId]);

  return null;
}

export default VideoFrameSender;
