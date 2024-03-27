import React, { useState } from "react";
import "./CameraModal.css";


function AddCameraModal({ show, onClose, addCamera }) {
  const [cameraData, setCameraData] = useState({
    camera: '',
    monitor: [],
  });  
  if (show) return null;
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCameraData({ ...cameraData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Call the addCamera function with cameraData
      addCamera(cameraData);
    };
  
    return (
      <>
        <div className="modal-backdrop" onClick={onClose} />
        <div className="modal-container">
          <div className="modal-content">
            <h3 className="formBox" >Add New Camera</h3>
            {/* Form fields and submit logic here */}
            <form className='formDiv'onSubmit={handleSubmit}>
            <p className="paragraph">Please select the type of camera and the specific traffic conditions you would like to monitor in the camera feed.</p>
            <h3 className="paragraph" >Camera Name</h3>
            <div className="paragraph">
               <select className='dropDown' name="camera" value={cameraData.camera} onChange={handleChange} >
                <option value="" disabled>Select your option</option>
                <option value="Camera 1">Camera 1</option>
                <option value="Camera 2">Camera 2</option>
                <option value="Camera 3">Camera 3</option>
                <option value="Camera 4">Camera 4</option>
                <option value="Camera 5">Camera 5</option>
                <option value="Camera 6">Camera 6</option>
                <option value="Camera 7">Camera 7</option>
              </select>
            </div>
            <h3 className="paragraph">Monitor</h3>
            <div  className="MonitorCheckbox">
            <label className="paragraph"><input className="label" type="checkbox"/>Select All</label>
            <label className="paragraph"><input className="label" type="checkbox" />Traffic Congestion</label>
            <label className="paragraph"><input className="label" type="checkbox"/>Road Accidents</label>
            <label className="paragraph"><input className="label" type="checkbox"/>Near Misses</label>
            <label className="paragraph"><input className="label" type="checkbox"/>Pedestrian Flow</label>
            <label className="paragraph"><input className="label" type="checkbox"/>Bicycle Traffic</label>
            <label className="paragraph"><input className="label" type="checkbox" />Emergency Vehicles</label>
            <label className="paragraph"><input className="label" type="checkbox" />Public Transport</label>
            </div>

            <div className="buttons">
            <button className='btn cancel'onClick={onClose}>Cancel</button>
            <button type= 'submit' className='btn addcamera'>Add Camera</button>
            </div>

            </form>
          </div>
        </div>
      </>
    );
  }

  export default AddCameraModal;