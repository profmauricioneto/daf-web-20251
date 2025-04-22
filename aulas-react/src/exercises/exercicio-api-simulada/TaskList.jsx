import React, { useState, useEffect } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockTasks = [
        { id: 1, title: 'Estudar React' },
        { id: 2, title: 'Fazer compras' },
        { id: 3, title: 'Praticar exercícios' }
      ];
      
      setTasks(mockTasks);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar tarefas');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = () => {
    if (newTaskTitle.trim() === '') return;
    
    const newTask = {
      id: Date.now(),
      title: newTaskTitle
    };
    
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="task-list-container">
      <h2>Lista de Tarefas</h2>
      
      <div className="add-task-form">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite uma nova tarefa"
        />
        <button onClick={addTask} disabled={isLoading}>
          Adicionar Tarefa
        </button>
      </div>

      {isLoading && <p>Carregando tarefas...</p>}
      {error && <p className="error">{error}</p>}

      {!isLoading && !error && (
        <ul className="task-list">
          {tasks.map(task => (
            <li key={task.id} className="task-item">
              {task.title}
            </li>
          ))}
        </ul>
      )}

      {!isLoading && tasks.length === 0 && !error && (
        <p>Nenhuma tarefa encontrada.</p>
      )}
    </div>
  );
};

export default TaskList;