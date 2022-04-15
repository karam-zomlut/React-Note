import React from 'react'
import AddBox from '../Components/AddBox'
import SingleNote from '../Components/SingleNote'

const Home = ({ notes, toggleAddPopup, showEditPopup }) => {
  return (
    <>
      <AddBox toggleAddPopup={toggleAddPopup} />
      {notes.length
        ? notes.map((note) => (
            <SingleNote key={note.id} note={note} showEditPopup={showEditPopup} />
          ))
        : null}
    </>
  );
};

export default Home