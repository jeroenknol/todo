import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Todos = dynamic(() => import('../components/TodosComponent'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className='h-[100vh] bg-slate-900 flex justify-center items-center'>
      <Todos />
    </div>
  );
};

export default Home;
