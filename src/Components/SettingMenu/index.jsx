import React from 'react';
import './style.css';

const SettingMenu = ({id, showEditPopup}) => {
  return (
    <ul className='setting-menu'>
      <li>
        <button className='btn edit-btn' onClick={() => showEditPopup(id)}>
          <i className='ri-pencil-line'></i>
          Edit
        </button>
      </li>
      <li>
        <button className='btn del-btn'>
          <i className='ri-delete-bin-line'></i>
          Delete
        </button>
      </li>
    </ul>
  );
};

export default SettingMenu;
