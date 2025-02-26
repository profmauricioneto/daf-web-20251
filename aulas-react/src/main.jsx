import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserList from './exercises/exerciseClass01/UserList';
import Duck from './components/Duck';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserList />
    <Duck name="Rodolfo" speak="klingon"/>
  </StrictMode>,
)
