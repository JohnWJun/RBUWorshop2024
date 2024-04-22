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


    const onClickBack = () => {
        router.back();
    };
   
    

    return(
        <div className={style.modalBackground}>
            <div className={style.modal}>
                <div className={style.modalHeader}>
                    <button onClick={onClickBack} className={style.closeButton}>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1024 1024"><path fill="#000000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
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
                    </div>
                    </div>
        </div>
    )
}