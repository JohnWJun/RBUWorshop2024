"use client";
import {usePathname} from 'next/navigation';
import {ChangeEventHandler, FormEventHandler, useRef, useState} from "react";
import style from '@/app/entertainment/entertainment.module.css';
import BackButton from '@/app/_component/BackButton';
import Image from 'next/image';
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";
import Link from "next/link";
import MissionSuccessPage from '@/app/_component/MissionSuccessPage';

export default function Mission7() {

    const [key1, setKey1] = useState('');
    const [key2, setKey2] = useState('');
    const [key3, setKey3] = useState('');
    const [key4, setKey4] = useState('');
    const [key5, setKey5] = useState('');
    const [key6, setKey6] = useState('');
    const [key7, setKey7] = useState('');
    const [key8, setKey8] = useState('');
    const [key9, setKey9] = useState('');
    const [key10, setKey10] = useState('');
    const [key11, setKey11] = useState('');
    const [key12, setKey12] = useState('');
    const [key13, setKey13] = useState('');
    const [key14, setKey14] = useState('');
    const [key15, setKey15] = useState('');
    const [key16, setKey16] = useState('');
    const [key17, setKey17] = useState('');
    const [key18, setKey18] = useState('');
    const [key19, setKey19] = useState('');
    const [key20, setKey20] = useState('');
    const [key21, setKey21] = useState('');
    const [key22, setKey22] = useState('');
    const [key23, setKey23] = useState('');
    const [key24, setKey24] = useState('');
    const [key25, setKey25] = useState('');
    const [key26, setKey26] = useState('');
    const [key27, setKey27] = useState('');
    const [key28, setKey28] = useState('');
    const [key29, setKey29] = useState('');
    const [key30, setKey30] = useState('');
    const [key31, setKey31] = useState('');
    const [key32, setKey32] = useState('');
    const [key33, setKey33] = useState('');
    const [key34, setKey34] = useState('');
    const [key35, setKey35] = useState('');
    const [key36, setKey36] = useState('');
    const [key37, setKey37] = useState('');
    const [key38, setKey38] = useState('');
    const [key39, setKey39] = useState('');
    const [key40, setKey40] = useState('');
    const [key41, setKey41] = useState('');
    const [key42, setKey42] = useState('');
    const [key43, setKey43] = useState('');
    const [key44, setKey44] = useState('');
    const [key45, setKey45] = useState('');
    const [key46, setKey46] = useState('');
    const [key47, setKey47] = useState('');
    const [key48, setKey48] = useState('');
    const [key49, setKey49] = useState('');
    const [key50, setKey50] = useState('');
    const [key51, setKey51] = useState('');
    const [key52, setKey52] = useState('');
    const [key53, setKey53] = useState('');
    const [key54, setKey54] = useState('');
    const [key55, setKey55] = useState('');
    const [key56, setKey56] = useState('');
    const [key57, setKey57] = useState('');
    const [key58, setKey58] = useState('');
    const [key59, setKey59] = useState('');
    const [key60, setKey60] = useState('');

    const answer1 = 'D';
    const answer2 = 'R';
    const answer3 = 'I';
    const answer4 = 'V';
    const answer5 = 'E';
    const answer6 = 'E';
    const answer7 = 'Q';
    const answer8 = 'U';
    const answer9 = 'A';
    const answer10 = 'L';
    const answer11 = 'I';
    const answer12 = 'T';
    const answer13 = 'Y';
    const answer14 = 'B';
    const answer15 = 'U';
    const answer16 = 'C';
    const answer17 = 'O';
    const answer18 = 'N';
    const answer19 = 'D';
    const answer20 = 'U';
    const answer21 = 'C';
    const answer22 = 'T';
    const answer23 = 'I';
    const answer24 = 'V';
    const answer25 = 'E';
    const answer26 = 'P';
    const answer27 = 'V';
    const answer28 = 'A';
    const answer29 = 'C';
    const answer30 = 'U';
    const answer31 = 'U';
    const answer32 = 'M';
    const answer33 = 'P';
    const answer34 = 'E';
    const answer35 = 'M';
    const answer36 = 'A';
    const answer37 = 'I';
    const answer38 = 'L';
    const answer39 = 'S';
    const answer40 = 'L';
    const answer41 = 'D';
    const answer42 = 'N';
    const answer43 = 'A';
    const answer44 = 'T';
    const answer45 = 'T';
    const answer46 = 'R';
    const answer47 = 'A';
    const answer48 = 'C';
    const answer49 = 'T';
    const answer50 = 'R';
    const answer51 = 'A';
    const answer52 = 'T';
    const answer53 = 'E';
    const answer54 = 'C';
    const answer55 = 'A';
    const answer56 = 'F';
    const answer57 = 'M';
    
    const [success, setSuccess] = useState(false);
    
    const onChangeKey1: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey1(e.target.value.toUpperCase());
        if(key1 === answer1){
            var inputs = document.querySelectorAll("input")
            inputs[0].style.color = 'green';
        }
    }
    
    const onChangeKey2: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey2(e.target.value.toUpperCase());
    }
    
    const onChangeKey3: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey3(e.target.value.toUpperCase());
    }
    
    const onChangeKey4: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey4(e.target.value.toUpperCase());
    }
    
    const onChangeKey5: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey5(e.target.value.toUpperCase());
    }
    
    const onChangeKey6: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey6(e.target.value.toUpperCase());
    }
    
    const onChangeKey7: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey7(e.target.value.toUpperCase());
    }
    
    const onChangeKey8: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey8(e.target.value.toUpperCase());
    }
    
    const onChangeKey9: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey9(e.target.value.toUpperCase());
    }
    
    const onChangeKey10: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey10(e.target.value.toUpperCase());
    }
    
    const onChangeKey11: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey11(e.target.value.toUpperCase());
    }
    
    const onChangeKey12: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey12(e.target.value.toUpperCase());
    }
    
    const onChangeKey13: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey13(e.target.value.toUpperCase());
    }
    
    const onChangeKey14: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey14(e.target.value.toUpperCase());
    }
    
    const onChangeKey15: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey15(e.target.value.toUpperCase());
    }
    
    const onChangeKey16: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey16(e.target.value.toUpperCase());
    }
    
    const onChangeKey17: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey17(e.target.value.toUpperCase());
    }
    
    const onChangeKey18: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey18(e.target.value.toUpperCase());
    }
    
    const onChangeKey19: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey19(e.target.value.toUpperCase());
    }
    
    const onChangeKey20: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey20(e.target.value.toUpperCase());
    }
    
    const onChangeKey21: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey21(e.target.value.toUpperCase());
    }
    
    const onChangeKey22: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey22(e.target.value.toUpperCase());
    }
    
    const onChangeKey23: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey23(e.target.value.toUpperCase());
    }
    
    const onChangeKey24: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey24(e.target.value.toUpperCase());
    }
    
    const onChangeKey25: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey25(e.target.value.toUpperCase());
    }
    
    const onChangeKey26: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey26(e.target.value.toUpperCase());
    }
    
    const onChangeKey27: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey27(e.target.value.toUpperCase());
    }
    
    const onChangeKey28: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey28(e.target.value.toUpperCase());
    }
    
    const onChangeKey29: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey29(e.target.value.toUpperCase());
    }
    
    const onChangeKey30: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey30(e.target.value.toUpperCase());
    }
    
    const onChangeKey31: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey31(e.target.value.toUpperCase());
    }
    
    const onChangeKey32: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey32(e.target.value.toUpperCase());
    }
    
    const onChangeKey33: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey33(e.target.value.toUpperCase());
    }
    
    const onChangeKey34: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey34(e.target.value.toUpperCase());
    }
    
    const onChangeKey35: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey35(e.target.value.toUpperCase());
    }
    
    const onChangeKey36: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey36(e.target.value.toUpperCase());
    }
    
    const onChangeKey37: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey37(e.target.value.toUpperCase());
    }
    
    const onChangeKey38: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey38(e.target.value.toUpperCase());
    }
    
    const onChangeKey39: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey39(e.target.value.toUpperCase());
    }
    
    const onChangeKey40: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey40(e.target.value.toUpperCase());
    }
    
    const onChangeKey41: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey41(e.target.value.toUpperCase());
    }
    
    const onChangeKey42: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey42(e.target.value.toUpperCase());
    }
    
    const onChangeKey43: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey43(e.target.value.toUpperCase());
    }
    
    const onChangeKey44: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey44(e.target.value.toUpperCase());
    }
    
    const onChangeKey45: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey45(e.target.value.toUpperCase());
    }
    
    const onChangeKey46: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey46(e.target.value.toUpperCase());
    }
    
    const onChangeKey47: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey47(e.target.value.toUpperCase());
    }
    
    const onChangeKey48: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey48(e.target.value.toUpperCase());
    }
    
    const onChangeKey49: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey49(e.target.value.toUpperCase());
    }
    
    const onChangeKey50: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey50(e.target.value.toUpperCase());
    }
    const onChangeKey51: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey51(e.target.value.toUpperCase());
    }
    const onChangeKey52: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey52(e.target.value.toUpperCase());
    }
    const onChangeKey53: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey53(e.target.value.toUpperCase());
    }
    const onChangeKey54: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey54(e.target.value.toUpperCase());
    }
    const onChangeKey55: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey55(e.target.value.toUpperCase());
    }
    const onChangeKey56: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey56(e.target.value.toUpperCase());
    }
    const onChangeKey57: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey57(e.target.value.toUpperCase());
    }
  
    
    const onSubmit : FormEventHandler = async (e) => {
        e.preventDefault();

        if(key1 === answer1 && 
            key2 === answer2 && 
            key3 === answer3 && 
            key4 === answer4 && 
            key5 === answer5 &&
            key6 === answer6 &&
            key7 === answer7 &&
            key8 === answer8 &&
            key9 === answer9 &&
            key10 === answer10 &&
            key11 === answer11 &&
            key12 === answer12 &&
            key13 === answer13 &&
            key14 === answer14 &&
            key15 === answer15 &&
            key16 === answer16 &&
            key17 === answer17 &&
            key18 === answer18 &&
            key19 === answer19 &&
            key20 === answer20 &&
            key21 === answer21 &&
            key22 === answer22 &&
            key23 === answer23 &&
            key24 === answer24 &&
            key25 === answer25 &&
            key26 === answer26 &&
            key27 === answer27 &&
            key28 === answer28 &&
            key29 === answer29 &&
            key30 === answer30 &&
            key31 === answer31 &&
            key32 === answer32 &&
            key33 === answer33 &&
            key34 === answer34 &&
            key35 === answer35 &&
            key36 === answer36 &&
            key37 === answer37 &&
            key38 === answer38 &&
            key39 === answer39 &&
            key40 === answer40 &&
            key41 === answer41 &&
            key42 === answer42 &&
            key43 === answer43 &&
            key44 === answer44 &&
            key45 === answer45 &&
            key46 === answer46 &&
            key47 === answer47 &&
            key48 === answer48 &&
            key49 === answer49 &&
            key50 === answer50 &&
            key51 === answer51 &&
            key52 === answer52 &&
            key53 === answer53 &&
            key54 === answer54 &&
            key55 === answer55 &&
            key56 === answer56 &&
            key57 === answer57

        ){
            setSuccess(true);
        }
        
    }
    
    
    return (<>
        <div className={style.main}>
            <div className={style.mission}>
            
                <h3>모두의 모드 챌린지</h3>
                <h5>각종 Mode들을 포함한 파크인이라면 알아야할 AFM기초 지식을 테스트하며 십자말 풀이를 완성하면 미션 성공! </h5>
                <br/>
                <h5>해당 라인을 올바로 채우면 빨간 칸들이 초록 칸들로 바뀝니다. 모든 글자가 정답일 경우에만 성공 페이지가 열립니다. (대문자 소문자 상관 X)</h5>
                <br/>
                <br/>
                <form onSubmit={onSubmit}>
                <Table className={style.table} aria-label="crossword table">
                    <TableHeader>
                        <TableColumn className={style.dark}> </TableColumn>
                        <TableColumn className={style.dark}> </TableColumn>
                        <TableColumn className={style.dark}> </TableColumn>
                        <TableColumn className={style.dark}> </TableColumn>
                        <TableColumn className={style.dark}> </TableColumn>
                        <TableColumn className={style.dark}style={{ color: 'white' }}>1↓</TableColumn>
                        <TableColumn className={style.dark}> </TableColumn>
                        <TableColumn className={style.dark}> </TableColumn>
                        <TableColumn className={style.dark}style={{ color: 'white' }}>2↓</TableColumn>
                        <TableColumn className={style.dark}> </TableColumn>
                        <TableColumn className={style.dark}> </TableColumn>
                        <TableColumn className={style.dark}> </TableColumn>
                        <TableColumn className={style.dark}> </TableColumn>
                        <TableColumn className={style.dark}> </TableColumn>
                        <TableColumn className={style.dark}> </TableColumn>
                        <TableColumn className={style.dark}> </TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark} style={{ color: 'white' }}>1→</TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key1+key2+key3+key4+key5 === '' ? 'transparent' : key1+key2+key3+key4+key5 === 'DRIVE' ? 'lightgreen' : 'lightcoral'}}  type="text" value={key1} onChange={onChangeKey1}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key1+key2+key3+key4+key5 === '' && key2+key6+key14+key20 === '' ? 'transparent' : key1+key2+key3+key4+key5 === 'DRIVE' || key2+key6+key14+key20 === 'REBU'  ? 'lightgreen' : 'lightcoral'}} type="text" value={key2} onChange={onChangeKey2}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key1+key2+key3+key4+key5 === '' ? 'transparent' : key1+key2+key3+key4+key5 === 'DRIVE' ? 'lightgreen' : 'lightcoral'}}type="text" value={key3} onChange={onChangeKey3}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key1+key2+key3+key4+key5 === '' ? 'transparent' : key1+key2+key3+key4+key5 === 'DRIVE' ? 'lightgreen' : 'lightcoral'}}type="text" value={key4} onChange={onChangeKey4}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key1+key2+key3+key4+key5 === '' && key5+key7+key15+key23+key26+key32+key34+key42+key45 === '' ? 'transparent' : key1+key2+key3+key4+key5 === 'DRIVE' || key5+key7+key15+key23+key26+key32+key34+key42+key45 === 'EQUIPMENT' ? 'lightgreen' : 'lightcoral'}} type="text" value={key5} onChange={onChangeKey5}></input></TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                        </TableRow>  
                        <TableRow key="2">
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key2+key6+key14+key20 === '' ? 'transparent' :  key2+key6+key14+key20 === 'REBU'  ? 'lightgreen' : 'lightcoral'}} type="text" value={key6} onChange={onChangeKey6}></input></TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark} style={{color: 'white'}}>2→</TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key7+key8+key9+key10+key11+key12+key13 === '' && key5+key7+key15+key23+key26+key32+key34+key42+key45 === ''? 'transparent' : key7+key8+key9+key10+key11+key12+key13 === 'QUALITY' || key5+key7+key15+key23+key26+key32+key34+key42+key45 === 'EQUIPMENT' ? 'lightgreen' : 'lightcoral'}}type="text" value={key7} onChange={onChangeKey7}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key7+key8+key9+key10+key11+key12+key13 === '' ? 'transparent' : key7+key8+key9+key10+key11+key12+key13 === 'QUALITY' ? 'lightgreen' : 'lightcoral'}}  type="text" value={key8} onChange={onChangeKey8}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key7+key8+key9+key10+key11+key12+key13 === '' ? 'transparent' : key7+key8+key9+key10+key11+key12+key13 === 'QUALITY' ? 'lightgreen' : 'lightcoral'}}  type="text" value={key9} onChange={onChangeKey9}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key7+key8+key9+key10+key11+key12+key13 === '' ? 'transparent' : key7+key8+key9+key10+key11+key12+key13 === 'QUALITY' ? 'lightgreen' : 'lightcoral'}}  type="text" value={key10} onChange={onChangeKey10}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key7+key8+key9+key10+key11+key12+key13 === '' ? 'transparent' : key7+key8+key9+key10+key11+key12+key13 === 'QUALITY' ? 'lightgreen' : 'lightcoral'}} type="text" value={key11} onChange={onChangeKey11}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key7+key8+key9+key10+key11+key12+key13 === '' ? 'transparent' : key7+key8+key9+key10+key11+key12+key13 === 'QUALITY' ? 'lightgreen' : 'lightcoral'}} type="text" value={key12} onChange={onChangeKey12}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key7+key8+key9+key10+key11+key12+key13 === '' ? 'transparent' : key7+key8+key9+key10+key11+key12+key13 === 'QUALITY' ? 'lightgreen' : 'lightcoral'}} type="text" value={key13} onChange={onChangeKey13}></input></TableCell>
                            
                            <TableCell className={style.dark}> </TableCell>
                            
                        </TableRow> 
                        <TableRow key="3">
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key2+key6+key14+key20 === '' ? 'transparent' :  key2+key6+key14+key20 === 'REBU'  ? 'lightgreen' : 'lightcoral'}}  type="text" value={key14} onChange={onChangeKey14}></input></TableCell>
                            
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key5+key7+key15+key23+key26+key32+key34+key42+key45 === ''? 'transparent' : key5+key7+key15+key23+key26+key32+key34+key42+key45 === 'EQUIPMENT' ? 'lightgreen' : 'lightcoral'}} type="text" value={key15} onChange={onChangeKey15}></input></TableCell>
                            
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>

                        </TableRow> 
                        <TableRow key="4">
                            <TableCell className={style.dark} style={{color: 'white'}}>3→</TableCell>
                            
                            <TableCell ><input className={style.input} style={{backgroundColor: key16+key17+key18+key19+key20+key21+key22+key23+key24+key25 === '' ? 'transparent' : key16+key17+key18+key19+key20+key21+key22+key23+key24+key25 === 'CONDUCTIVE' ? 'lightgreen' : 'lightcoral'}} type="text" value={key16} onChange={onChangeKey16}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key16+key17+key18+key19+key20+key21+key22+key23+key24+key25 === '' ? 'transparent' : key16+key17+key18+key19+key20+key21+key22+key23+key24+key25 === 'CONDUCTIVE' ? 'lightgreen' : 'lightcoral'}} type="text" value={key17} onChange={onChangeKey17}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key16+key17+key18+key19+key20+key21+key22+key23+key24+key25 === '' ? 'transparent' : key16+key17+key18+key19+key20+key21+key22+key23+key24+key25 === 'CONDUCTIVE' ? 'lightgreen' : 'lightcoral'}} type="text" value={key18} onChange={onChangeKey18}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key16+key17+key18+key19+key20+key21+key22+key23+key24+key25 === '' ? 'transparent' : key16+key17+key18+key19+key20+key21+key22+key23+key24+key25 === 'CONDUCTIVE' ? 'lightgreen' : 'lightcoral'}} type="text" value={key19} onChange={onChangeKey19}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key16+key17+key18+key19+key20+key21+key22+key23+key24+key25 === '' && key2+key6+key14+key20 === '' ? 'transparent' : key16+key17+key18+key19+key20+key21+key22+key23+key24+key25 === 'CONDUCTIVE' || key2+key6+key14+key20 === 'REBU'  ? 'lightgreen' : 'lightcoral'}} type="text" value={key20} onChange={onChangeKey20}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key16+key17+key18+key19+key20+key21+key22+key23+key24+key25 === '' ? 'transparent' : key16+key17+key18+key19+key20+key21+key22+key23+key24+key25 === 'CONDUCTIVE' ? 'lightgreen' : 'lightcoral'}} type="text" value={key21} onChange={onChangeKey21}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key16+key17+key18+key19+key20+key21+key22+key23+key24+key25 === '' ? 'transparent' : key16+key17+key18+key19+key20+key21+key22+key23+key24+key25 === 'CONDUCTIVE' ? 'lightgreen' : 'lightcoral'}} type="text" value={key22} onChange={onChangeKey22}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key16+key17+key18+key19+key20+key21+key22+key23+key24+key25 === '' && key5+key7+key15+key23+key26+key32+key34+key42+key45 === '' ? 'transparent' : key16+key17+key18+key19+key20+key21+key22+key23+key24+key25 === 'CONDUCTIVE'|| key5+key7+key15+key23+key26+key32+key34+key42+key45 === 'EQUIPMENT' ? 'lightgreen' : 'lightcoral'}} type="text" value={key23} onChange={onChangeKey23}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key16+key17+key18+key19+key20+key21+key22+key23+key24+key25 === '' ? 'transparent' : key16+key17+key18+key19+key20+key21+key22+key23+key24+key25 === 'CONDUCTIVE' ? 'lightgreen' : 'lightcoral'}} type="text" value={key24} onChange={onChangeKey24}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key16+key17+key18+key19+key20+key21+key22+key23+key24+key25 === '' ? 'transparent' : key16+key17+key18+key19+key20+key21+key22+key23+key24+key25 === 'CONDUCTIVE' ? 'lightgreen' : 'lightcoral'}} type="text" value={key25} onChange={onChangeKey25}></input></TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            
                        </TableRow>
                        <TableRow key="5">
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}style={{color: 'white'}}>3↓</TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key5+key7+key15+key23+key26+key32+key34+key42+key45 === ''? 'transparent' : key5+key7+key15+key23+key26+key32+key34+key42+key45 === 'EQUIPMENT' ? 'lightgreen' : 'lightcoral'}}  type="text" value={key26} onChange={onChangeKey26}></input></TableCell>
                            
                            
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                        </TableRow>
                        <TableRow key="6">
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}style={{color: 'white'}}>4→</TableCell>
                            
                            <TableCell ><input className={style.input} style={{backgroundColor: key27+key28+key29+key30+key31+key32 === '' ? 'transparent' : key27+key28+key29+key30+key31+key32 === 'VACUUM' ? 'lightgreen' : 'lightcoral'}}  type="text" value={key27} onChange={onChangeKey27}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key27+key28+key29+key30+key31+key32 === '' ? 'transparent' : key27+key28+key29+key30+key31+key32 === 'VACUUM' ? 'lightgreen' : 'lightcoral'}} type="text" value={key28} onChange={onChangeKey28}></input></TableCell>
                 
                            <TableCell ><input className={style.input} style={{backgroundColor: key27+key28+key29+key30+key31+key32 === '' ? 'transparent' : key27+key28+key29+key30+key31+key32 === 'VACUUM' ? 'lightgreen' : 'lightcoral'}} type="text" value={key29} onChange={onChangeKey29}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key27+key28+key29+key30+key31+key32 === '' && key30+key33+key41+key43+key52+key53==='' ? 'transparent' : key27+key28+key29+key30+key31+key32 === 'VACUUM' || key30+key33+key41+key43+key52+key53==='UPDATE' ? 'lightgreen' : 'lightcoral'}}  type="text" value={key30} onChange={onChangeKey30}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key27+key28+key29+key30+key31+key32 === ''  ? 'transparent' : key27+key28+key29+key30+key31+key32 === 'VACUUM'? 'lightgreen' : 'lightcoral'}}  type="text" value={key31} onChange={onChangeKey31}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key27+key28+key29+key30+key31+key32 === '' && key5+key7+key15+key23+key26+key32+key34+key42+key45 === '' ? 'transparent' : key27+key28+key29+key30+key31+key32 === 'VACUUM'  || key5+key7+key15+key23+key26+key32+key34+key42+key45 === 'EQUIPMENT'? 'lightgreen' : 'lightcoral'}}  type="text" value={key32} onChange={onChangeKey32}></input></TableCell>
                            
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            
                        </TableRow>
                        <TableRow key="7">
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            
                            <TableCell ><input className={style.input} style={{backgroundColor: key30+key33+key41+key43+key52+key53==='' ? 'transparent' : key30+key33+key41+key43+key52+key53==='UPDATE' ? 'lightgreen' : 'lightcoral'}}  type="text" value={key33} onChange={onChangeKey33}></input></TableCell>
                            <TableCell className={style.dark}style={{color: 'white'}}>5→</TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key34+key35+key36+key37+key38 === '' && key5+key7+key15+key23+key26+key32+key34+key42+key45 === '' ? 'transparent' : key34+key35+key36+key37+key38 === 'EMAIL' || key5+key7+key15+key23+key26+key32+key34+key42+key45 === 'EQUIPMENT'? 'lightgreen' : 'lightcoral'}} type="text" value={key34} onChange={onChangeKey34}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key34+key35+key36+key37+key38 === '' ? 'transparent' : key34+key35+key36+key37+key38 === 'EMAIL'  ? 'lightgreen' : 'lightcoral'}}  type="text" value={key35} onChange={onChangeKey35}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key34+key35+key36+key37+key38 === '' ? 'transparent' : key34+key35+key36+key37+key38 === 'EMAIL' ? 'lightgreen' : 'lightcoral'}}  type="text" value={key36} onChange={onChangeKey36}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key34+key35+key36+key37+key38 === '' ? 'transparent' : key34+key35+key36+key37+key38 === 'EMAIL' ? 'lightgreen' : 'lightcoral'}}  type="text" value={key37} onChange={onChangeKey37}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key34+key35+key36+key37+key38 === '' ? 'transparent' : key34+key35+key36+key37+key38 === 'EMAIL' ? 'lightgreen' : 'lightcoral'}}  type="text" value={key38} onChange={onChangeKey38}></input></TableCell>
                            
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                        </TableRow>
                        <TableRow key="8">
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}style={{color: 'white'}}>6→</TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key39+key40+key41 === '' ? 'transparent' : key39+key40+key41 === 'SLD' ? 'lightgreen' : 'lightcoral'}}  type="text" value={key39} onChange={onChangeKey39}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key39+key40+key41 === '' ? 'transparent' : key39+key40+key41 === 'SLD' ? 'lightgreen' : 'lightcoral'}} type="text" value={key40} onChange={onChangeKey40}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key39+key40+key41 === '' && key30+key33+key41+key43+key52+key53===''  ? 'transparent' : key39+key40+key41 === 'SLD' || key30+key33+key41+key43+key52+key53==='UPDATE'  ? 'lightgreen' : 'lightcoral'}} type="text" value={key41} onChange={onChangeKey41}></input></TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key5+key7+key15+key23+key26+key32+key34+key42+key45 === '' ? 'transparent' : key5+key7+key15+key23+key26+key32+key34+key42+key45 === 'EQUIPMENT'? 'lightgreen' : 'lightcoral'}} type="text" value={key42} onChange={onChangeKey42}></input></TableCell>
                            
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                        </TableRow>
                        <TableRow key="9">
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}style={{color: 'white'}}>7→</TableCell>
                            <TableCell ><input className={style.input}  style={{backgroundColor: key43+key44+key45+key46+key47+key48+key49 === ''  && key30+key33+key41+key43+key52+key53===''? 'transparent' : key43+key44+key45+key46+key47+key48+key49 === 'ATTRACT'  || key30+key33+key41+key43+key52+key53==='UPDATE'? 'lightgreen' : 'lightcoral'}} type="text" value={key43} onChange={onChangeKey43}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key43+key44+key45+key46+key47+key48+key49 === '' ? 'transparent' : key43+key44+key45+key46+key47+key48+key49 === 'ATTRACT' ? 'lightgreen' : 'lightcoral'}}  type="text" value={key44} onChange={onChangeKey44}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key43+key44+key45+key46+key47+key48+key49=== '' && key5+key7+key15+key23+key26+key32+key34+key42+key45 === '' ? 'transparent' : key43+key44+key45+key46+key47+key48+key49 === 'ATTRACT' || key5+key7+key15+key23+key26+key32+key34+key42+key45 === 'EQUIPMENT' ? 'lightgreen' : 'lightcoral'}}  type="text" value={key45} onChange={onChangeKey45}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key43+key44+key45+key46+key47+key48+key49 === '' ? 'transparent' : key43+key44+key45+key46+key47+key48+key49 === 'ATTRACT' ? 'lightgreen' : 'lightcoral'}}  type="text" value={key46} onChange={onChangeKey46}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key43+key44+key45+key46+key47+key48+key49 === '' ? 'transparent' : key43+key44+key45+key46+key47+key48+key49 === 'ATTRACT' ? 'lightgreen' : 'lightcoral'}}  type="text" value={key47} onChange={onChangeKey47}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key43+key44+key45+key46+key47+key48+key49 === '' ? 'transparent' : key43+key44+key45+key46+key47+key48+key49 === 'ATTRACT' ? 'lightgreen' : 'lightcoral'}}  type="text" value={key48} onChange={onChangeKey48}></input></TableCell>
                            
                            <TableCell ><input className={style.input} style={{backgroundColor: key43+key44+key45+key46+key47+key48+key49 === '' ? 'transparent' : key43+key44+key45+key46+key47+key48+key49 === 'ATTRACT' ? 'lightgreen' : 'lightcoral'}}  type="text" value={key49} onChange={onChangeKey49}></input></TableCell>
                            
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            
                        </TableRow>
                        <TableRow key="10">
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}style={{color: 'white'}}>8→</TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key50+key51+key52 === '' ? 'transparent' : key50+key51+key52 === 'RAT' ? 'lightgreen' : 'lightcoral'}} type="text" value={key50} onChange={onChangeKey50}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key50+key51+key52 === '' ? 'transparent' : key50+key51+key52 === 'RAT' ? 'lightgreen' : 'lightcoral'}} type="text" value={key51} onChange={onChangeKey51}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key50+key51+key52 === ''  && key30+key33+key41+key43+key52+key53===''? 'transparent' : key50+key51+key52 === 'RAT'  || key30+key33+key41+key43+key52+key53==='UPDATE'? 'lightgreen' : 'lightcoral'}} type="text" value={key52} onChange={onChangeKey52}></input></TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            
                            
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                        </TableRow>
                        <TableRow key="11">
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}style={{color: 'white'}}>9→</TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key53+key54+key55+key56+key57 === ''  && key30+key33+key41+key43+key52+key53===''? 'transparent' : key53+key54+key55+key56+key57 === 'ECAFM'  || key30+key33+key41+key43+key52+key53==='UPDATE' ? 'lightgreen' : 'lightcoral'}} type="text" value={key53} onChange={onChangeKey53}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key53+key54+key55+key56+key57 === '' ? 'transparent' : key53+key54+key55+key56+key57 === 'ECAFM' ? 'lightgreen' : 'lightcoral'}} type="text" value={key54} onChange={onChangeKey54}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key53+key54+key55+key56+key57 === '' ? 'transparent' : key53+key54+key55+key56+key57 === 'ECAFM' ? 'lightgreen' : 'lightcoral'}} type="text" value={key55} onChange={onChangeKey55}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key53+key54+key55+key56+key57 === '' ? 'transparent' : key53+key54+key55+key56+key57 === 'ECAFM' ? 'lightgreen' : 'lightcoral'}} type="text" value={key56} onChange={onChangeKey56}></input></TableCell>
                            <TableCell ><input className={style.input} style={{backgroundColor: key53+key54+key55+key56+key57 === '' ? 'transparent' : key53+key54+key55+key56+key57 === 'ECAFM' ? 'lightgreen' : 'lightcoral'}} type="text" value={key57} onChange={onChangeKey57}></input></TableCell>
                            
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                        </TableRow>
                        <TableRow key="12">
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                        </TableRow>
                        
                    </TableBody>
                </Table>
                <br/>
                <br/>
                <button type={"submit"} className={style.actionButton} disabled={!key1||!key2||!key3||!key4||!key5}>제출하기</button>
              
                </form>
                
                <h3>Across</h3>
                <div className={style.questions}>
                <ol>
                <li>amplitude를 증가시키기 위해 올려야 하는 것은? (5 글자)</li>
                <li>OBQ는 제품이 생산되고 처음 개봉되었을 때의 품질을 나타내는 말로, Q에 해당하는 영어단어는? (7 글자)</li>
                <li>C-AFM에서 C에 해당하는 단어는? (8 글자)</li>
                <li>NX20에는 wafer를 sample chuck에 고정하기 위해 _ _ _ _ _ _ pump를 사용합니다. (6 글자)</li>
                <li>인터넷을 통해 전자적으로 메시지, 문서, 파일 등을 송수신하는 통신 수단? (5 글자)</li>
                <li>Cantilever 위에 조사되는 beam 명칭. FX40는 _ _ _을 자동으로 align 할 수 있습니다. (3 글자)</li>
                <li>NCM sweep은 tip과 sample의 _ _ _ _ _ _ _ ive force를 사용합니다 (7 글자)</li>
                <li>연구용 Application 팀의 새로운 이름은? (3 글자)</li>
                <li>전기화학적 특성을 측정할 수 있는 모드 중 하나로 전기화학 반응 물질을 포함하는 액체 환경에서 측정할 수 있는 모드는? (5 글자)</li>
                </ol>
                </div>
                <br/>
                <h3>Down</h3>
                <div className={style.questions}>
                <ol>
                <li>연구장비사업부문 명칭(약어) (4 글자)</li>
                <li>AFM 종류인 NX7, NX10, NX12, NX20, FX40 etc., 등을 지칭할 때, system, tool, 또는 _ _ _ _ _ _ _ _ _ 라고 합니다 (9 글자)</li>
                <li>SW 또는 Firmware를 더 높은 version으로 _ _ _ _ _ _ 합니다. (upgrade 표현 말고 다른 표현) (6 글자)</li>
                </ol>
                </div>
                
               {/* <div className={style.passcode}>
                <input name={"passcode"} value={key1} onChange={onChangeKey1} placeholder={'패스코드를 입력하세요'}></input>
            
               </div> */}
               
            {success ? (<MissionSuccessPage mission='모두의 모드 챌린지' point={80} />) : null}
            </div>
        </div>
        </>
    );
}