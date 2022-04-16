import React from 'react';
import SettingMenu from '../SettingMenu';
import './style.css';

const SingleNote = ({ note: { id, Title, Description, Date}, showEditPopup, deleteNote }) => {
  return (
    <div className='single-note'>
      <div className='details'>
        <h2 className='title'>{Title}</h2>
        <p className='description'>{Description}</p>
      </div>
      <div className='bottom-content'>
        <span className='date'>{Date}</span>
        <div className='actions'>
          <button className='btn more'>
            <i className='ri-more-fill'></i>
          </button>
          <SettingMenu id={id} showEditPopup={showEditPopup} deleteNote={deleteNote} />
        </div>
      </div>
    </div>
  );
};

export default SingleNote;