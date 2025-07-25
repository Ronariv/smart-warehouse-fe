import Header from '@/components/ui/header';
import Statistic from '../layout/statistic/page';
import Estimation from '../layout/estimation/page';

export default function Dashboard() {
  return (
    <div className='flex h-screen flex-col p-2'>
      <Header />
      <h1 className='mt-16 m-4 font-bold text-2xl'>Dashboard</h1>
      <div className='flex w-full flex-row'>
        <Estimation />
        <Statistic />
      </div>
      <div className='flex w-screen flex-row'>
        aawjndiawudnawoidjawoiajd
      </div>

    </div>


  );
}

