import Header from '@/components/ui/header';
import Statistic from '../layout/statistic/page';
import Estimation from '../layout/estimation/page';
import Insight from '../layout/insight/page';
import Summary from '../layout/summary/page';
import UploadPage from '../components/upload-page/page';

export default function Dashboard() {
  return (
    <div className='flex flex-col py-6 px-40'
      style={{ backgroundImage: "url('/padang.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <Header />
      <h1 className='mt-16 m-4 font-bold text-2xl'></h1>
      <div className='m-2'>
        <div className="w-full flex flex-row rounded-xl border shadow-sm">

          <Summary title={"XXX total produk terjual dengan omset Rp. XXXXXX "} />
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
        <UploadPage />
      </div>

    </div>


  );
}

