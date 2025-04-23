import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GetApi from './components/GetApi';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GetApi/>
  </StrictMode>,
)
