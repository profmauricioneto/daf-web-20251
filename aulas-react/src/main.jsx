import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GetApi from './components/GetApi';
import App from './pokemon/App';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <GetApi/> */}
  </StrictMode>,
)
