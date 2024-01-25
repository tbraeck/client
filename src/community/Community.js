import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext.js';
import { ForumContext } from '../context/ForumContext.js';
import { useParams } from 'react-router-dom';

const Community = ({ good }) => {
  const { user, setUser } = useContext(UserContext);
  const { communities} = useContext(ForumContext);

  const { id } = useParams();
  const selectedCommunity = communities.find((community) => community.id === parseInt(id));

  if (!selectedCommunity) {
    return <div>Loading...</div>; // You can customize the loading state or handle errors
  }

  return (
    <div className="full-height-page">
      <div className="full-width-page">
        <h1 className="pageTitle">{selectedCommunity.name}</h1>
        <p className="pageDescription">Description: {selectedCommunity.description}</p>
        <p className="pageDescription">Date: {selectedCommunity.event_date}</p>
        <img className='thumbImg' src={selectedCommunity.image} alt="Free Stuff" />
        {/* <button className="crudButton saveButton">SAVE</button>
        <button className="crudButton saveButton">CLAIM</button> */}
      </div>
    </div>  
  );
};

export default Community;
