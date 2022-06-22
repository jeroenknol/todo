import { useState, useCallback } from 'react';
import { Todo, TodoType } from './Todo';
import { v4 as uuidv4 } from 'uuid';

const todoFactory = () => ({
  id: uuidv4(),
  title: '',
  completed: false,
});

const Todos = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addNewTodo = () => {
    setTodos((currentTodos) => [todoFactory(), ...currentTodos]);
  };

  const toggleCompleted = useCallback((id: string) => {
    setTodos((currentTodos) => {
      return currentTodos.map((currentTodo) => {
        if (currentTodo.id !== id) {
          return currentTodo;
        }
        return { ...currentTodo, completed: !currentTodo.completed };
      });
    });
  }, []);

  return (
    <main className='w-96 h-[768px] bg-slate-800 rounded-lg p-4 relative'>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleComplete={toggleCompleted} />
      ))}

      <button
        onClick={addNewTodo}
        className='absolute bottom-4 right-4 w-12 h-12 flex items-center font-bold justify-center rounded-full bg-blue-500 text-white font-xl'
      >
        +
      </button>
    </main>
  );
};

export default Todos;
