"use client";
import {usePathname} from 'next/navigation';
import {ChangeEventHandler, FormEventHandler, useRef, useState} from "react";
import style from '@/app/entertainment/entertainment.module.css';
import BackButton from '@/app/_component/BackButton';
import Image from 'next/image';
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";
import Link from "next/link";
import MissionSuccessPage from '@/app/_component/MissionSuccessPage';

export default function Mission6() {
   
    const [key1, setKey1] = useState('');

    
    const onChangeKey1 : ChangeEventHandler<HTMLInputElement> =(e) => {
        setKey1(e.target.value);
    }
    
    return (<>
        <div className={style.main}>
            <div className={style.mission}>
            
                <h3>RBU 퍼즐첼린지</h3>
                <h5>RBU 각부서의 업무에 따른 Journey Map을 순서에 따라 알맞게 위치시키고 해당 부서들의 역할과 업무를 설명할 수 있다면 미션 성공!</h5>
               
               <div className={style.passcode}>
                <input name={"passcode"} value={key1} onChange={onChangeKey1} placeholder={'패스코드를 입력하세요'}></input>
            
               </div>
               
            {key1 === 'cgfevasdw##' ? (<MissionSuccessPage mission='퍼즐첼린지' point={80} />) : null}
            </div>
        </div>
        </>
    );
}