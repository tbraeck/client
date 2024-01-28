import React, { useContext } from 'react'; 
import NavBar from './NavBar.js'
import NavigationButtons from './NavigationButtons.js';
import ChatComponent from "../ChatComponent.js";

import { UserContext } from '../context/UserContext.js'

const Header = ({handleLogout, userComments, setUserComments}) => {
  const {user, setUser} = useContext(UserContext);

  return (
    <div className="headerCont">
       <a href='http://localhost:4000/' className="logo"> <img src="/Barn.gif" alt="Barter Barn Logo" /></a>      
      <div className='navbar'>
        <NavBar  handleLogout={handleLogout} />
      </div>
      <div className='nav_f_b'>
        <NavigationButtons />
      </div>
      <div>
        <ChatComponent/>
      </div>
    </div>
  )
}

export default Header
