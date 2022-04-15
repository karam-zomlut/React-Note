import React from 'react';
import './style.css';


const AddBox = ({toggleAddPopup}) => {
  return (
    <div className="add-box" onClick={(e) => toggleAddPopup(e)}>
      <div className="icon">
        <i className="ri-add-line"></i>
      </div>
      <h2 className="box-title">Add New Note</h2>
    </div>
  )
}

export default AddBox;