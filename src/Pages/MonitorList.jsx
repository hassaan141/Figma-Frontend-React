import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Top from '../Components/Top/top';
import MonitoringList from "../Components/Monitor/MonitoringList"

function MonitorList() {
  return (
    <>
      <Top title='Monitoring List'/>
      <Navbar/>
      <MonitoringList/>
    </>
  )
}

export default MonitorList
