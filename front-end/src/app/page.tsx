/* eslint-disable @next/next/no-img-element */
"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/cv')
  }, [router])

  return null
}

export default Page;
