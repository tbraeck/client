import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationButtons = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back one step
  };

  const handleGoForward = () => {
    navigate(1); // Go forward one step
  };

  return (
    <div>
      <button className="nav-button" onClick={handleGoBack}>
        <img src='/1.png' alt='Go Back' className="button-image" />
      </button>
      <button className="nav-button" onClick={handleGoForward}>
        <img src='/2.png' alt='Go Forward' className="button-image" />
      </button>
    </div>
  );
};

export default NavigationButtons;
