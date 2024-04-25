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
                김영훈, 권민정, 권지오, 전우현, 정다원, 홍석한
                </div>

                <div className={style.group}>
                <h5>Team A</h5>
                조상준, 김보형, 정진주, 이철기, 박정미, 오예진
                </div>

                <div className={style.group}>
                <h5>Team B</h5>
                양경득, 이주엽, 정다워, 지영지, 정동환, 하승섭
                </div>

                <div className={style.group}>
                <h5>Team C</h5>
                이윤경, 김철수, 장영운, 마려나, 윤혜원, 최자양
                </div>

                <div className={style.group}>
                <h5>Team D</h5>
                이정애, 강도희, 박성복, 김건우, 박승민, 장서균
                </div>

                <div className={style.group}>
                <h5>Team E</h5>
                강봉우, 유현주, 김민철, 차윤미, 김강산, 권대현 
                 </div>
                 
                <div className={style.group}>
                <h5>Team F</h5>
                김성오, 원당광, 신혜진, 함선규, 아야즈, 김승미
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
            <h2>틱톡 첼린지(50점 / 최대 90점!)</h2>
            <h5>도전하고자 하는 댄스 영상을 선택, 인스타그램에 업로드 후 진행요원에게 도전 성공 여부를 심사받으세요.</h5>
                    
            </div>
            <br/>
            <br/>
            <h3>Mission 2</h3>
            <div className={style.bodyComponents}>
            <h2>도플갱어 첼린지 (문제당 5점 / 최대 80점!)</h2>
            <h5>사진의 주인공을 보시고 영화 또는 드라마제목을 최대한 많이 맞춰주세요.</h5>  
            </div>
            <br/>
            <br/>
            <h3>Mission 3</h3>
            <div className={style.bodyComponents}>
            <h2>Quiz 맞추기 (50점)</h2>
            <h5>앞에 들었던 강의를 떠올리며 팀원과 상의하여 Quiz 5문제를 풀고 모두 맞추면 미션 성공!</h5>  
            </div>
            <br/>
            <br/>
            <h3>Mission 4</h3>
            <div className={style.bodyComponents}>
            <h2>뮤직왕 첼린지</h2>
            <h5>제한시간안에 TTS 음성 가사만 듣고 어떤 노래인지 최대한 많이 맞춰주세요.</h5>  
            </div>
            <br/>
            <br/>
            <h3>Mission 5</h3>
            <div className={style.bodyComponents}>
            <h2>넌 어느별에서 왔니? 첼린지</h2>
            <h5>분리된 이목구비만 보고 누구인지 맞추기</h5>  
            </div>
            <br/>
            <br/>
            <h3>Mission 6</h3>
            <div className={style.bodyComponents}>
            <h2>트릭샷 첼린지</h2>
            <h5>제시된 포즈 중 하나 선택해서 사진을 찍고 인스타그램에 업로드하면 미션 성공!</h5>  
            </div>
            <br/>
            <br/>
            <h3>Mission 7</h3>
            <div className={style.bodyComponents}>
            <h2>모두의 모드 첼린지</h2>
            <h5>AFM 기본 지식 테스트, 십자말풀이!</h5>  
            </div>

        </div>           
               
    </div>
    )}