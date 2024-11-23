import { UploadForm } from "@/components/page/upload-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UploadPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Upload Media</h1>
        <Link href="/media">
          <Button variant="outline">Back to Gallery</Button>
        </Link>
      </div>
      <UploadForm />
    </div>
  )
}

