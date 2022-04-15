import React from 'react'
import AddBox from '../Components/AddBox'
import SingleNote from '../Components/SingleNote'

const Home = ({toggleAddPopup}) => {
  return (
    <>
      <AddBox toggleAddPopup={toggleAddPopup} />
      <SingleNote />
      <SingleNote />
      <SingleNote />
      <SingleNote />
      <SingleNote />
      <SingleNote />
    </>
  )
}

export default Home