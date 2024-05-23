"use client";
import {usePathname} from 'next/navigation';
import { useState,useEffect } from 'react';
import style from '@/app/entertainment/entertainment.module.css';
import BackButton from '@/app/_component/BackButton';
import Image from 'next/image';
import Link from "next/link";

export default function Entertainment() {
    const [mission0ClearPoint, setMission0ClearPoint] = useState(0);
    const [mission1ClearPoint, setMission1ClearPoint] = useState(0);
    const [mission2ClearPoint, setMission2ClearPoint] = useState(0);
    const [mission3ClearPoint, setMission3ClearPoint] = useState(0);
    const [mission4ClearPoint, setMission4ClearPoint] = useState(0);
    const [mission5ClearPoint, setMission5ClearPoint] = useState(0);
    const [mission6ClearPoint, setMission6ClearPoint] = useState(0);
    const [mission7ClearPoint, setMission7ClearPoint] = useState(0);

    
    useEffect(() => {
    setMission0ClearPoint(Number(localStorage.getItem('히든미션 파키의 선물')) || 0);
     setMission1ClearPoint(Number(localStorage.getItem('틱톡챌린지')) || 0);
     setMission2ClearPoint(Number(localStorage.getItem('도플갱어챌린지')) || 0);
     setMission3ClearPoint(Number(localStorage.getItem('퀴즈챌린지')) || 0);
     setMission4ClearPoint(Number(localStorage.getItem('뮤직왕챌린지')) || 0);
     setMission5ClearPoint(Number(localStorage.getItem('어느별챌린지')) || 0);
     setMission6ClearPoint(Number(localStorage.getItem('트릭샷챌린지')) || 0);
     setMission7ClearPoint(Number(localStorage.getItem('모두의 모드 챌린지')) || 0);
    }, []);
   
    let total = (
        (mission0ClearPoint ?? 0) +
        (mission1ClearPoint ?? 0) +
        (mission2ClearPoint ?? 0) +
        (mission3ClearPoint ?? 0) +
        (mission4ClearPoint ?? 0) +
        (mission5ClearPoint ?? 0) +
        (mission6ClearPoint ?? 0) +
        (mission7ClearPoint ?? 0)
      );
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
                박성복, 김영훈, 권민정, 권지오, 전우현, 정다원, 홍석한
                </div>

                <div className={style.group}>
                <h5>Team A</h5>
                조상준, 김보형, 정진주, 이철기, 박정미(임시 조장), 오예진
                </div>

                <div className={style.group}>
                <h5>Team B</h5>
                양경득, 이주엽, 정다워, 지영지, 정동환(임시 조장), Yaya Wagatsuma (PSJ)
                </div>

                <div className={style.group}>
                <h5>Team C</h5>
                이윤경, 김철수, 장영운, 마려나, 윤혜원(임시 조장), 최자양
                </div>

                <div className={style.group}>
                <h5>Team D</h5>  	
                이정애, 강도희, 김건우, 하승섭(임시 조장), 박승민, 장서균 
                </div>

                <div className={style.group}>
                <h5>Team E</h5>
                강봉우, 유현주, 김민철, 차윤미(임시 조장), 김강산, 권대현 
                 </div>
                 
                <div className={style.group}>
                <h5>Team F</h5>
                김성오, 원당광, 신혜진, 함선규(임시 조장), 아야즈, 김승미
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
                ** 필수미션들은 반드시 클리어하셔야 합니다.
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
            <h3>총 획득한 점수: {total}점</h3>
            {!mission0ClearPoint ? (<>
            
            <div className={style.bodyComponents}>
            <h3>히든 미션</h3>
            <h2>파키의 선물</h2>
            <h5>어딘가에 숨어있는 파키의 선물을 찾아보세요!</h5>     
            </div>
            </>
            ):(<>
                
            <div style={{backgroundColor: '#bbe4e9', fontWeight: '1000', padding:'15px', borderRadius: '20px'}} className={style.bodyComponents}>
            <div className={style.missionHeader}>
            <h3>히든 미션</h3> 
            <div >    
                <Image
                src="/success.png"
                alt="success"
                width={50}
                height={50}
                priority
                />  
            </div>
            </div>
            <div className={style.missionBody}> 
            <h2 >Clear! 획득 점수: {mission0ClearPoint}</h2>
            <h5>찾았다! 파키의 선물!</h5> 
            </div>   
            </div>
            </>
                )}
            <br/>
            <br/>
            {!mission1ClearPoint ? (<>
            
            <div className={style.bodyComponents}>
            <h3>Mission 1</h3>
            <h2>틱톡 챌린지(50점 / 최대 90점!)</h2>
            <h5>도전하고자 하는 댄스 영상을 선택, 인스타그램에 업로드 후 진행요원에게 도전 성공 여부를 심사받으세요.</h5>     
            </div>
            </>
            ):(<>
            
            <div style={{backgroundColor: '#bbe4e9', fontWeight: '1000', padding:'10px', borderRadius: '20px'}} className={style.bodyComponents}>
            <div className={style.missionHeader}>
            <h3>Mission 1</h3>
            <div >    
                <Image
                src="/success.png"
                alt="success"
                width={50}
                height={50}
                priority
                />  
            </div>
            </div>
            <div className={style.missionBody}>   
            <h2 >Clear! 획득 점수: {mission1ClearPoint}</h2>
            <h5>도전하고자 하는 댄스 영상을 선택, 인스타그램에 업로드 후 진행요원에게 도전 성공 여부를 심사받으세요.</h5>     
            </div>
            </div>
            
            </>
                )}
            <br/>
            <br/>

            {!mission2ClearPoint ? (<>
            
            <div className={style.bodyComponents}>
            <h3>Mission 2</h3>
            <h2>도플갱어 챌린지 (문제당 5점)</h2>
            <h5>사진의 주인공을 보시고 영화 또는 드라마제목을 최대한 많이 맞춰주세요.</h5>     
            </div>
            </>
            ):(<>
              
            <div style={{backgroundColor: '#bbe4e9', fontWeight: '1000', padding:'10px', borderRadius: '20px'}} className={style.bodyComponents}>
            <div className={style.missionHeader}> 
            <h3>Mission 2</h3>
            <div >    
                <Image
                src="/success.png"
                alt="success"
                width={50}
                height={50}
                priority
                />  
            </div>
            </div>
            <div className={style.missionBody}>
            <h2 >Clear! 획득 점수: {mission2ClearPoint}</h2>
            <h5>사진의 주인공을 보시고 영화 또는 드라마제목을 최대한 많이 맞춰주세요.</h5>     
            </div>
            </div> 
            </>
                )}
            <br/>
            <br/>

            {!mission3ClearPoint ? (<>
            
            <div className={style.bodyComponents}>
            <h3 style={{color: 'red'}}>Mission 3 (필수미션)</h3>
            <h2>Quiz 맞추기 (50점)</h2>
            <h5>앞에 들었던 강의를 떠올리며 팀원과 상의하여 Quiz 5문제를 풀고 모두 맞추면 미션 성공!</h5>     
            </div>
            </>
            ):(<>
             
            <div style={{backgroundColor: '#bbe4e9', fontWeight: '1000', padding:'10px', borderRadius: '20px'}} className={style.bodyComponents}>
            <div className={style.missionHeader}>  
            <h3>Mission 3 (필수미션)</h3>
            <div >    
                <Image
                src="/success.png"
                alt="success"
                width={50}
                height={50}
                priority
                />  
            </div>
            </div> 

            <div className={style.missionBody}>
            <h2 >Clear! 획득 점수: {mission3ClearPoint}</h2>
            <h5>앞에 들었던 강의를 떠올리며 팀원과 상의하여 Quiz 5문제를 풀고 모두 맞추면 미션 성공!</h5>     
            </div>
            </div>
            </>
                )}

        
            <br/>
            <br/>

            {!mission4ClearPoint ? (<>
            
            <div className={style.bodyComponents}>
            <h3>Mission 4</h3>
            <h2>뮤직왕 챌린지 (문제당 5점)</h2>
            <h5>제한시간안에 TTS 음성 가사만 듣고 어떤 노래인지 최대한 많이 맞춰주세요.</h5>     
            </div>
            </>
            ):(<>
              
            <div style={{backgroundColor: '#bbe4e9', fontWeight: '1000', padding:'10px', borderRadius: '20px'}} className={style.bodyComponents}>
            <div className={style.missionHeader}> 
            <h3>Mission 4</h3>
            <div >    
                <Image
                src="/success.png"
                alt="success"
                width={50}
                height={50}
                priority
                />  
            </div>
            </div> 

            <div className={style.missionBody}>
            <h2 >Clear! 획득 점수: {mission4ClearPoint}</h2>
            <h5>제한시간안에 TTS 음성 가사만 듣고 어떤 노래인지 최대한 많이 맞춰주세요.</h5>     
            </div>
            </div>
            </>
                )}

            
            <br/>
            <br/>

            {!mission5ClearPoint ? (<>
            
            <div className={style.bodyComponents}>
            <h3 style={{color: 'red'}}>Mission 5 (필수미션)</h3>
            <h2>넌 어느별에서 왔니? 챌린지 (문제당 5점)</h2>
            <h5>제한시간안에 분리된 이목구비만 보고 누구인지 맞춰 주세요.</h5>     
            </div>
            </>
            ):(<>
             
             
            <div style={{backgroundColor: '#bbe4e9', fontWeight: '1000', padding:'10px', borderRadius: '20px'}} className={style.bodyComponents}>
            <div className={style.missionHeader}>
            <h3>Mission 5 (필수미션)</h3>
            <div >    
                <Image
                src="/success.png"
                alt="success"
                width={50}
                height={50}
                priority
                />  
            </div>
            </div> 
            
            <div className={style.missionBody}>
            <h2 >Clear! 획득 점수: {mission5ClearPoint}</h2>
            <h5>제한시간안에 분리된 이목구비만 보고 누구인지 맞춰 주세요.</h5>     
            </div>
            </div>
            </>
                )}

        
            <br/>
            <br/>

            {!mission6ClearPoint ? (<>
            
            <div className={style.bodyComponents}>
            <h3>Mission 6</h3>
            <h2>트릭샷 챌린지 (30점 / 최대 50점)</h2>
            <h5>제시된 포즈 중 하나 선택해서 사진을 찍고 인스타그램에 업로드하면 미션 성공!</h5>     
            </div>
            </>
            ):(<>
            
            <div style={{backgroundColor: '#bbe4e9', fontWeight: '1000', padding:'10px', borderRadius: '20px'}} className={style.bodyComponents}>
            <div className={style.missionHeader}>
            <h3>Mission 6</h3>
            <div >    
                <Image
                src="/success.png"
                alt="success"
                width={50}
                height={50}
                priority
                />  
            </div>
            </div>
            <div className={style.missionBody}>
            <h2 >Clear! 획득 점수: {mission6ClearPoint}</h2>
            <h5>제시된 포즈 중 하나 선택해서 사진을 찍고 인스타그램에 업로드하면 미션 성공!</h5>     
            </div>
            </div>
            </>
                )}

        
            <br/>
            <br/>

            {!mission7ClearPoint ? (<>
            
            <div className={style.bodyComponents}>
            <h3 style={{color: 'red'}}>Mission 7 (필수미션)</h3>
            <h2>모두의 모드 챌린지 (80점)</h2>
            <h5>AFM 기본 지식 테스트, 십자말풀이!</h5>     
            </div>
            </>
            ):(<>
             
            <div style={{backgroundColor: '#bbe4e9', fontWeight: '1000', padding:'10px', borderRadius: '20px'}} className={style.bodyComponents}>
            <div className={style.missionHeader}>
            <h3>Mission 7 (필수미션)</h3>
            <div >    
                <Image
                src="/success.png"
                alt="success"
                width={50}
                height={50}
                priority
                />  
            </div>
            </div>   
            <div className={style.missionBody}>
            <h2 >Clear! 획득 점수: {mission7ClearPoint}</h2>
            <h5>AFM 기본 지식 테스트, 십자말풀이!</h5>     
            </div>
            </div>
            </>
                )}
            

        </div>           
               
    </div>
    )}