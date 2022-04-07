import React from 'react';
import { createRoot } from 'react-dom/client';

//css import
import './assets/css/index.css';

//component imports
import App from './App';

const mountPoint = document.getElementById('app-mount');
const app = createRoot(mountPoint);
app.render (
  <App />
);
