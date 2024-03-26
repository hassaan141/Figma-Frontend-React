import React, { useState } from 'react';
import './EventTest.css';
import img from './trash-2.svg';
import cameraicon from './wall-camare.svg';
import AddCameraModal from "../Camera/CameraModal";
import greencircle from './greencircle.png';
import redcircle from './redcircle.png';

function EventTest() {
  const [showAddCamera, setShowAddCamera] = useState(false);
  const [rows, setRows] = useState([]);
  const [allChecked, setAllChecked] = useState(false);


  const toggleAddCamera = () => {
    setShowAddCamera(!showAddCamera);
  };
  const toggleAllCheckbox = () => {
    setAllChecked(!allChecked); // Toggle the global checked state
    const updatedRows = rows.map(row => ({ ...row, isChecked: !allChecked }));
    setRows(updatedRows); // Apply the toggled state to all rows
  };

  const addCamera = (cameraData) => {
    const newCamera = {
      id: rows.length + 1,
      ...cameraData,
      isChecked: false, // Initial state of checkbox is unchecked
      showVideo: false,
      monitor: "TC, AC, NM",
      intersection: "Dixie & Dundas"
    };
    setRows([...rows, newCamera]);
    toggleAddCamera(); // Assuming this toggles the modal visibility
  };

  // Function to toggle the isChecked property of a camera
  const toggleCheckbox = (id) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, isChecked: !row.isChecked };
      }
      return row;
    });
    setRows(updatedRows);
  };

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
                  <input type="checkbox" className="camera-checkbox"
                        checked={allChecked}
                        onChange={toggleAllCheckbox} />
                  Camera
                </label>
              </th>
              <th>Monitors</th>
              <th>Intersection</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan="3" className="no-data-message">
                  <img src={cameraicon} alt="No Cameras" />
                  No Cameras
                </td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr key={row.id}>
                  <td>
                    <input 
                      type="checkbox" 
                      className="camera-checkbox" 
                      checked={row.isChecked}
                      onChange={() => toggleCheckbox(row.id)}
                    />
                    <img src={row.isChecked ? greencircle : redcircle} alt="" style={{width: '10px', height: '10px', marginRight: '5px'}} />
                    {row.camera}
                  </td>
                  <td>{row.monitor}</td>
                  <td>{row.intersection}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className='buttons2'>
        <button className='connectCamera'>Connect Camera</button>
        <button onClick={toggleAddCamera} className='addCamera'>Add Camera</button>
        {showAddCamera && (
          <div className='overlay'>
            <AddCameraModal addCamera={addCamera} onClose={toggleAddCamera} />
          </div>
        )}
      </div>
    </div>
  );
}

export default EventTest;