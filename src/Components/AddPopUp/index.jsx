import React from 'react';
import './style.css';

const AddPopUp = ({Title, Description, toggleAddPopup, handleChange}) => {
  return (
    <div className='popup-container'>
      <div className='popup'>
        <div className='content'>
          <header className='popup-header'>
            <h2 className='title'>Add a new note</h2>
            <button className='btn close' onClick={(e) => toggleAddPopup(e)}>
              <i className='ri-close-line'></i>
            </button>
          </header>
          <form className='form'>
            <div className='row title'>
              <label className='label' htmlFor='title'>
                Title
              </label>
              <input
                className='input'
                type='text'
                id='title'
                name='Title'
                autoFocus
                onChange={(e) => handleChange(e)}
                value={Title}
              />
            </div>
            <div className='row description'>
              <label className='label' htmlFor='description'>
                Description
              </label>
              <textarea
                className='input'
                id='description'
                name='Description'
                onChange={(e) => handleChange(e)}
                value={Description}
                rows='3'></textarea>
            </div>
            <button className='btn save-btn'>Add Note</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPopUp;
