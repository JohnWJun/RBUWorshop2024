"use client";
import {usePathname} from 'next/navigation';
import {ChangeEventHandler, FormEventHandler, useRef, useState} from "react";
import style from '@/app/entertainment/entertainment.module.css';
import BackButton from '@/app/_component/BackButton';
import Image from 'next/image';
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";
import Link from "next/link";
import MissionSuccessPage from '@/app/_component/MissionSuccessPage';

export default function Mission1() {
   
    const [key1, setKey1] = useState('');

    
    const onChangeKey1 : ChangeEventHandler<HTMLInputElement> =(e) => {
        setKey1(e.target.value);
    }
    
    return (<>
        <div className={style.main}>
            <div className={style.mission}>
            
                <h3>틱톡 챌린지</h3>
                <h5>도전하고자 하는 댄스 영상을 선택, 제출하기 버튼을 눌러 OneDrive에 업로드 후 진행요원에게 도전 성공 여부를 심사받으세요.</h5>
                <br/>
                <br/>
                <form>
                <button>
                <Link href='https://parkafm.sharepoint.com/:f:/r/sites/RBU/Shared%20Documents/General/2022%20RBU%20Workshop/2022%20%EB%A0%88%ED%81%AC%EB%A0%88%EC%9D%B4%EC%85%98/%ED%8B%B1%ED%86%A1%EC%B1%8C%EB%A6%B0%EC%A7%80?csf=1&web=1&e=DNRFK4'>제출하기</Link>
                </button>
               </form>
               <div className={style.passcode}>
                <input name={"passcode"} value={key1} onChange={onChangeKey1} placeholder={'패스코드를 입력하세요'}></input>
            
               </div>
               <br/>
               <br/>
               <h5>틱톡 챌린지 Option 1</h5>
               <div  className={style.videoBox}>
               
               <iframe width="560" height="315" src="https://www.youtube.com/embed/xvGDS6EovKY?si=QOGQoL5Dik72pW1G" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
               </div>
               <br/>
               <br/>
               <h5>틱톡 챌린지 Option 2</h5>
                <div  className={style.videoBox}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/iP3IlzVNVws?si=atU6EsjJnx1DrrXt" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
               </div>
               <br/>
               <br/>
               <h5>틱톡 챌린지 보너스 미션!(40점)</h5>
                <div  className={style.videoBox}>
                <br/>
               <br/>
                <form>
                <button>
                <Link href="https://youtube.com/shorts/mZPkoLfdGQg?si=alLQv9GSy-dDQPyj">
                    미션 확인하기
                </Link>
                </button>
                </form>
               </div>
            {key1 === 'jsx20453@' ? (<MissionSuccessPage mission='틱톡챌린지' point={50} />) : null}
            </div>
        </div>
        </>
    );
}