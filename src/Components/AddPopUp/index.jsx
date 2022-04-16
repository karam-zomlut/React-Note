import React from 'react';
import './style.css';

const AddPopUp = ({
  Title,
  Description,
  TitleError,
  DescriptionError,
  toggleAddPopup,
  handleChange,
  addNote,
  EditId,
  EditMode,
  editNote
}) => {
  return (
    <div className='popup-container'>
      <div className='popup'>
        <div className='content'>
          <header className='popup-header'>
            <h2 className='title'>
              {EditMode ? 'Update Note' : 'Add a new note'}
            </h2>
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
                className={`input ${TitleError ? 'error' : ''}`}
                type='text'
                id='title'
                name='Title'
                autoFocus
                onChange={(e) => handleChange(e)}
                value={Title}
              />
              {TitleError && <span className='error'>{TitleError}</span>}
            </div>
            <div className='row description'>
              <label className='label' htmlFor='description'>
                Description
              </label>
              <textarea
                className={`input ${DescriptionError ? 'error' : ''}`}
                id='description'
                name='Description'
                onChange={(e) => handleChange(e)}
                value={Description}
                rows='3'></textarea>
              {DescriptionError && (
                <span className='error'>{DescriptionError}</span>
              )}
            </div>
            {EditMode ? (
              <button className='btn save-btn' onClick={(e) => editNote(e, EditId)}>
                Update
              </button>
            ) : (
              <button className='btn save-btn' onClick={(e) => addNote(e)}>
                Add Note
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPopUp;
