import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import AboutUs from './AboutUs';
import Product from './Product';
import NewCollection from './NewCollection';
import Futer from './Futer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <AboutUs/>
    <Product/>
    <NewCollection/>
    <Futer/>
    
  </React.StrictMode>
);

