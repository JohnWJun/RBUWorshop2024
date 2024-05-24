"use client";
import {usePathname} from 'next/navigation';
import {ChangeEventHandler, FormEventHandler, useRef, useState} from "react";
import style from '@/app/entertainment/entertainment.module.css';
import BackButton from '@/app/_component/BackButton';
import Image from 'next/image';
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";
import Link from "next/link";
import MissionSuccessPage from '@/app/_component/MissionSuccessPage';
import MissionFailPage from '@/app/_component/MissionFail';

export default function Mission3() {
   
    const [key1, setKey1] = useState('');
    const [key2, setKey2] = useState('');
    const [key3, setKey3] = useState('');
    const [key4, setKey4] = useState('');
    const [key5, setKey5] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [isInCorrect, setIsInCorrect] = useState(false);

    const answer1 = '2';
    const answer2 = '4';
    const answer3 = '3';
    const answer4 = '2';
    const answer5 = '2';

    const onChangeKey1 : ChangeEventHandler<HTMLInputElement> =(e) => {
        setKey1(e.target.value);
    }
    const onChangeKey2 : ChangeEventHandler<HTMLInputElement> =(e) => {
        setKey2(e.target.value);
    }
    const onChangeKey3 : ChangeEventHandler<HTMLInputElement> =(e) => {
        setKey3(e.target.value);
    }
    const onChangeKey4 : ChangeEventHandler<HTMLInputElement> =(e) => {
        setKey4(e.target.value);
    }
    const onChangeKey5 : ChangeEventHandler<HTMLInputElement> =(e) => {
        setKey5(e.target.value);
    }

    const onSubmit: FormEventHandler = async (e) => {
        e.preventDefault();
        // setIsInCorrect(false);

        if(key1 === answer1 && key2 === answer2 && key3 === answer3 && key4 === answer4 && key5 === answer5){
            setIsCorrect(true)
        } else {setIsInCorrect(true)}
        
    }
    return (<>
        <div className={style.main}>
            <div className={style.mission}>
            
                <h3>Quiz 맞추기</h3>
                <h5>아래의 퀴즈를 팀원들과 상의하여 풀고 모두 맞추면 미션 성공! <br/>번호로 정답을 기입해주세요.</h5>
               
                <form className={style.modalForm} onSubmit={onSubmit}>
                
               <br/>
               <br/>
               <h5>Quiz 1</h5>
               <div  className={style.videoBox}>
               <h5>1. 다음중 전세계 AFM및 나노 계측 장비 시장에서의 사업활동의 목표로 언급되었던 것을 고르시오</h5>
                <h5>1.제품 인지도 상승 <br/>2.신시장 개척 <br/>3.신항로의 개척 <br/>4.매출 500억 달성 </h5>
                <h5></h5>
               <div className={style.passcode}>
                <input name={"Q1"} value={key1} onChange={onChangeKey1} placeholder={'정답을 입력하세요'}></input>
            
               </div>
               </div>
               <br/>
               <br/>
               <h5>Quiz 2</h5>
                <div  className={style.videoBox}>
                <h5>2 2024년 연구장비사업부문의 목표 매출로 올바른 것은?</h5>
                <h5>1. 1000억원 <br/>2.300억원 <br/>3.500원 <br/>4.610억원 <br/></h5>
                <div className={style.passcode}>
                <input name={"Q2"} value={key2} onChange={onChangeKey2} placeholder={'정답을 입력하세요'}></input>
            
               </div>
               </div>
               <br/>
               <br/>
               <h5>Quiz 3</h5>
                <div  className={style.videoBox}>
                <h5>3 (첨단 연구장비는 _________를 여는 핵심열쇠) 문장의 빈칸을 완성 하시오</h5>
                <h5>1.차세대 나노기술의 미래 <br/>2.차세대 연구기술의 미래 <br/>3.차세대 과학기술의 미래 <br/>4. 차세대 우주기술의 미래 </h5>
                <div className={style.passcode}>
                <input name={"Q3"} value={key3} onChange={onChangeKey3} placeholder={'정답을 입력하세요'}></input>
            
               </div>
                
               </div>
               <br/>
               <br/>
               <h5>Quiz 4</h5>
               <div  className={style.videoBox}>
               <h5>4. R&D 정부 지원은 지속적으로 증가한다?</h5>
               <h5>1.O 2.X</h5>
               <div className={style.passcode}>
                <input name={"Q4"} value={key4} onChange={onChangeKey4} placeholder={'정답을 입력하세요'}></input>
            
               </div>
               
               </div>
               <br/>
               <br/>
               <h5>Quiz 5</h5>
                <div  className={style.videoBox}>
                <h5>5. 다음중 연구장비 사업부 조직 미션 달성을 위협하는 Challenges/고민으로 언급되지 않은것은?</h5>
                <h5>1.기술 리더쉽 & 인지도 부족 <br/>2.전쟁 및 세계 정세 <br/>3.브루커 및 옥스포드를 포함한 경쟁사들 <br/>4.Opinion Leader들의 목소리 </h5>
                <div className={style.passcode}>
                <input name={"Q5"} value={key5} onChange={onChangeKey5} placeholder={'정답을 입력하세요'}></input>
            
               </div>
                
               </div>
               
               <button type={"submit"} className={style.actionButton} disabled={!key1||!key2||!key3||!key4||!key5}>제출하기</button>
               </form>
              
              
            {isCorrect ? (<MissionSuccessPage mission='퀴즈챌린지' point={50} />) : null}
            {isInCorrect ? (<MissionFailPage setIsInCorrect={setIsInCorrect}/>): null}
            </div>
        </div>
        </>
    );
}