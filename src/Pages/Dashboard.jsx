import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Top from '../Components/Top/top';
import VideoPlayerTest from '../Components/Video/VideoPlayerTest';
import EventTest from '../Components/Events/EventTest';
import Buttons from '../Components/LoneButtons/Buttons'


function Dashboard() {
  return (
    <div>
    <Top/>
    <Navbar/>
    <Buttons/>
    <VideoPlayerTest/>
    <EventTest/>
    </div>
  )
}

export default Dashboard
