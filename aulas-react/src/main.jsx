import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyFirstComponent from './components/FirstComponent';
import Greeting from './components/Greeting'
import CalculateBirthYear from './components/CalculateBirthYear';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hello World From React</h1>
    <MyFirstComponent />
    <Greeting name="Maurício Neto" />
    <CalculateBirthYear age={35} />
  </StrictMode>,
)
