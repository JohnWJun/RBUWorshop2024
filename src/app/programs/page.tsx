
"use client";
import style from './programs.module.css';
import Link from 'next/link';
import { useState } from 'react';
import BackButton from '../_component/BackButton';
import Image from 'next/image';
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";
import SakuraFalls from '../_component/SakuraFalls';


export default function Programs() {
    const [isParkyTime, setIsParkyTime] = useState(false);

    const onClickParky = () => {

        if(isParkyTime === false){
            setIsParkyTime(true)
        }else {
            setIsParkyTime(false)
        }
    }
    return (
    <>
       <div className={style.main}>
        
            <div className={style.header}>
            <BackButton/>
                <h1>Schedule</h1>
                <Image
            className={style.logo}
            src="/parksystemsLogo.svg"
            alt="Park Logo"
            width={180}
            height={37}
            priority
            />
            </div>
            
            <div className={style.scheduleContainer}>
            <div className={style.bodyComponents}>
            
                <br/>
                <br/>
                <h5>첫째날 일정 <Image
                        className={style.icon}
                        src="/parky.svg"
                        alt="parky icon"
                        width={20}
                        height={20}
                        priority
                        /></h5>
                <br/>
                <br/>
                <div className={style.group}>
                    <Table className={style.table} aria-label="schedule table">
                        <TableHeader>
                            <TableColumn className={style.tableHeadColumn}>Time</TableColumn>
                            <TableColumn className={style.tableHeadColumn}>Action</TableColumn>
                        </TableHeader>
                        <TableBody>
                            <TableRow key="1">
                                <TableCell className={style.cell1}>10:00 ~ 12:00</TableCell>
                                <TableCell className={style.cell2}>가평으로 이동</TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell className={style.cell1}>12:00 ~ 13:00</TableCell>
                                <TableCell className={style.cell2}>점심식사</TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell className={style.cell1}>13:00 ~ 14:00</TableCell>
                                <TableCell className={style.cell2}>숙소 도착 및 짐 정리</TableCell>
                            </TableRow>
                            <TableRow key="4">
                            <TableCell className={style.cell1}>14:00 ~ 15:30</TableCell>
                            <TableCell className={style.cell2}>초청 강사 강의</TableCell>
                            </TableRow>
                            <TableRow key="5">
                            <TableCell className={style.cell1}>15:30 ~ 17:00</TableCell>
                            <TableCell className={style.cell2}>Key Note Speech &<br/> 조별 토의</TableCell>
                            </TableRow>
                            <TableRow key="6">
                            <TableCell className={style.cell1}>17:30 ~ 19:00</TableCell>
                            <TableCell className={style.cell2}>팀빌딩 레크레이션</TableCell>
                            </TableRow>
                            <TableRow key="7">
                            <TableCell className={style.cell1}>19:00 ~ </TableCell>
                            <TableCell className={style.cell2}>자유시간</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <br/>
                <br/>
                <h5>둘째날 일정 <Image
                        className={style.icon}
                        src="/parky.svg"
                        alt="parky icon"
                        width={20}
                        height={20}
                        priority
                        /></h5>
                <br/>
                <br/>
                <div className={style.group}>
                    <Table className={style.table} aria-label="schedule table">
                        <TableHeader>
                            <TableColumn className={style.tableHeadColumn}>Time</TableColumn>
                            <TableColumn className={style.tableHeadColumn}>Action</TableColumn>
                        </TableHeader>
                        <TableBody>
                            <TableRow key="1">
                                <TableCell className={style.cell1}>9:00 ~ 10:30</TableCell>
                                <TableCell className={style.cell2}>기상및 짐 정리(단체사진)</TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell className={style.cell1}>10:30 ~ </TableCell>
                                <TableCell className={style.cell2}>귀가</TableCell>
                            </TableRow>
                            {/* Add more rows for Day 2 schedule */}
                        </TableBody>
                    </Table>
                </div>
            </div>
           
        </div>
        
            </div>
            <button className={style.parkyTime} onClick={onClickParky}><Image
                        className={style.icon}
                        src="/parky.svg"
                        alt="parky icon"
                        width={20}
                        height={20}
                        priority
                        /></button>
            { isParkyTime ?(<SakuraFalls/>): null}
    </>
    )}