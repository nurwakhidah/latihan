import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { Router } from 'react-router-dom';
import Router from './route';

//  const items = ["Home", "About"];

// const products = [
//     {
//       name: "Pixy Make It Glow Beauty Skin Primer",
//       price: "Rp 14.500",
//     },
  
//     {
//       name: "Make Over Ultra Cover Liquid matt Foundation",
//       price: "Rp 111.000",
//     },
  
//     {
//       name: "Make Over Powerstay Total Cover Liquid Concealer",
//       price: "Rp 95.000",
//     },
  
//     {
//       name: "Make Over Face Contour Kit",
//       price: "Rp 112.222",
//     },
  
  
//   ];

// ReactDOM.render(<App items = {items}/>, document.getElementById('root'));
ReactDOM.render(<Router/>, document.getElementById('root'));
// ReactDOM.render(<App products = {products}/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
