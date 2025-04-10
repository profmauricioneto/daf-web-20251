import React, { createContext, useState, useContext } from 'react';

// Define a estrutura das preferências de notificação
const defaultNotificationPreferences = {
  newTaskAssigned: true,
  taskCommentAdded: true,
  taskStatusChanged: true,
  taskDeadlineApproaching: false,
};

// Cria o Contexto
const NotificationPreferencesContext = createContext({
  preferences: defaultNotificationPreferences,
  updatePreference: (preferenceName, newValue) => {}, // Função placeholder
});

function NotificationPreferencesProvider({ children }) {
    const [preferences, setPreferences] = useState(defaultNotificationPreferences);
  
    const updatePreference = (preferenceName, newValue) => {
      setPreferences(prevPreferences => ({
        ...prevPreferences,
        [preferenceName]: newValue,
      }));
      // Aqui você implementaria a lógica para persistir as preferências (ex: API call)
      console.log(`Preferência '${preferenceName}' atualizada para: ${newValue}`);
    };
  
    return (
      <NotificationPreferencesContext.Provider value={{ preferences, updatePreference }}>
        {children}
      </NotificationPreferencesContext.Provider>
    );
  }
  
  // Hook personalizado para facilitar o uso do Contexto
  const useNotificationPreferences = () => {
    return useContext(NotificationPreferencesContext);
  };
  
  export { NotificationPreferencesProvider, useNotificationPreferences };