"use client";
import {usePathname} from 'next/navigation';
import style from './qnA.module.css';
import BackButton from '@/app/_component/BackButton';
import Image from 'next/image';


export default function QnA() {
    const pathname = usePathname();
    const parts = pathname.split("/"); 
    const title = parts[parts.length - 2];

    console.log(title);

    return (
    <div className={style.main}>
         <div className={style.header}>
                    <BackButton/>
                    <h1>2024 Global Marketing Meeting <br/>Q&A Session</h1>
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
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe2bKFFAkQu5QNsjTkq3awkI3yt_J3vXXVOeElbjW9VKkDmfQ/viewform?embedded=true" width="640" height="585" >로드 중…</iframe>
                </div>
    </div>
    )}