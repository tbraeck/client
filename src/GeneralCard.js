import React, { useState, useContext} from 'react';
import { ForumContext } from './context/ForumContext.js';
import { UserContext } from './context/UserContext.js';

const GeneralCard = ({props}) => {
    const {user, setUser} = useContext(UserContext);
    const {allGoods, setAllGoods, allServices, setAllServices, allFrees, setAlFrees } = useContext(ForumContext)
    



    return(
               <div class="genCardContainer">
                    <div className='carBorder'>
                      <div class="card-body">
                        <h2 class="card-title">{props.name}</h2>
                        <p class="card-text">
                         {props.description}
                        </p>    
                        {props.children}
                      </div>
                    </div>
                  </div>
            )
        }

export default GeneralCard
