"use client";
// Importing necessary libraries
import { useState } from 'react';
import style from '@/app/_component/roll.module.css';
import {useRouter} from "next/navigation";


export default function Roll(){
    // Define prizes
    const prizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45'];

    const [winner, setWinner] = useState<string | null>(null);
    const [isRolling, setIsRolling]= useState<boolean | null>(false);
    const router = useRouter();
    const onClickBack = () => {
        router.back();
    };
    const handleLuckyDraw = () => {
        const randomIndex = Math.floor(Math.random() * prizes.length);
        const prize = prizes[randomIndex];
        // Show loading state while waiting for the result
        setWinner("Rolling...");
        setIsRolling(true);
        // Simulate a delay before displaying the result
        setTimeout(() => {
            setWinner(prize);
            setIsRolling(false);
        }, 5000); // Adjust the delay time as needed (in milliseconds)
    };
    

    return(
        <div className={style.modalBackground}>
            <div className={style.modal}>
                <div className={style.modalHeader}>
                    <button onClick={onClickBack} className={style.closeButton}>
                    <svg width={24} viewBox="0 0 24 24" aria-hidden="true"
                 className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03">
                <g>
                    <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
                </g>
            </svg></button>
                </div>
                    <div className={style.modalBody}>
                        {!winner && <> 
                        <h2>행운의 당첨자는 과연?</h2>
                        <br/>
                        <br/>
                        </>
                        }
                        
                    <button className={style.drawButton} onClick={handleLuckyDraw}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 1024 1024" version="1.1"><path d="M905.77 793.161H99.172c-35.017 0-63.4 28.383-63.4 63.396v4.884c0 35.015 28.383 63.397 63.4 63.397H905.77c35.014 0 63.391-28.383 63.391-63.397v-4.884c-0.001-35.013-28.378-63.396-63.391-63.396z" fill="#6277BA"/><path d="M786.812 373.441l-3.61-2.742c-27.948-21.226-67.743-15.777-88.9 12.172L415.283 751.612c-21.145 27.948-15.639 67.808 12.304 89.032l3.61 2.742c27.943 21.237 67.744 15.776 88.891-12.178l279.028-368.725c21.146-27.953 15.639-67.822-12.304-89.042z" fill="#F0D043"/><path d="M970.852 329.401c0 87.741-71.131 158.878-158.879 158.878-87.741 0-158.878-71.137-158.878-158.878 0-87.747 71.137-158.878 158.878-158.878 87.748 0 158.879 71.131 158.879 158.878z" fill="#E5594F"/></svg>
                    </button>
                    {isRolling && 
                        <div className={style.rolling}>
                            <iframe src="https://lottie.host/embed/4be7cdfe-fe8c-436a-8bee-14deb2d08ac3/75foCJrrAh.json"></iframe>
                        </div>
                    }
                    <br/>
                    <br/>
                    {winner && !isRolling && 
                    <div className={style.winner}>Congratulations! <br/>행운의 당첨자는!... <br/><br/><h4>{winner}번</h4>
                    </div>}
                    </div>
                
            </div>
        </div>
    )
}