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
    
    const answer1 = 'a';
    const answer2 = 'b';
    const answer3 = 'c';
    const answer4 = 'd';
    const answer5 = 'e';
    const answer6 = 'f';
    const answer7 = 'g';
    const answer8 = 'h';
    const answer9 = 'i';
    const answer10 = 'j';
    const answer11 = 'k';
    const answer12 = 'l';
    const answer13 = 'm';
    const answer14 = 'n';
    const answer15 = 'o';
    const answer16 = 'p';
    const answer17 = 'q';
    const answer18 = 'r';
    const answer19 = 's';
    const answer20 = 't';
    const answer21 = 'u';
    const answer22 = 'v';
    const answer23 = 'w';
    const answer24 = 'x';
    const answer25 = 'y';
    const answer26 = 'z';
    const answer27 = 'aa';
    const answer28 = 'ab';
    const answer29 = 'ac';
    const answer30 = 'ad';
    const answer31 = 'ae';
    const answer32 = 'af';
    const answer33 = 'ag';
    const answer34 = 'ah';
    const answer35 = 'ai';
    const answer36 = 'aj';
    const answer37 = 'ak';
    const answer38 = 'al';
    const answer39 = 'am';
    const answer40 = 'an';
    const answer41 = 'ao';
    const answer42 = 'ap';
    const answer43 = 'aq';
    const answer44 = 'ar';
    const answer45 = 'as';
    const answer46 = 'at';
    const answer47 = 'au';
    const answer48 = 'av';
    const answer49 = 'aw';
    const answer50 = 'ax';


    const [success, setSuccess] = useState(false);
    
    const onChangeKey1: ChangeEventHandler<HTMLInputElement> = (e) => {
        setKey1(e.target.value.toUpperCase());
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
            key50 === answer50
        ){
            setSuccess(true);
        }
    }
    
    
    return (<>
        <div className={style.main}>
            <div className={style.mission}>
            
                <h3>모두의 모드 첼린지</h3>
                <h5>각종 Mode들을 포함한 파크인이라면 알아야할 AFM기초 지식을 테스트하며 십자말 풀이를 완성하면 미션 성공! </h5>
                <br/>
                <h5>모든 글자가 정답일 경우에만 성공 페이지가 열립니다. (대문자 소문자 상관 X)</h5>
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
                            <TableCell ><input className={style.input} placeholder='1⮆' type="text" value={key1} onChange={onChangeKey1}></input></TableCell>
                            <TableCell ><input className={style.input} placeholder='1⇊'type="text" value={key2} onChange={onChangeKey2}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key3} onChange={onChangeKey3}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key4} onChange={onChangeKey4}></input></TableCell>
                            <TableCell ><input className={style.input} placeholder='2⇊' type="text" value={key5} onChange={onChangeKey5}></input></TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                        </TableRow>  
                        <TableRow key="2">
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell ><input className={style.input} type="text" value={key6} onChange={onChangeKey6}></input></TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell ><input className={style.input} placeholder='2⮆' type="text" value={key7} onChange={onChangeKey7}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key8} onChange={onChangeKey8}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key9} onChange={onChangeKey9}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key10} onChange={onChangeKey10}></input></TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                        </TableRow> 
                        <TableRow key="3">
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell ><input className={style.input} type="text" value={key11} onChange={onChangeKey11}></input></TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell ><input className={style.input} type="text" value={key12} onChange={onChangeKey12}></input></TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                        </TableRow> 
                        <TableRow key="4">
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell ><input className={style.input} placeholder='3⮆' type="text" value={key13} onChange={onChangeKey13}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key14} onChange={onChangeKey14}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key15} onChange={onChangeKey15}></input></TableCell>
            
                            <TableCell ><input className={style.input} type="text" value={key16} onChange={onChangeKey16}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key17} onChange={onChangeKey17}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key18} onChange={onChangeKey18}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key19} onChange={onChangeKey19}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key20} onChange={onChangeKey20}></input></TableCell>
                            
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                        </TableRow>
                        <TableRow key="5">
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell ><input className={style.input} type="text" value={key21} onChange={onChangeKey21}></input></TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                        </TableRow>
                        <TableRow key="6">
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell ><input className={style.input} placeholder='4⮆' type="text" value={key22} onChange={onChangeKey22}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key23} onChange={onChangeKey23}></input></TableCell>
                            <TableCell ><input className={style.input} placeholder='3⇊' type="text" value={key24} onChange={onChangeKey24}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key25} onChange={onChangeKey25}></input></TableCell>
                 
                            <TableCell ><input className={style.input} type="text" value={key26} onChange={onChangeKey26}></input></TableCell>
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
                            
                            
                            
                            <TableCell ><input className={style.input} type="text" value={key27} onChange={onChangeKey27}></input></TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell ><input className={style.input} placeholder='5⮆' type="text" value={key28} onChange={onChangeKey28}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key29} onChange={onChangeKey29}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key30} onChange={onChangeKey30}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key31} onChange={onChangeKey31}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key32} onChange={onChangeKey32}></input></TableCell>
                            
                            <TableCell className={style.dark}> </TableCell>
                        </TableRow>
                        <TableRow key="8">
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell ><input className={style.input} placeholder='6⮆' type="text" value={key33} onChange={onChangeKey33}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key34} onChange={onChangeKey34}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key35} onChange={onChangeKey35}></input></TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell ><input className={style.input} type="text" value={key36} onChange={onChangeKey36}></input></TableCell>
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
                            <TableCell ><input className={style.input} placeholder='7⮆'type="text" value={key37} onChange={onChangeKey37}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key38} onChange={onChangeKey38}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key39} onChange={onChangeKey39}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key40} onChange={onChangeKey40}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key41} onChange={onChangeKey41}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key42} onChange={onChangeKey42}></input></TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell className={style.dark}> </TableCell>
                            
                        </TableRow>
                        <TableRow key="10">
                            <TableCell className={style.dark}> </TableCell>
                            <TableCell ><input className={style.input} placeholder='8⮆' type="text" value={key43} onChange={onChangeKey43}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key44} onChange={onChangeKey44}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key45} onChange={onChangeKey45}></input></TableCell>
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
                            <TableCell ><input className={style.input} placeholder='9⮆' type="text" value={key46} onChange={onChangeKey46}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key47} onChange={onChangeKey47}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key48} onChange={onChangeKey48}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key49} onChange={onChangeKey49}></input></TableCell>
                            <TableCell ><input className={style.input} type="text" value={key50} onChange={onChangeKey50}></input></TableCell>
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
                <li>질문질문질문질문질문질문질문질문질문질문질문질문? (5 글자)</li>
                <li>질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문? (4 글자)</li>
                <li>질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문? (8 글자)</li>
                <li>질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문? (5 글자)</li>
                <li>질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문? (5 글자)</li>
                <li>질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문? (3 글자)</li>
                <li>질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문? (6 글자)</li>
                <li>질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문? (3 글자)</li>
                <li>질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문? (5 글자)</li>
                </ol>
                </div>
                <br/>
                <h3>Down</h3>
                <div className={style.questions}>
                <ol>
                <li>질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문? (4 글자)</li>
                <li>질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문? (9 글자)</li>
                <li>질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문? (6 글자)</li>
                </ol>
                </div>
                
               {/* <div className={style.passcode}>
                <input name={"passcode"} value={key1} onChange={onChangeKey1} placeholder={'패스코드를 입력하세요'}></input>
            
               </div> */}
               
            {success ? (<MissionSuccessPage mission='모두의 모드 첼린지' point={80} />) : null}
            </div>
        </div>
        </>
    );
}