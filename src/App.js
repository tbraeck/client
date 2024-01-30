import React, { useContext} from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./general/Home.js";
import Footer from "./general/Footer.js";
import Header from "./general/Header.js";
import UserProfile from "./user/UserProfile.js";
import AllGoods from "./goods/AllGoods.js";
import AllServices from "./services/AllServices.js";
import AllFrees from "./free_stuff/AllFrees.js";
import GoodPage from "./goods/GoodPage.js";
import ServicePage from "./services/ServicePage.js";
import Communities from "./community/Communities.js";
import Community from "./community/Community.js";
import FreesPage from "./free_stuff/FreesPage.js";
import FeatureCard from "./FeatureCard.js";
import NewPost from "./NewPost.js";
import Login from "./login-components/Login.js";
import SearchResults from "./general/SearchResults.js";
import axios from 'axios';


const App = () => {
  
  return (
    <div className="App">
      <div className='mainContainer'>
        <div className="header">
            <Header/>
        </div>
          <div>
            <Routes>
                <Route exact path="/" element={<Home /> } />  
                {/* {/* <Route path="/forums" element={<ForumList allForum={allForum}  setAllForum={setAllForum} /> }/> */}
                <Route path="/goods" element={<AllGoods   />} />
                <Route path="/services" element={<AllServices   />} />
                <Route path="/frees" element={<AllFrees  />} />
                <Route path="/communities" element={<Communities  />} />
                <Route path="/goods/:id" element={<GoodPage  />}/> 
                <Route path="/communities/:id" element={<Community  />}/> 
                <Route path="/services/:id" element={<ServicePage   />}/> 
                <Route path="/frees/:id" element={<FreesPage  />}/>
                <Route path="/featured" element={<FeatureCard   />} />
                <Route path="/create_post" element={<NewPost/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/searchResults" element={<SearchResults />}/>
                {/* <Route path="/forums/:id/edit" element={<ForumCard allForum={allForum} setAllForum={setAllForum} />}/> 
                <Route path="/users/:user_id/goods/:good_id" element={<EditGoods user={user}  allForum={allForum}/>} />
                <Route path="/users/:user_id/services/:service_id" element={<EditServices user={user} allForum={allForum}/>} />
                <Route path="/users/:user_id/free_stuffs/:free_ stuffs_id" element={<EditFreeStuffs user={user}  allForum={allForum}/>} /> */}
                <Route path="/user-profile"  element={ <UserProfile /> } /> 
            </Routes>
          </div> 
             
            <div className='footer--pin'>
              <Footer/>
            </div>
        </div>
        </div>
        
  );
}

export default App;
