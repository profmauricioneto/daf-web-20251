import React from 'react';
import { useNotificationPreferences } from './NotificationPreferencesContext';

function NotificationSettings() {
  const { preferences, updatePreference } = useNotificationPreferences();

  const handleChange = (event) => {
    const { name, checked } = event.target;
    updatePreference(name, checked);
  };

  return (
    <div>
      <h2>Preferências de Notificação</h2>
      <label>
        <input
          type="checkbox"
          name="newTaskAssigned"
          checked={preferences.newTaskAssigned}
          onChange={handleChange}
        />
        Nova tarefa atribuída
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="taskCommentAdded"
          checked={preferences.taskCommentAdded}
          onChange={handleChange}
        />
        Comentário adicionado a uma tarefa
      </label>
      <br />
      {/* Outros checkboxes para as demais preferências */}
    </div>
  );
}

export default NotificationSettings;