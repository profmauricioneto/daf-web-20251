import React from 'react';
import { useNotificationPreferences } from './NotificationPreferencesContext';

function TaskItem({ task }) {
  const { preferences } = useNotificationPreferences();

  useEffect(() => {
    if (task.isNew && preferences.newTaskAssigned) {
      console.log(`[Alerta Visual] Nova tarefa "${task.title}" atribuída!`);
      // Lógica para exibir um alerta visual na tela
    }
  }, [task, preferences.newTaskAssigned]);

  return (
    <div>
      <h3>{task.title}</h3>
      {/* Outras informações da tarefa */}
    </div>
  );
}

export default TaskItem;