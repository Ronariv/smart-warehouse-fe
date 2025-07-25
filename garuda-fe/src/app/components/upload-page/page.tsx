'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from '@/components/ui/label'

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)

  const handleUpload = async () => {
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)

    // TODO change to BE api
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })

    const result = await res.json()
    alert(result.message)
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
    <Dialog>
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