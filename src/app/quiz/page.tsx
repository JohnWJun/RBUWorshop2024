"use client";
import {usePathname} from 'next/navigation';
import style from '@/app/eBook/[title]/quiz/quiz.module.css';
import BackButton from '@/app/_component/BackButton';
import Image from 'next/image';


export default function Quiz() {
  

    return (
    <div className={style.main}>
         <div className={style.header}>
                    <BackButton/>
                        <h1>Quiz</h1>
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
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSem8OfFqvNEWKk6zZ2C3C621vThc6qFEMP2wLnBmUK3oSL5rg/viewform?embedded=true" width="640" height="895">로드 중…</iframe>
                   </div>
            
        
    </div>
    )}