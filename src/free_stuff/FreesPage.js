import React, {useContext} from 'react';
import { UserContext } from '../context/UserContext.js';
import { ForumContext } from '../context/ForumContext.js';
import { useParams } from 'react-router-dom';

const FreesPage = ({free}) => {
  const {user, setUser} = useContext(UserContext);
  const { allFrees} = useContext(ForumContext)
  
  const { id } = useParams();

  const selectedFree = allFrees.find((free) => free.id === parseInt(id));
  if (!selectedFree) {
    return <div>Loading...</div>; // You can customize the loading state or handle errors
  }
  return (
    <div className="full-height-page">
      <div className='pageTdiv'>
        <h1 className="pageTitle">{selectedFree.name}</h1>
      </div>
      <div className='pageDdiv'>
        <p className="pageDescription">Description: {selectedFree.description}</p>
      </div>
      <img className='thumbImg' src={selectedFree.image} alt="Free Stuff" />

      <div className='buttonsContainer'>
        {/* <button className="crudButton saveButton">SAVE</button>
        <button className="crudButton saveButton">CLAIM</button> */}
      </div>
      
  </div>
  )
}

export default FreesPage
