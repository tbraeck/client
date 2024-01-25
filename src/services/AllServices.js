import React, {useContext} from 'react'
import { Link} from 'react-router-dom';

import { ForumContext } from '../context/ForumContext.js';
import { UserContext } from '../context/UserContext.js';

const AllServices = () => {

    const {user, setUser} = useContext(UserContext);
  const { allServices} = useContext(ForumContext)
  
  const forumServices = allServices.map((service) => (
    <div key={service.id} className="forum-item">
          <Link to={`/services/${service.id}`} className="link">
            <h1>{service.name}</h1>
          </Link>
    </div>
  ));
  
  return (
    <div className="forum-container">
        <div className="forum-list">
     {forumServices}
    </div>
    </div>
  )
}

export default AllServices
