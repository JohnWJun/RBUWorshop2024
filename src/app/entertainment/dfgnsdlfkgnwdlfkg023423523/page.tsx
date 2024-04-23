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

    const answer1 = '1';
    const answer2 = '2';
    const answer3 = '3';
    const answer4 = '4';
    const answer5 = '5';

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
                <h5>아래의 퀴즈를 팀원들과 상의하여 풀고 모두 맞추면 미션 성공!</h5>
               
                <form className={style.modalForm} onSubmit={onSubmit}>
                
               <br/>
               <br/>
               <h5>Quiz 1</h5>
               <div  className={style.videoBox}>
                <h5>퀴즈퀴즈퀴즈퀴즈퀴즈 정답은?</h5>
               <div className={style.passcode}>
                <input name={"Q1"} value={key1} onChange={onChangeKey1} placeholder={'정답을 입력하세요'}></input>
            
               </div>
               </div>
               <br/>
               <br/>
               <h5>Quiz 2</h5>
                <div  className={style.videoBox}>
                <h5>2 퀴즈퀴즈퀴즈퀴즈퀴즈 정답은?</h5>
                <div className={style.passcode}>
                <input name={"Q2"} value={key2} onChange={onChangeKey2} placeholder={'정답을 입력하세요'}></input>
            
               </div>
               </div>
               <br/>
               <br/>
               <h5>Quiz 3</h5>
                <div  className={style.videoBox}>
                <h5>3 퀴즈퀴즈퀴즈퀴즈퀴즈 정답은?</h5>
                <div className={style.passcode}>
                <input name={"Q3"} value={key3} onChange={onChangeKey3} placeholder={'정답을 입력하세요'}></input>
            
               </div>
                
               </div>
               <br/>
               <br/>
               <h5>Quiz 4</h5>
               <div  className={style.videoBox}>
               <h5>4 퀴즈퀴즈퀴즈퀴즈퀴즈 정답은?</h5>
               <div className={style.passcode}>
                <input name={"Q4"} value={key4} onChange={onChangeKey4} placeholder={'정답을 입력하세요'}></input>
            
               </div>
               
               </div>
               <br/>
               <br/>
               <h5>Quiz 5</h5>
                <div  className={style.videoBox}>
                <h5>5 퀴즈퀴즈퀴즈퀴즈퀴즈 정답은?</h5>
                <div className={style.passcode}>
                <input name={"Q5"} value={key5} onChange={onChangeKey5} placeholder={'정답을 입력하세요'}></input>
            
               </div>
                
               </div>
               
               <button type={"submit"} className={style.actionButton} disabled={!key1||!key2||!key3||!key4||!key5}>제출하기</button>
               </form>
              
              
            {isCorrect ? (<MissionSuccessPage mission='퀴즈첼린지' point={50} />) : null}
            {isInCorrect ? (<MissionFailPage setIsInCorrect={setIsInCorrect}/>): null}
            </div>
        </div>
        </>
    );
}