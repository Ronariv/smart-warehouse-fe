import Header from '@/components/ui/header';
import Statistic from '../layout/statistic/page';

export default function Dashboard() {
  return (
    <div className='flex justify-between h-full'>
      <Header />
      <h1 className='mt-16 m-4 font-bold text-2xl'>Dashboard</h1>
      <div className='h-1/2'>a</div>
      <Statistic />
    </div>


  );
}

