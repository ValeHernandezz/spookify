import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const formData = await request.formData()
  const file = formData.get('file') as Blob

  if (!file) {
    return NextResponse.json({ data: null, error: 'No file provided' })
  }

  const uploadData = new FormData()
  uploadData.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET || '')
  uploadData.append('timestamp', `${Date.now() / 1000}`)
  uploadData.append('api_key', process.env.CLOUDINARY_API_KEY || '')
  uploadData.append('file', file)

  const response = await fetch(
    'https://api.cloudinary.com/v1_1/djslvlh8h/image/upload',
    {
      method: 'POST',
      body: uploadData,
    }
  )

  const { public_id, width, height, created_at, url, original_filename } =
    await response.json()

  const data = { public_id, width, height, created_at, url, original_filename }

  return NextResponse.json({ data })
}
