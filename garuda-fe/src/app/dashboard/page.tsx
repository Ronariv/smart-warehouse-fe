import Header from '@/components/ui/header';
import Statistic from '../layout/statistic/page';

export default function Dashboard() {
  return (
    <div className='flex h-screen flex-col'>
      <Header />
      <h1 className='mt-16 m-4 font-bold text-2xl'>Dashboard</h1>
      <Statistic />
    </div>


  );
}

