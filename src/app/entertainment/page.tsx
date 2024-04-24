"use client";
import {usePathname} from 'next/navigation';
import { useState } from 'react';
import style from '@/app/entertainment/entertainment.module.css';
import BackButton from '@/app/_component/BackButton';
import Image from 'next/image';
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
            <h3>Teams</h3>
            
            <div className={style.bodyComponents}>
                <div className={style.group}>
                <h5>Event Running Team</h5>
                김영훈, 권민정, 권지오, 전우현, 정가윤, 정다원, 홍석한
                </div>

                <div className={style.group}>
                <h5>Team A</h5>
                신혜진, 오예진, 김건우, 이철기, 함선규, 최자양, 하승섭
                </div>

                <div className={style.group}>
                <h5>Team B</h5>
                차윤미, 장영운, 조상준, 강봉우, 이윤경, 강도희, 김강산
                </div>

                <div className={style.group}>
                <h5>Team C</h5>
                정다워, 유현주, 정진주, 마려나, 원당광, 아야즈, 김철수
                </div>

                <div className={style.group}>
                <h5>Team D</h5>
                지영지, 이주엽, 김성오, 윤혜원, 정가윤, 권대현, 박성복
                </div>

                <div className={style.group}>
                <h5>Team E</h5>
                이정애, 정동환, 박정미, 김보형, 양경득, 박승민, 김승미
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
                <a href="/missionMap.png">
                    <Image
                    className={style.image}
                    src="/missionMap.png"
                    alt="Mission Map"
                    width={700}
                    height={300}
                    priority
                    />
                    </a>
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
            

        </div>           
               
    </div>
    )}