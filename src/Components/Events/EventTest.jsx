import React from 'react'
import './EventTest.css'
import img from './trash-2.svg'
import cameraicon from './wall-camare.svg'; 


function EventTest() {
//   const NavItem = ({ icon }) => (
//     <div name='dateLine'>
//       <img src={icon} alt='' />
//     </div>
//   );
  return (
    <div className='eventBox'>
      <div className='heading'>
        <h3 className='title'>Camera Monitoring List</h3>
        <img src={img} alt="" />
      </div>
      <div className='list'>
      <table className="table-container">
      <thead>
        <tr className="camera-header">
          <th>
            <label className="header-item">
              <input type="checkbox" className="camera-checkbox" />
              Camera
            </label>
          </th>
          <th>Monitors</th>
          <th>Intersection</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="3" className="no-data-message">
            <img src={cameraicon} alt="No Cameras" />
            No Cameras
          </td>
        </tr>
      </tbody>
    </table>
      </div>
      <div className='buttons2'>
      <button className='connectCamera'>
        Connect Camera
      </button>
      <button className='addCamera'> 
        Add Camera
      </button>
      </div>
    </div>

  )
}

export default EventTest;