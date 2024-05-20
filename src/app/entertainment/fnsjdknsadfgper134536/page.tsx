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
            
                <h3>포토제닉 트릭샷 성공하기</h3>
                <h5>도전하고자 하는 사진을 선택, 제출하기 버튼을 눌러 OneDrive에 업로드 후 진행요원에게 도전 성공 여부를 심사받으세요.</h5>
                <br/>
                <br/>
                <form>
                <button>
                <Link href='https://parkafm-my.sharepoint.com/:f:/g/personal/john_jun_parksystems_com/EgocRSWOIK1OqGeI4M0LFzQB28BTMasF8CwXgcn8sYNBpg?e=XLa8sn'>제출하기</Link>
                </button>
               </form>
               <div className={style.passcode}>
                <input name={"passcode"} value={key1} onChange={onChangeKey1} placeholder={'패스코드를 입력하세요'}></input>
               </div>
               <br/>
               <br/>
               
               
               <h5>트릭샷 첼린지 Option 1 (보너스 점수 +20)</h5>
               <div  className={style.videoBox}>
               <Image
                    src="/trickShot1.jpg"
                    alt="trick shot 1"
                    width={300}
                    height={400}
                    priority
                    />
               </div>
              
               <h5>트릭샷 첼린지 Option 2 (보너스 점수 +20)</h5>
                <div  className={style.videoBox}>
                <Image
                    src="/trickShot2.jpg"
                    alt="trick shot 2"
                    width={300}
                    height={400}
                    priority
                    />
               </div>
               <br/>
               <br/>
               <h5>트릭샷 첼린지 Option 3 (보너스 점수 +10)</h5>
                <div  className={style.videoBox}>
                <Image
                    src="/trickShot3.jpg"
                    alt="trick shot 3"
                    width={300}
                    height={400}
                    priority
                    />
               </div>
               <br/>
               <br/>
               <h5>트릭샷 첼린지 Option 4 (보너스 점수 +20)</h5>
                <div  className={style.videoBox}>
                <Image
                    src="/trickShot4.jpg"
                    alt="trick shot 4"
                    width={300}
                    height={400}
                    priority
                    />
               </div>
               <br/>
               <br/>
               <h5>트릭샷 첼린지 Option 5 (보너스 점수 +0)</h5>
                <div  className={style.videoBox}>
                <Image
                    src="/trickShot5.jpg"
                    alt="trick shot 5"
                    width={300}
                    height={400}
                    priority
                    />
               </div>
               <br/>
               <br/>
               <h5>트릭샷 첼린지 Option 6</h5>
               <h4>RBU 글자 만들기!</h4>
            
            
                {key1 === 'cvjnmyjw54$$@30' ? (<MissionSuccessPage mission='트릭샷첼린지' point={30} />) : null}
                {key1 === 'cvjnmyjw54$$@40' ? (<MissionSuccessPage mission='트릭샷첼린지' point={40} />) : null}
                {key1 === 'cvjnmyjw54$$@50' ? (<MissionSuccessPage mission='트릭샷첼린지' point={50} />) : null}
                
            </div>
        </div>
        </>
    );
}