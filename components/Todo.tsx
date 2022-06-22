import React from 'react';
import { TodoType } from './Todos';

interface Props {
  todo: TodoType;
  toggleComplete: (id: string) => void;
}

export const Todo: React.FC<Props> = ({ todo, toggleComplete }) => {
  const { id, title, completed } = todo;

  return (
    <div>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => toggleComplete(id)}
      />
      {title}
    </div>
  );
};
