import { useState, useCallback } from 'react';
import { Todo } from './Todo';

export type TodoType = {
  id: string;
  title: string;
  completed: boolean;
};

const mockTodos = [
  {
    id: 'a',
    title: 'build todo app',
    completed: false,
  },
  {
    id: 'b',
    title: 'foobar',
    completed: true,
  },
];

const Todos = () => {
  const [todos, setTodos] = useState<TodoType[]>(mockTodos);

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
    <main className='w-96 h-[768px] bg-slate-800 rounded-lg p-4'>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleComplete={toggleCompleted} />
      ))}
    </main>
  );
};

export default Todos;
