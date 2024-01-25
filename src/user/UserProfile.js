import React, {useContext} from 'react';
import { Link} from 'react-router-dom';
import { UserContext } from '../context/UserContext.js';

const UserProfile = () => {
  const {user} = useContext(UserContext);

  if (!user || !user.goods || !user.services || !user.frees || !user.communities) {
    return <p>Loading...</p>;
  }

const usersGoods = user.goods ? (
  user.goods.map((good) => (
    <div key={good.id} className="user-link">
      <Link to={`/goods/${good.id}`} className="forum-item">
        <h1>{good.name}</h1>
      </Link>
      <button className='btn btn-primary'>DELETE</button>
    </div>
  ))
) : null;

const usersServices = user.services ? (
user.services.map(service => (
  <div key={service.id} className="user-link">
          <Link to={`/services/${service.id}`} className="forum-item">
            <h1>{service.name}</h1>
          </Link>
          <button className='btn btn-primary'>DELETE</button>
    </div>
)) ) : null;

const usersFrees = user.frees ? (
user.frees.map(free => (

  <div key={free.id} className="user-link">
          <Link to={`/frees/${free.id}`} className="forum-item">
            <h1>{free.name}</h1>
          </Link>
          <button className='btn btn-primary'>DELETE</button>
    </div>
 
))) : null;

const usersCommunities = user.communities ? (
user.communities.map(community => (

  <div key={community.id} className="user-link">
          <Link to={`/communities/${community.id}`} className="forum-item">
            <h1>{community.name}</h1>
          </Link>
          <button className='btn btn-primary'>DELETE</button>
    </div>
 
))) : null;

  return (
    <div className='home'>
    <div className="userProfile">
      <div className='user-h1'>
        <div>
          <h1 className='userNameTitle'>{user.username}'s Saved Items</h1>
        </div>
        <div className="mainPageItemsContainer" key="mainPageItemsContainer">
        <div className="category-column" style={{ backgroundColor: '#ffb3ba' }}>
        <div>
          <h1 className='category-column-h1-user'> GOODS</h1>
          {usersGoods}
        </div>
        </div>
        <div className="category-column" style={{ backgroundColor: '#ffdfba' }}>
        <div>
          <h1 className='category-column-h1-user'>SERVICES</h1>
          {usersServices}
        </div>
        </div>
        <div className="category-column" style={{ backgroundColor: '#ffffba' }}>
        <div>
          <h1 className='category-column-h1-user'>FREE STUFF</h1>
          {usersFrees}
        </div>
        </div>
        <div className="category-column" style={{ backgroundColor: '#baffc9' }}>
        <div>
          <h1 className='category-column-h1-user'>COMMUNITIES</h1>
          {usersCommunities}
        </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserProfile;
