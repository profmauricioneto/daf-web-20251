import React from 'react';
import { useNotificationPreferences } from './NotificationPreferencesContext';

function handleCommentAdded(task, comment) {
  const { preferences } = useNotificationPreferences();

  if (preferences.taskCommentAdded) {
    console.log(`[E-mail] Novo comentário adicionado à tarefa "${task.title}": ${comment.text}`);
    // Lógica para enviar um e-mail de notificação
  } else {
    console.log(`Notificação por e-mail para novo comentário desativada pelo usuário.`);
  }
}

function CommentSection({ task, comments }) {
  // ... lógica para adicionar um novo comentário ...

  const addNewComment = (text) => {
    const newComment = { id: Date.now(), text, author: 'Usuário Atual' };
    // ... adicionar o comentário ao estado ...
    handleCommentAdded(task, newComment);
  };

  return (
    <div>
      {/* Exibição de comentários */}
      <button onClick={() => addNewComment('Novo comentário!')}>Adicionar Comentário</button>
    </div>
  );
}

export default CommentSection;