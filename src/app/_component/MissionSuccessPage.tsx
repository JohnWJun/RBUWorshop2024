"use client";
// Importing necessary libraries
import { useState } from 'react';
import style from '@/app/_component/missionSuccessPage.module.css';
import {useRouter} from "next/navigation";
import Image from 'next/image';

type Props ={
    mission: string,
    point: number
}

export default function MissionSuccessPage({mission,point}:Props){
    const router = useRouter();
    const [page, setPage] = useState(1);

    const missionName = mission;
    if(missionName){
        localStorage.setItem(mission, String(point));
    }
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

                    <h1>
                        {mission} 미션 클리어!
                    </h1>
                    <div className={style.point}>{point}</div>
                    <h2>
                         <br/>포인트 획득!<br/>
                    </h2>
                    <h2>
                         <br/>팀장님께서는 해당 페이지를 스크린 캡쳐하여 저장해주세요.<br/>
                    </h2>
                    </div>
                    </div>
        </div>
    )
}