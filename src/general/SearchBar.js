import React, { useState, useContext } from 'react';
import { ForumContext } from '../context/ForumContext.js';
import { Link, useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const { allGoods, allServices, allFrees, communities } = useContext(ForumContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const allItems = { allGoods, allServices, allFrees, communities };

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const filteredItems = searchTerm ? filterItems(searchTerm) : allItems;
    setSearchResults(filteredItems);
  
    if (searchTerm) {
      navigate('/searchResults', { state: { searchResults: filteredItems } });
    }
  };

  const filterItems = (input) => {
    if (!input) {
      return allItems;
    }

    const results = {
      allGoods: filterByKeyword(allGoods, input),
      allServices: filterByKeyword(allServices, input),
      allFrees: filterByKeyword(allFrees, input),
      communities: filterByKeyword(communities, input),
    };

    return results;
  };

  const filterByKeyword = (items, input) => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
  };

  return (
    <div className="searchbar">
      <label  htmlFor="search">🔎</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={onSearchChange}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
 <div className="searchResultsContainer" key="searchResultsContainer">
    {Object.entries(searchResults).map(([category, items]) => (
        <div key={category} className='searchResultDiv'>
          {category === 'allGoods' && (
            <Link to={`/goods`} className="link header-link">
            <h1 className='results-column-h1'>GOODS</h1>
          </Link>
          )}
          {category === 'allServices' && (
            <Link to={`/services`} className="link header-link">
            <h1 className='results-column-h1'>SERVICES</h1>
          </Link>
          )}
          {category === 'allFrees' && (
             <Link to={`/frees`} className="link header-link">
             <h1 className='results-column-h1'>FREE STUFF</h1>
           </Link>
          )}
          {category === 'communities' && (
             <Link to={`/communities`} className="link header-link">
             <h1 className='results-column-h1'>COMMUNITY</h1>
           </Link>
          )}
          <div className="contentContainer">
            {items.map((item) => (
             <ul>
                {category === 'allGoods' && (
                 <div className="category-column" style={{ backgroundColor: '#ffb3ba' }}>
                 <h2 key={item.id}>
                    <Link to={`/goods/${item.id}`} className="link">
                    {item.name}
                  </Link>
                  </h2>
                  </div>
                )}
                {category === 'allServices' && (
                <div className="category-column" style={{ backgroundColor: '#ffdfba' }}>
                    <h2 key={item.id}>
                        <Link to={`/services/${item.id}`} className="link">
                            {item.name}
                        </Link>
                  </h2>
                </div>
                )}
                {category === 'allFrees' && (
                <div className="category-column" style={{ backgroundColor: '#ffffba' }}>
                    <h2 key={item.id}>
                        <Link to={`/frees/${item.id}`} className="link">
                            {item.name}
                        </Link>
                    </h2>
                  </div>
                )}
                {category === 'communities' && (
                  <div className="category-column" style={{ backgroundColor: '#baffc9' }}>
                    <h2 key={item.id}>
                        <Link to={`/communities/${item.id}`} className="link">
                            {item.name}
                        </Link>
                  </h2>
                  </div>
                )}
                </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SearchBar;
