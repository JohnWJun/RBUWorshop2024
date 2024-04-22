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
            
                <h3>틱톡 첼린지</h3>
                <h5>도전하고자 하는 댄스 영상을 선택, 인스타그램에 업로드 후 진행요원에게 도전 성공 여부를 심사받으세요.</h5>
               
               <div className={style.passcode}>
                <input name={"passcode"} value={key1} onChange={onChangeKey1} placeholder={'패스코드를 입력하세요'}></input>
            
               </div>
               <br/>
               <br/>
               <h5>틱톡 첼린지 Option 1</h5>
               <div  className={style.videoBox}>
               
               <iframe width="560" height="315" src="https://www.youtube.com/embed/mEGsNu-aNXI?si=eJgTi1dSvhqjx9RP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
               </div>
               <br/>
               <br/>
               <h5>틱톡 첼린지 Option 2</h5>
                <div  className={style.videoBox}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/mEGsNu-aNXI?si=eJgTi1dSvhqjx9RP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            
               </div>
               <br/>
               <br/>
               <h5>틱톡 첼린지 Option 3</h5>
                <div  className={style.videoBox}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/mEGsNu-aNXI?si=eJgTi1dSvhqjx9RP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
               
               </div>
            {key1 === 'jsx20453@' ? (<MissionSuccessPage mission='틱톡첼린지' point={50} />) : null}
            </div>
        </div>
        </>
    );
}