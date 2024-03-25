import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Top from '../Components/Top/top';
import VideoPlayerTest from '../Components/Video/VideoPlayerTest';
import EventTest from '../Components/Events/EventTest';


function Dashboard() {
  return (
    <div>
    <Top/>
    <Navbar/>
    

    <div style={{display: 'flex'}}>
      <VideoPlayerTest/>
      <EventTest/>
    </div>
    </div>
  )
}

export default Dashboard
