import React from 'react';
import './style.css';

const SingleNote = () => {
  return (
    <div className="single-note">
      <div className="details">
        <h2 className="title">Title here</h2>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. excepturi. Nobis esse magni delectus qui corrupti quam libero suscipit? Inventore, voluptates modi!</p>
      </div>
      <div className="bottom-content">
        <span className="date">April 3, 2022</span>
        <div className="actions">
          <button className="btn more"><i className='ri-more-fill'></i></button>
        </div>
      </div>
    </div>
  )
}

export default SingleNote;