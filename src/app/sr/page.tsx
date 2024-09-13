'use client'
import { useEffect } from 'react';
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import exerciseThumb from '@public/image/exercise_thumb.jpg'
import foodThumb from '@public/image/food_thumb.jpg'
import { Navigation } from "@/components/navigation";
import { InfoCard } from '@/components/infoCard';
import { IContent, isVideo, isCard, IVideo } from '@/interface/info';
import { INavi } from '@/interface/navi';
import Link from 'next/link';
import CaseTile from '@/components/article';

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <div className='grid grid-cols-4 gap-4 w-[920px] mx-auto'>
      <div className='col-span-1'>
        <CaseTile img="/image/sr/sr1.jpg" />
      </div>
      <div className='col-span-1'>
        <CaseTile img="/image/sr/sr3.jpg" />
      </div>
      <div className='col-span-2'>
        <CaseTile img="/image/sr/sr2.jpg" />
      </div>
      <div className='col-span-2'>
        <CaseTile img="/image/sr/sr4.jpg" />
      </div>
      <div className='col-span-1'>
        <CaseTile img="/image/sr/sr1.jpg" />
      </div>
      <div className='col-span-1'>
        <CaseTile img="/image/sr/sr3.jpg" />
      </div>
      <div className='col-span-2'>
        <CaseTile img="/image/sr/sr2.jpg" />
      </div>
      <div className='col-span-2'>
        <CaseTile img="/image/sr/sr4.jpg" />
      </div>
    </div >
  )
}