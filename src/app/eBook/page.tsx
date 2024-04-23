"use client";
import style from '@/app/eBook/eBook.module.css';
import Link from 'next/link';
import { useState } from 'react';
import BackButton from '@/app/_component/BackButton';
import Image from 'next/image';

export default function Ebook() {

   
    
    return (
    <div className={style.main}>
        
        <div className={style.header}>
        <BackButton/>
            <h1>Keynote Speech & Education</h1>
            <Image
          className={style.logo}
          src="/parksystemsLogo.svg"
          alt="Park Logo"
          width={180}
          height={37}
          priority
        />
        </div>
        
        <div className={style.body}>
            {/* instruction */}
            <div className={style.howToUse}>
                *Please click the each title to download the eBook(PPTs)
            </div>
            &nbsp;
            
            <div className={style.day1}>
                <div className={style.dayHeader}>
                
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/EYXF9ynyJKJJg_G7JqIh9jIBrZgM9-UE74WfbKtSPIfMGA?e=40Qwvd'}><h4>Key Note Speech</h4></Link>
                    </button>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/EYXF9ynyJKJJg_G7JqIh9jIBrZgM9-UE74WfbKtSPIfMGA?e=40Qwvd'}><h4>초청 강의</h4></Link>
                    </button>

            </div>
            
            
            </div>
        </div>
        
    </div>)}