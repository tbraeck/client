import React, {useContext} from 'react'
import { Link} from 'react-router-dom';
import { ForumContext } from '../context/ForumContext.js';
import { UserContext } from '../context/UserContext.js';

const Communities = () => {
    const {user, setUser} = useContext(UserContext);
    const { communities} = useContext(ForumContext)

    const forumCommunities = communities.map((community) => (
    <div key={community.id} className="forum-item">
          <Link to={`/communities/${community.id}`} className="link">
            <h1>{community.name}</h1>
          </Link>
    </div>
  ));
  
  return (
    <div className="forum-container">
    <div className="forum-list">
      {forumCommunities}
    </div>
  </div>
  )
}

export default Communities
