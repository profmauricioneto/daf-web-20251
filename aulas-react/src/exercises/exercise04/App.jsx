import NotificationSettings from "./NotificationSettings";
import CommentSection from './CommentSection';
import NotificationPreferencesProvider from './NotificationPreferencesContext';

function App() {
    return (
      <NotificationPreferencesProvider>
        {/* Outros componentes da sua aplicação */}
        <TaskItem task={{ id: 1, title: 'Implementar Login', isNew: true }} />
        <CommentSection task={{ id: 1, title: 'Implementar Login' }} comments={[]} />
        <NotificationSettings />
        {/* Mais componentes que precisam acessar as preferências */}
      </NotificationPreferencesProvider>
    );
  }
  
  export default App;