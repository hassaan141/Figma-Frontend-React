import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Top from '../Components/Top/top';
import VideoPlayerTest from '../Components/Video/VideoPlayerTest';
import CameraLong from '../Components/CameraListView/CameraLong';
// import CameraShort from '../Components/CameraListView/CameraShort';
import Buttons from '../Components/LoneButtons/Buttons' 
import { DataProvider } from '../send-backend/dataContext';
import { CongestionProvider } from '../Components/Congestion/CongestionContext';


function Dashboard() {
  return (
    <div>
    <DataProvider>
    <CongestionProvider>
    <Top/>
    <Navbar/>
    <Buttons/>
    <VideoPlayerTest/>
    {/* <CameraShort/> */}
    <CameraLong/>
    </CongestionProvider>
    </DataProvider>
    </div>
  )
}

export default Dashboard