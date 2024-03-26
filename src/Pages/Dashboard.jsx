import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Top from '../Components/Top/top';
import VideoPlayerTest from '../Components/Video/VideoPlayerTest';
import CameraLong from '../Components/CameraListView/CameraLong';
import Buttons from '../Components/LoneButtons/Buttons'


function Dashboard() {
  return (
    <div>
    <Top/>
    <Navbar/>
    <Buttons/>
    <VideoPlayerTest/>
    <CameraLong/>
    </div>
  )
}

export default Dashboard
