"use client";
import {usePathname} from 'next/navigation';
import {ChangeEventHandler, FormEventHandler, useRef, useState} from "react";
import style from '@/app/entertainment/entertainment.module.css';
import BackButton from '@/app/_component/BackButton';
import Image from 'next/image';
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";
import Link from "next/link";
import MissionSuccessPage from '@/app/_component/MissionSuccessPage';

export default function Mission4() {
   
    const [key1, setKey1] = useState('');

    
    const onChangeKey1 : ChangeEventHandler<HTMLInputElement> =(e) => {
        setKey1(e.target.value);
    }
    
    return (<>
        <div className={style.main}>
            <div className={style.mission}>
            
                <h3>뮤직왕 첼린지</h3>
                <h5>제한시간안에 TTS가 읽어주는 가사만 듣고 노래제목을 최대한 많이 맞춰주세요. (문제당 5점)</h5>
               
               <div className={style.passcode}>
                <input name={"passcode"} value={key1} onChange={onChangeKey1} placeholder={'패스코드를 입력하세요'}></input>
            
               </div>
                {key1 === 'sdfsdfbe2256**1' ? (<MissionSuccessPage mission='뮤직왕첼린지' point={5} />) : null}
                {key1 === 'sdfsdfbe2256**2' ? (<MissionSuccessPage mission='뮤직왕첼린지' point={10} />) : null}
                {key1 === 'sdfsdfbe2256**3' ? (<MissionSuccessPage mission='뮤직왕첼린지' point={15} />) : null}
                {key1 === 'sdfsdfbe2256**4' ? (<MissionSuccessPage mission='뮤직왕첼린지' point={20} />) : null}
                {key1 === 'sdfsdfbe2256**5' ? (<MissionSuccessPage mission='뮤직왕첼린지' point={25} />) : null}
                {key1 === 'sdfsdfbe2256**6' ? (<MissionSuccessPage mission='뮤직왕첼린지' point={30} />) : null}
                {key1 === 'sdfsdfbe2256**7' ? (<MissionSuccessPage mission='뮤직왕첼린지' point={35} />) : null}
                {/* {key1 === 'sdfsdfbe2256**8' ? (<MissionSuccessPage mission='뮤직왕첼린지' point={40} />) : null} */}
           
         </div>
        </div>
        </>
    );
}