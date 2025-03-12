import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserList from './exercises/exerciseClass01/UserList';
import Duck from './components/Duck';
import Father from './components/inheritance/Father';
import TaskList from './exercises/exerciseClass02/TaskList';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <UserList />
    <Duck name="Rodolfo" speak="klingon"/>
    <Father name="Bob" surname="Moreira" /> */}
    <TaskList />
  </StrictMode>,
)
