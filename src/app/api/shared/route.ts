import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const formData = await request.formData()
  const file = formData.get('file') as Blob

  if (!file) {
    return NextResponse.json({ data: null, error: 'No file provided' })
  }

  return NextResponse.json({ data:null })
}
