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
        <CaseTile img="/image/fashion/iu.jpeg" descriptions={['상의 : #로씨로씨 Crochet Knit Bolero / 5만 9,000원', '원피스 : #이자벨마랑 V넥 자수 드레스 / 244만 원']} />
      </div>
      <div className='col-span-2'>
        <CaseTile img="/image/fashion/ksj.jpg" descriptions={['✔#가방 - 르 로조 XS 탑 핸들백 / 99만 원',
          '✔#자켓 - 롱샴 24FW 기모노 재킷 / 91만 원']} />
      </div>
      <div className='col-span-1'>
        <CaseTile img="/image/fashion/iu.jpeg" descriptions={['상의 : #로씨로씨 Crochet Knit Bolero / 5만 9,000원', '원피스 : #이자벨마랑 V넥 자수 드레스 / 244만 원']} />
      </div>
      <div className='col-span-1'>
        <CaseTile img="/image/fashion/iu.jpeg" descriptions={['상의 : #로씨로씨 Crochet Knit Bolero / 5만 9,000원', '원피스 : #이자벨마랑 V넥 자수 드레스 / 244만 원']} />
      </div>
      <div className='col-span-2'>
        <CaseTile img="/image/fashion/ksj.jpg" descriptions={['✔#가방 - 르 로조 XS 탑 핸들백 / 99만 원',
          '✔#자켓 - 롱샴 24FW 기모노 재킷 / 91만 원']} />      </div>
    </div >
  )
}