'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from '@/components/ui/label'
import { useUploadStore } from '@/store/useUploadStore'
import { useRouter } from 'next/navigation'

export default function UploadPage() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null)
  const setUploadedData = useUploadStore((state) => state.setUploadedData)
  const router = useRouter()
  const handleUpload = async () => {

    if (!file) return

    const formData = new FormData()
    formData.append('file_penjualan', file)

    // TODO change to BE api
    const res = await fetch('http://127.0.0.1:8080/api/insight/' + 'sales', {
      method: 'POST',
      body: formData,
    })

    const data = await res.json();

    setUploadedData(data)

    // const result = await res.json()
    // alert(result.message)
    // router.push('/dashboard')
    setOpen(false);

    console.log(JSON.stringify(data, null, 2))
  
  }

  return (
    // <div className="flex">
    //   <Input
    //     type='file'
    //     onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
    //   <Button onClick={handleUpload}>
    //     Upload File
    //   </Button>
    // </div>
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Upload File</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload your sales report here</DialogTitle>
          <DialogDescription>
            Pastikan anda mencantumkan nama produk, jumlah terjual dan harga produk
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Label htmlFor="file">Pilih file</Label>
          <Input
            id="file"
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
          <Button onClick={handleUpload} disabled={!file}>
            Upload File
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}