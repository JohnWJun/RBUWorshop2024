"use client";
import {usePathname} from 'next/navigation';
import { useState } from 'react';
import style from '@/app/entertainment/entertainment.module.css';
import BackButton from '@/app/_component/BackButton';
import Image from 'next/image';
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";
import Link from "next/link";

export default function Entertainment() {
   
    const [key1, setKey1] = useState('');
    const [key2, setKey2] = useState('');
    const [key3, setKey3] = useState('');
    
    
    
    return (
    <div className={style.main}>
         <div className={style.header}>
                    <BackButton/>
                    <h1>Team Building Missions</h1>
                        <Image
                    className={style.logo}
                    src="/parksystemsLogo.svg"
                    alt="Park Logo"
                    width={180}
                    height={37}
                    priority
                    />
                    </div>
        <div className={style.body}>
            <h3>Groups</h3>
            
            <div className={style.bodyComponents}>
                <div className={style.group}>
                <h5>Event Running Team</h5>
                Hitomi Makabe, Sun Ham, Cherie Jung, John Jun, Lina Ma, Soo Lee, Judy Kim, Jack Cha, and Eric Kim
                </div>

                <div className={style.group}>
                <h5>Team A</h5>
                Insu Kim, Xiaowei Tian, Yuya Wagatsuma, Kenneth Kang, Hyein Kim, Katie Yang, Raina Lee, Elizabeth Martinez, and Caleb Chu 
                </div>

                <div className={style.group}>
                <h5>Team B</h5>
                Takahiro Fujimoto, Shin Matsuda, Yi-Chen Lu, Haichao Guo, Katja Kiffner, Alejandro Bonilla, Brian Kim, Vamsi Bendalam, and Peter Park
                </div>

                <div className={style.group}>
                <h5>Team C</h5>
                Dr. Kim, Shun Okano, Chie Goto, Sang-Joon Cho, Jessica Kang, Eileen Shin, Cathy Lee, Xun Hao Chok, and Primrose Arcillas
                </div>

                <div className={style.group}>
                <h5>Team D</h5>
                Dr. Kim, Shun Okano, Chie Goto, Sang-Joon Cho, Jessica Kang, Eileen Shin, Cathy Lee, Xun Hao Chok, and Primrose Arcillas
                </div>

                <div className={style.group}>
                <h5>Team E</h5>
                Dr. Kim, Shun Okano, Chie Goto, Sang-Joon Cho, Jessica Kang, Eileen Shin, Cathy Lee, Xun Hao Chok, and Primrose Arcillas
                </div>
            </div>
            <br/>
            <br/>
            <h3>게임 플레이 룰</h3>
            <h5>
                1. 지도를 확인하며 미션클리어를 위해 해당 위치로 이동!<br/><br/>
                2. 해당 위치에서 QR코드를 스캔하여 해당하는 미션을 수행!<br/><br/>
                3. 해당 웹 페이지에서 정답을 제출하거나 위치해있는 요원에게 미션 성공 여부를 심사받는다.<br/><br/>
                4. 미션 성공 메세지를 받으면 이를 캡쳐하여 사진첩에 저장한다.<br/><br/>
            </h5>
            <br/>
            <br/>
            <h3>Mission Map
                <Image
                        className={style.icon}
                        src="/map.png"
                        alt="map icon"
                        width={20}
                        height={20}
                        priority
                        /></h3>
            
            <h5>

            </h5>
            <div className={style.bodyComponents}>
                
                <div className={style.imgBox}>
                    <Image
                    className={style.image}
                    src="/missionMap.jpg"
                    alt="Mission Map"
                    width={700}
                    height={500}
                    priority
                    />
                </div>

                
            </div>
            <h3>Mission 1</h3>
            <div className={style.bodyComponents}>
            <h2>틱톡 첼린지</h2>
            <h5>도전하고자 하는 댄스 영상을 선택, 인스타그램에 업로드 후 진행요원에게 도전 성공 여부를 심사받으세요.</h5>
                    
            </div>
            <br/>
            <br/>
            <h3>Mission 2</h3>
            <div className={style.bodyComponents}>
            <h2>영화 대사 듣고 영화 맞추기</h2>
            <h5>제한시간안에 5개의 영화를 모두 맞추면 미션 성공!</h5>  
            </div>
            <br/>
            <br/>
            <h3>Mission 3</h3>
            <div className={style.bodyComponents}>
            <h2>Quiz 맞추기</h2>
            <h5>앞에 들었던 강의를 떠올리며 팀원과 상의하여 Quiz 5문제를 풀고 모두 맞추면 미션 성공!</h5>  
            </div>
            <br/>
            <br/>
            <h3>Mission 4</h3>
            <div className={style.bodyComponents}>
            <h2>노래 10초 듣고 노래 맞추기</h2>
            <h5>제한시간안에 5개의 노래를 모두 맞추면 미션 성공!</h5>  
            </div>
            <br/>
            <br/>
            <h3>Mission 5</h3>
            <div className={style.bodyComponents}>
            <h2>영화 대사 듣고 영화 맞추기</h2>
            <h5>제한시간안에 5개의 영화를 모두 맞추면 미션 성공!</h5>  
            </div>
            <br/>
            <br/>
            <h3>Mission 6</h3>
            <div className={style.bodyComponents}>
            <h2>영화 대사 듣고 영화 맞추기</h2>
            <h5>제한시간안에 5개의 영화를 모두 맞추면 미션 성공!</h5>  
            </div>
            <h5>Schedule:</h5>
            <br/>
            <br/>
            <div className={style.bodyComponents}>
        
            <div className={style.group}>
            <Table className={style.table} aria-label="schedule table">
            <TableHeader >
                <TableColumn className={style.tableHeadColumn}>Time</TableColumn>
                <TableColumn className={style.tableHeadColumn}>Action</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1">
                <TableCell className={style.cell}>16:30</TableCell>
                <TableCell className={style.cell}>Move to Shibuya(bus)</TableCell>
                </TableRow>
                <TableRow key="2">
                <TableCell className={style.cell}>17:00</TableCell>
                <TableCell className={style.cell}>Arrival at Shubuya</TableCell>
                </TableRow>
                <TableRow key="3">
                <TableCell className={style.cell}>17:30 - 19:30</TableCell>
                <TableCell className={style.cell}>Dinner at Hyoto Shibuya</TableCell>
                </TableRow>
                <TableRow key="4">
                <TableCell className={style.cell}>19:30 - 20:00</TableCell>
                <TableCell className={style.cell}>Move to Shibuya Sky and activity time</TableCell>
                </TableRow>
                <TableRow key="5">
                <TableCell className={style.cell}>21:30</TableCell>
                <TableCell className={style.cell}>Move to TKP Shibuya(bus) and back to accommodation</TableCell>
                </TableRow>
                <TableRow key="6">
                <TableCell className={style.cell}>22:00</TableCell>
                <TableCell className={style.cell}>Arrival at accommodation</TableCell>
                </TableRow>
            </TableBody>
            </Table>

                 
                 
            </div>


            </div>

        </div>           
               
    </div>
    )}