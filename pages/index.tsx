import type { NextPage } from 'next';
import { Todos } from '../components/todos';

const Home: NextPage = () => {
  return (
    <div className='h-[100vh] bg-slate-900 flex justify-center items-center'>
      <Todos />
    </div>
  );
};

export default Home;
