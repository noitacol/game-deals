import { updateCacheFromWebhook } from '@/lib/cache'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { event, data } = await req.json()
  
  await updateCacheFromWebhook(event, data)
  
  return NextResponse.json({ success: true })
} 