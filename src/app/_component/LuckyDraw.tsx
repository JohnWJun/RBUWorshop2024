"use client";
// Importing necessary libraries
import style from '@/app/_component/luckyDraw.module.css';
import Link from 'next/link';
import BackButton from '@/app/_component/BackButton';
import Image from 'next/image';

export default function LuckyDraw() {
  // State to store the winner
 

  return (
    <div className={style.main}>
      
        <div className={style.header}>
                   <BackButton/>
                   <h1>Lucky Draw</h1>
                       <Image
                       className={style.logo}
                       src="/parksystemsLogo.svg"
                       alt="Park Logo"
                       width={180}
                       height={37}
                       priority
                       />
       </div>
        <div className={style.center}>
          

        <h1>Lucky Draw <br/>Award Program</h1>
        </div>
      
      <button className={style.drawButton}>
        <Link href={'luckyDraw/roll'}>Draw Prize</Link></button>
      
    </div>
  );
};

