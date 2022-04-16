import React from 'react'
import AddBox from '../Components/AddBox'
import SingleNote from '../Components/SingleNote'

const Home = ({ notes, toggleAddPopup, showEditPopup, deleteNote }) => {
  return (
    <>
      <AddBox toggleAddPopup={toggleAddPopup} />
      {notes.length
        ? notes.map((note) => (
            <SingleNote key={note.id} note={note} showEditPopup={showEditPopup} deleteNote={deleteNote} />
          ))
        : null}
    </>
  );
};

export default Home