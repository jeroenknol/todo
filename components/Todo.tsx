import React, { useEffect, useRef, useState } from 'react';

export type TodoType = {
  id: string;
  title: string;
  completed: boolean;
};

interface Props {
  todo: TodoType;
  toggleComplete: (id: string) => void;
}

export const Todo: React.FC<Props> = ({ todo, toggleComplete }) => {
  const { id, title, completed } = todo;
  const [innerTitle, setInnerTitle] = useState(title);
  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (title === '') {
      titleRef.current && titleRef.current.focus();
    }
  }, [titleRef]);

  return (
    <div className='flex items-center'>
      <input
        className='h-4 w-4 accent-slate-700'
        type='checkbox'
        checked={completed}
        onChange={() => toggleComplete(id)}
      />
      <input
        value={innerTitle}
        ref={titleRef}
        onChange={(e) => setInnerTitle(e.target.value)}
        className='ml-2 py-1 px-2 w-full bg-transparent focus:bg-slate-600 hover:bg-slate-700 focus:outline-none text-white rounded-sm'
      />
    </div>
  );
};
