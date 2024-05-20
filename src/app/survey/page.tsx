"use client";
import {usePathname} from 'next/navigation';
import style from './vote.module.css';
import BackButton from '@/app/_component/BackButton';
import Image from 'next/image';


export default function Vote() {
    const pathname = usePathname();
    const parts = pathname.split("/"); 
    const title = parts[parts.length - 2];

    console.log(title);

    return (
    <div className={style.main}>
         <div className={style.header}>
                    <BackButton/>
                    <h1>2024 RBU Workshop <br/>Survey</h1>
                        <Image
                    className={style.logo}
                    src="/parksystemsLogo.svg"
                    alt="Park Logo"
                    width={180}
                    height={37}
                    priority
                    />
                    </div>
                    
                <div className={style.iframeBox}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSebkUws2s2OLX_epx2KPMZod2TmSnEgEzTgV_7SIGpJ2Nn8fQ/viewform?embedded=true" width="640" height="1800" >Loading…</iframe></div>
    </div>
    )}