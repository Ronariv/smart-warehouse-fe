'use client'

import Header from '@/components/ui/header';
import Statistic from '../layout/statistic/page';
import Estimation from '../layout/estimation/page';
import Insight from '../layout/insight/page';
import InsightProducts from '../layout/product/page';
import Summary from '../layout/summary/page';
import UploadPage from '../components/upload-page/page';
import { useUploadStore } from '@/store/useUploadStore'

interface Stats {
  hari_paling_ramai: Date,
  jam_paling_ramai: number,
  rata_rata_nilai_penjualan_per_transaksi: number,
  rata_rata_penjualan_per_hari: number,
  top_10_highest_total_terjual: Product[],
  top_10_highest_total_terjual_exclude_bonus: Product[],
  top_10_lowest_total_terjual: Product[],
  top_3_omzet_per_bulan: MonthlyReport[],
  total_omzet: number,
  total_produk_terjual: number
}

interface Product {
  "Nama Produk": string,
  total_terjual: number
}

interface MonthlyReport {
  bulan: string,
  omzet: number,
  tahun: number
}

export default function Dashboard() {
  const data = useUploadStore((state) => state.uploadedData)
  const UPLOAD_FILE = "Tolong upload data penjualan toko"

  return (
    <div className='flex flex-col py-6 px-40'
      style={{ backgroundImage: "url('/padang.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <Header />
      <h1 className='mt-16 m-4 font-bold text-2xl'></h1>
      <div className='m-2'>
        <div className="w-full flex flex-row rounded-xl border shadow-sm">

          <Summary title={
            (data?.total_produk_terjual && data?.total_omzet)
              ? `${data.total_produk_terjual} total produk terjual dengan omset Rp. ${data.total_omzet}`
              : 'Data belum tersedia mohon tambahkan file report terlebih dahulu'
          } />
        </div>
      </div>
      <div className='flex flex-row mb-4'>
        <Insight
          title={
            (data?.top_3_omzet_per_bulan)
              ? "Omzet Terbanyak Per Bulan" : "Data tidak Tersedia"}
          desc={''}
          child={(data?.top_3_omzet_per_bulan)
            ? data.top_3_omzet_per_bulan : []} />
        <InsightProducts
          title={
            (data?.top_10_highest_total_terjual)
              ? "Total Produk Terjual Terbanyak" : "Data tidak Tersedia"}
          desc={''}
          child={(data?.top_10_highest_total_terjual)
            ? data.top_10_highest_total_terjual : []} />
        <InsightProducts
          title={
            (data?.top_10_lowest_total_terjual)
              ? "Total Produk Terjual Terdikit" : "Data tidak Tersedia"}
          desc={''}
          child={(data?.top_10_lowest_total_terjual)
            ? data.top_10_lowest_total_terjual : []} />
      </div>
      <div className='flex flex-row'>
        <Estimation
          bestDay={
            data?.hari_paling_ramai ? "Hari Terbaik " + data?.hari_paling_ramai : "Data tidak Tersedia"}
          avgTrans={
            data?.rata_rata_nilai_penjualan_per_transaksi ? "Rata Rata Penjualan" : "Data tidak Tersedia"}
          avgTransPerDay={
            data?.rata_rata_penjualan_per_hari ? "Rata Rata Penjualan Per Hari" : "Data tidak Tersedia"} />
        <Statistic />
      </div>
      {/* <div className='flex w-full flex-row'>
        <UploadPage />
      </div> */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

    </div>


  );
}

