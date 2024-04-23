"use client";
// Importing necessary libraries
import { useState } from 'react';
import style from '@/app/_component/missionSuccessPage.module.css';
import {useRouter} from "next/navigation";
import Image from 'next/image';

interface Props {
    setIsInCorrect: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  export default function MissionFailPage({ setIsInCorrect }: Props) {
    const router = useRouter();
    const [page, setPage] = useState(1);


    const onClickBack = () => {
        setIsInCorrect(false);
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
                        미션 실패!
                    </h1>
                
                    <h2>
                         <br/>재도전하세요!<br/>
                    </h2>
                    </div>
                    </div>
        </div>
    )
}