import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

//css import
import './assets/css/index.css';

//component imports
import App from './App';

const mountPoint = document.getElementById('app-mount');
const app = createRoot(mountPoint);
app.render (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
