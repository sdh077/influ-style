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
    <div className='grid grid-cols-4 gap-4 mx-32'>
      <div className='col-span-2'>
        <CaseTile img="/image/place/comma1.jpeg" />
      </div>
      <div className='col-span-2'>
        <CaseTile img="/image/place/pky.jpg" />
      </div>
      <div className='col-span-1'>
        <CaseTile img="/image/place/sddler1.jpeg" />
      </div>
      <div className='col-span-1'>
        <CaseTile img="/image/place/sddler2.jpeg" />
      </div>
      <div className='col-span-2'>
        <CaseTile img="/image/place/tenone1.jpg" />
      </div>
    </div >
  )
}