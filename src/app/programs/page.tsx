
"use client";
import style from './programs.module.css';
import Link from 'next/link';

import BackButton from '../_component/BackButton';
import Image from 'next/image';
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";



export default function Programs() {
 
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
                            <TableCell className={style.cell1}>14:00 ~ 14:45</TableCell>
                            <TableCell className={style.cell2}>Keynote Speech - 조상준 전무님</TableCell>
                            </TableRow>
                            <TableRow key="5">
                            <TableCell className={style.cell1}>14:45 ~ 15:00</TableCell>
                            <TableCell className={style.cell2}>휴식</TableCell>
                            </TableRow>
                            <TableRow key="6">
                            <TableCell className={style.cell1}>15:00 ~ 15:45</TableCell>
                            <TableCell className={style.cell2}>Invited Talk - TBU</TableCell>
                            </TableRow>
                            <TableRow key="7">
                            <TableCell className={style.cell1}>15:45 ~ 17:15</TableCell>
                            <TableCell className={style.cell2}>팀빌딩 레크레이션</TableCell>
                            </TableRow>
                            <TableRow key="8">
                            <TableCell className={style.cell1}>17:15 ~ 19:00</TableCell>
                            <TableCell className={style.cell2}>Group Discussion - 조별 과제 토의 및 발표</TableCell>
                            </TableRow>
                            <TableRow key="9">
                            <TableCell className={style.cell1}>10:00 ~ 21:00</TableCell>
                            <TableCell className={style.cell2}>저녁식사(무아레 리조트)</TableCell>
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
                                <TableCell className={style.cell1}>9:00 ~ 10:00</TableCell>
                                <TableCell className={style.cell2}>아침식사</TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell className={style.cell1}>10:00 ~ 11:00</TableCell>
                                <TableCell className={style.cell2}>부서 협업 증진을 위한 2024 액션플랜 도출 및 선포, 단체 사진</TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell className={style.cell1}>12:00 ~</TableCell>
                                <TableCell className={style.cell2}>개별 팀빌딩</TableCell>
                            </TableRow>
                            {/* Add more rows for Day 2 schedule */}
                        </TableBody>
                    </Table>
                </div>
            </div>
           
        </div>
        
            </div>
            
    </>
    )}