import React from 'react';
import SettingMenu from '../SettingMenu';
import './style.css';

const SingleNote = () => {
  return (
    <div className="single-note">
      <div className="details">
        <h2 className="title">Title here</h2>
        <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum possimus harum nulla cumque, asperiores dignissimos facilis eius non, exercitationem ipsam culpa perferendis molestiae quaerat quam placeat recusandae molestias voluptate quisquam.</p>
      </div>
      <div className="bottom-content">
        <span className="date">April 3, 2022</span>
        <div className="actions">
          <button className="btn more"><i className='ri-more-fill'></i></button>
          <SettingMenu />
        </div>
      </div>
    </div>
  )
}

export default SingleNote;