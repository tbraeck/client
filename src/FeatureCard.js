import React, { useState, useEffect, useCallback, useContext } from 'react';
import GoodPage from './goods/GoodPage.js';
import ServicePage from './services/ServicePage.js';
import FreesPage from './free_stuff/FreesPage.js';
import CommunityPage from './community/Community.js'; 
import { UserContext } from './context/UserContext.js';
import { ForumContext } from './context/ForumContext.js';

const FeaturedCard = () => {
  const [randomIndex, setRandomIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const { user } = useContext(UserContext);
  const { allGoods, allServices, allFrees, communities } = useContext(ForumContext);

  const handleRandomize = useCallback(() => {
    const allItems = [...allGoods, ...allServices, ...allFrees, ...communities];
    if (allItems.length > 0) {
      const newIndex = Math.floor(Math.random() * allItems.length);
      setRandomIndex(newIndex);
      setIsSaved(false);
    }
  }, [allGoods, allServices, allFrees, communities]);

  const handleSave = () => {
    if (randomItem) {
      setIsSaved(true);
      // handleSaveGoodToUserProfile(randomItem);
    }
  };

  useEffect(() => {
    handleRandomize();
  }, [handleRandomize, allGoods, allServices, allFrees, communities]);

  const allItems = [...allGoods, ...allServices, ...allFrees, ...communities];
  const randomItem = allItems[randomIndex];

  return (
    <div className="featured-card">
      {!isSaved && randomItem ? (
        <div>
          {/* Render the appropriate forum page based on the item type */}
          {randomItem.type === 'good' && (
            <GoodPage good={randomItem} handleSave={handleSave} featured={true} />
          )}
          {randomItem.type === 'service' && (
            <ServicePage service={randomItem} handleSave={handleSave} featured={true} />
          )}
          {randomItem.type === 'free' && (
            <FreesPage free={randomItem} handleSave={handleSave} featured={true} />
          )}
          {randomItem.type === 'community' && (
            <CommunityPage community={randomItem} handleSave={handleSave} featured={true} />
          )}
        </div>
      ) : null}
    </div>  
  );
};

export default FeaturedCard;

