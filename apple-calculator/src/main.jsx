import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Calculator from './main/Calculator'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2>Apple Calculator</h2>
    <Calculator />
  </StrictMode>,
)
