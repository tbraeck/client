import React, {useContext} from 'react'
import { Link} from 'react-router-dom';
import { ForumContext } from '../context/ForumContext.js';
import { UserContext } from '../context/UserContext.js';

const AllFrees = () => {
  const {user, setUser} = useContext(UserContext);
  const { allFrees } = useContext(ForumContext)
  
  const forumFrees = allFrees.map((free) => (
    <div key={free.id} className="forum-item">
          <Link to={`/frees/${free.id}`} className="link">
            <h1>{free.name}</h1>
          </Link>
    </div>
  ));
  
  return (
    <div className="forum-container">
    <div className='forum-list'> 
     {forumFrees}
    </div>
    </div>
  )
}

export default AllFrees
