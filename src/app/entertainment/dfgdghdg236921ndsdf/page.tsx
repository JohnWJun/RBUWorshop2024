"use client";
import {usePathname} from 'next/navigation';
import {ChangeEventHandler, FormEventHandler, useRef, useState} from "react";
import style from '@/app/entertainment/entertainment.module.css';
import BackButton from '@/app/_component/BackButton';
import Image from 'next/image';
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";
import Link from "next/link";
import MissionSuccessPage from '@/app/_component/MissionSuccessPage';

export default function Mission2() {
   
    const [key1, setKey1] = useState('');

    
    const onChangeKey1 : ChangeEventHandler<HTMLInputElement> =(e) => {
        setKey1(e.target.value);
    }
    
    return (<>
        <div className={style.main}>
            <div className={style.mission}>
            
                <h3>도플갱어 챌린지</h3>
                <h5>제한시간안에 주어지는 사진의 인물을 보고 영화 또는 드라마제목을 최대한 많이 맞춰주세요. (문제당 5점) </h5>
               
               <div className={style.passcode}>
                <input name={"passcode"} value={key1} onChange={onChangeKey1} placeholder={'패스코드를 입력하세요'}></input>
            
               </div>
            {key1 === 'bvsdfg3367%1' ? (<MissionSuccessPage mission='도플갱어 챌린지' point={5} />) : null}
            {key1 === 'bvsdfg3367%2' ? (<MissionSuccessPage mission='도플갱어 챌린지' point={10} />) : null}
            {key1 === 'bvsdfg3367%3' ? (<MissionSuccessPage mission='도플갱어 챌린지' point={15} />) : null}
            {key1 === 'bvsdfg3367%4' ? (<MissionSuccessPage mission='도플갱어 챌린지' point={20} />) : null}
            {key1 === 'bvsdfg3367%5' ? (<MissionSuccessPage mission='도플갱어 챌린지' point={25} />) : null}
            {key1 === 'bvsdfg3367%6' ? (<MissionSuccessPage mission='도플갱어 챌린지' point={30} />) : null}
            {key1 === 'bvsdfg3367%7' ? (<MissionSuccessPage mission='도플갱어 챌린지' point={35} />) : null}
            {key1 === 'bvsdfg3367%8' ? (<MissionSuccessPage mission='도플갱어 챌린지' point={40} />) : null}
            {key1 === 'bvsdfg3367%9' ? (<MissionSuccessPage mission='도플갱어 챌린지' point={45} />) : null}
            {key1 === 'bvsdfg3367%10' ? (<MissionSuccessPage mission='도플갱어 챌린지' point={50} />) : null}
            {key1 === 'bvsdfg3367%a' ? (<MissionSuccessPage mission='도플갱어 챌린지' point={55} />) : null}
            {key1 === 'bvsdfg3367%b' ? (<MissionSuccessPage mission='도플갱어 챌린지' point={60} />) : null}
            {key1 === 'bvsdfg3367%c' ? (<MissionSuccessPage mission='도플갱어 챌린지' point={65} />) : null}
            {key1 === 'bvsdfg3367%d' ? (<MissionSuccessPage mission='도플갱어 챌린지' point={70} />) : null}
            
            </div>
        </div>
        </>
    );
}