import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import './index.css';
import './main.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { ForumProvider } from './context/ForumContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserProvider>
      <ForumProvider>
        <Router>
            <App />
        </Router>
      </ForumProvider>
    </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
