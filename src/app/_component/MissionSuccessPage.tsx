"use client";
// Importing necessary libraries
import { useEffect, useState } from 'react';
import style from '@/app/_component/missionSuccessPage.module.css';
import {useRouter} from "next/navigation";
import Image from 'next/image';

type Props ={
    mission: string,
    point: number
}

export default function MissionSuccessPage({mission,point}:Props){
    const router = useRouter();
    
    useEffect(() => {
        localStorage.setItem(mission, String(point));
    }, [mission, point]);

    const onClickBack = () => {
        router.replace('/');
    };
   
    

    return(
        <div className={style.modalBackground}>
            <div className={style.modal}>
                <div className={style.modalHeader}>
                    
                    <button onClick={onClickBack} className={style.closeButton}>
                    <svg width={24} viewBox="0 0 24 24" aria-hidden="true"
                        className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03">
                        <g>
                            <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
                        </g>
                    </svg>
                    </button>
                </div>
                    <div className={style.modalBody}>
                    <Image
                    src="/parky.svg"
                    alt="parky"
                    width={80}
                    height={80}
                    priority
                    />  
                    <h1>
                        {mission} 미션 클리어!
                    </h1>
                    <div className={style.point}>{point}</div>
                    <h2>
                         <br/>포인트 획득!<br/>
                    </h2>
                    <h2>
                         <br/>Team Building 메뉴에서 획득한 점수를 확인하세요.<br/>
                    </h2>
                    </div>
                    </div>
        </div>
    )
}