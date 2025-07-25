import Header from '@/components/ui/header';
import Statistic from '../layout/statistic/page';
import Estimation from '../layout/estimation/page';
import Insight from '../layout/insight/page';
import Summary from '../layout/summary/page';

export default function Dashboard() {
  return (
    <div className='flex h-screen flex-col py-2 px-4'>
      <Header />
      <h1 className='mt-16 m-4 font-bold text-2xl'>Dashboard</h1>
      <div className='m-2'>
        <div className="flex flex-row rounded-xl border shadow-sm">

          <Summary amount={"Rp. " + 12345678} title='Jumlah Penghasilan' child={[]} />
          
          <Summary amount={"Rp. " + 12345678} title='Jumlah Penghasilan' child={[]} />
        </div>
      </div>
      <div className='flex flex-row'>
        <Insight title={"Total Penjualan Terbanyak"} desc='abc' child={[]} />
        <Insight title={"Total Penjualan Terbanyak"} desc='abc' child={[]} />
        <Insight title={"Total Penjualan Terbanyak"} desc='abc' child={[]} />
      </div>
      <div className='flex flex-row'>
        <Estimation />
        <Statistic />
      </div>
      <div className='flex w-full flex-row'>
        aawjndiawudnawoidjawoiajd
      </div>

    </div>


  );
}

