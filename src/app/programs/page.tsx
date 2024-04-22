
"use client";
import style from './programs.module.css';
import Link from 'next/link';
import { useState } from 'react';
import BackButton from '../_component/BackButton';
import Image from 'next/image';

export default function Programs() {
    return (
    <>
       <div className={style.main}>
        
            <div className={style.header}>
            <BackButton/>
                <h1>2024 Global Marketing Meeting <br/>Program & Schedule</h1>
                <Image
            className={style.logo}
            src="/parksystemsLogo.svg"
            alt="Park Logo"
            width={180}
            height={37}
            priority
            />
            </div>
            
            <div className={style.scheduleContainer}>
            <div>
                <button>
                    <Link href={"https://parkafm-my.sharepoint.com/:b:/g/personal/cherie_jung_parksystems_com/EeGpNV68lb9ClNsZP8W-ANoBdG9hmu0uw6Dfj-3DoZR9iA?e=rwyaUo"}>Download</Link>
                </button>
            </div>
               <h2> Day 1 </h2>
            <div className={style.day}>
            <a href={'/GMM2024_Timetable_Fin-1.jpg'}>
                <Image
                className={style.image}
                src="/GMM2024_Timetable_Fin-1.jpg"
                alt="timeTable1"
                width={600}
                height={800}
                priority
                />
            </a>
            <a href={'/GMM2024_Timetable_Fin-2.jpg'}>
                <Image
                className={style.image}
                src="/GMM2024_Timetable_Fin-2.jpg"
                alt="timeTable1"
                width={600}
                height={800}
                priority
                />
            </a>
            </div>
            </div>

            <div className={style.scheduleContainer}>
               <h2> Day 2 </h2>
            <div className={style.day}>
            <a href={'/GMM2024_Timetable_Fin-3.jpg'}>
            <Image
            className={style.image}
            src="/GMM2024_Timetable_Fin-3.jpg"
            alt="timeTable1"
            width={600}
            height={800}
            priority
            />
            </a>
            <a href={'/GMM2024_Timetable_Fin-4.jpg'}>
            <Image
            className={style.image}
            src="/GMM2024_Timetable_Fin-4.jpg"
            alt="timeTable1"
            width={600}
            height={800}
            priority
            />
            </a>
            </div>
            </div>

            <div className={style.scheduleContainer}>
               <h2> Day 3 </h2>
            <div className={style.day}>
            <a href={'/GMM2024_Timetable_Fin-5.jpg'}>
            <Image
            className={style.image}
            src="/GMM2024_Timetable_Fin-5.jpg"
            alt="timeTable1"
            width={600}
            height={800}
            priority
            />
            </a>
            </div>
            </div>
        
        </div>
    </>
    )}