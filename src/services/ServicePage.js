import React, {useContext} from 'react';
import { UserContext } from '../context/UserContext.js';
import { ForumContext } from '../context/ForumContext.js';
import { useParams } from 'react-router-dom';

const ServicePage = ({service}) => {
  const {user, setUser} = useContext(UserContext);
  const { allServices } = useContext(ForumContext)
  
  const { id } = useParams();

  const selectedService = allServices.find((service) => service.id === parseInt(id));
  if (!selectedService) {
    return <div>Loading...</div>; // You can customize the loading state or handle errors
  }
  return (
    <div className="full-height-page">
      <div className="full-width-page">
        <h1 className="pageTitle">{selectedService.name}</h1>
        <p className="pageDescription">Description: {selectedService.description}</p>
        <img className='thumbImg' src={selectedService.image} alt="Free Stuff" />

        {/* <button className="crudButton saveButton">SAVE</button>
        <button className="crudButton saveButton">CLAIM</button> */}
      </div>
    </div>
  )
}

export default ServicePage
