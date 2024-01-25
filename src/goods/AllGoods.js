import React, {useContext} from 'react'
import { Link} from 'react-router-dom';
import { ForumContext } from '../context/ForumContext.js';
import { UserContext } from '../context/UserContext.js';

const AllGoods = () => {

    const {user, setUser} = useContext(UserContext);
  const { allGoods} = useContext(ForumContext)
  
  const forumGoods = allGoods.map((good) => (
    <div key={good.id} className="forum-item">
          <Link to={`/goods/${good.id}`} className="link">
            <h1>{good.name}</h1>
          </Link>
    </div>
  ));
  
  return (
    <div className="forum-container">
    <div className="forum-list">
      {forumGoods}
    </div>
  </div>
  )
}

export default AllGoods
