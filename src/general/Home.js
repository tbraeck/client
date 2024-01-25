  import React, {useContext} from 'react';
  import { Link} from 'react-router-dom';
  import { ForumContext } from '../context/ForumContext.js';
import SearchBar from './SearchBar.js';

  const Home = () => {
    const { allGoods, allServices, allFrees, communities } = useContext(ForumContext)
    
    const forumGoods = allGoods.map((good) => (
      <div key={good.id} className="forum-item">
            <Link to={`/goods/${good.id}`} className="link">
              <h2>{good.name}</h2>
            </Link>
      </div>
    ));
    
    const forumServices = allServices.map((service) => (
      <div key={service.id} className="forum-item">
            <Link to={`/services/${service.id}`} className="link">
              <h2>{service.name}</h2>
            </Link>
      </div>
    ));
    
    const forumFrees = allFrees.map((free) => (
      <div key={free.id} className="forum-item">
            <Link to={`/frees/${free.id}`} className="link">
              <h2>{free.name}</h2>
            </Link>
      </div>
    ));

    const forumCommunities = communities.map((community) => (
      <div key={community.id} className="forum-item">
            <Link to={`/communities/${community.id}`} className="link">
              <h2>{community.name}</h2>
            </Link>
      </div>
    ));
    

    return (
      <div className="home">x
        <div className='searchBar'><SearchBar/></div>
        <div className="background-image"></div>
        <div className="content">
          <div className="header-box">
            <div className="mainPageItemsContainer" key="mainPageItemsContainer">
            <div className="category-column" style={{ backgroundColor: '#ffb3ba' }}>
                <Link to={`/goods`} className="link header-link">
                  <h1 className='category-column-h1'>GOODS</h1>
                </Link>
                {forumGoods}
              </div>
              <div className="category-column" style={{ backgroundColor: '#ffdfba' }}>
                <Link to={`/services`} className="link header-link">
                  <h1 className='category-column-h1'>SERVICES</h1>
                </Link>
                {forumServices}
              </div>
              <div className="category-column" style={{ backgroundColor: '#ffffba' }}>
                <Link to={`/frees`} className="link header-link">
                  <h1 className='category-column-h1'>FREE STUFF</h1>
                </Link>
                {forumFrees}
              </div>
              <div className="category-column" style={{ backgroundColor: '#baffc9' }}>
                <Link to={`/communities`} className="link header-link">
                  <h1 className='category-column-h1'>COMMUNITY</h1>
                </Link>
                {forumCommunities}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    
  };

  export default Home;
