import React from 'react';
import './Buttons.style.css'; 

import mappin from "./logo/map-pin.svg";
import editview from "./logo/layout-grid.svg";
import { useData } from '../../send-backend/dataContext';

const NavItem = ({ icon }) => (
  <div>
    <img src={icon} alt='' />
  </div>
);

const Buttons = () => {
  const { setSelectedView } = useData();

  const handleViewSelection = (e) => {
    const value = e.target.value;
    if (value === "3" || value === "4") {
      alert("You can only choose up to 2x2 view for demo purposes");
      // Optionally, you could reset the selection or set it to a default
      // e.target.value = ""; // Reset to placeholder value
      return; // Exit the function without setting the selected view
    }

    setSelectedView(e.target.value);
  };

  return (
    <div className='buttons1'>
      <button className='locations'>
        <NavItem icon={mappin} />
        Locations
      </button>

      <div className='editView'>
        <NavItem className='somethingButton' icon={editview} />
        <label>
          <select className='dropDownView' name="camera" onChange={handleViewSelection}>
            <option value="">Edit View</option>
            <option value="1">1x1</option>
            <option value="2">2x2</option>
            <option value="3">3x3</option>
            <option value="4">4x4</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default Buttons;