"use client";
// Importing necessary libraries
import { useState } from 'react';
import style from '@/app/_component/roll.module.css';
import {useRouter} from "next/navigation";


export default function Roll(){
    // Define prizes
const prizes = ['iPhone', 'iPad', 'Apple Watch', 'MacBook', 'AirPods'];
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
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1024 1024"><path fill="#000000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
                    </button>
                </div>
                    <div className={style.modalBody}>
                    <button className={style.drawButton} onClick={handleLuckyDraw}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 1024 1024" version="1.1"><path d="M905.77 793.161H99.172c-35.017 0-63.4 28.383-63.4 63.396v4.884c0 35.015 28.383 63.397 63.4 63.397H905.77c35.014 0 63.391-28.383 63.391-63.397v-4.884c-0.001-35.013-28.378-63.396-63.391-63.396z" fill="#6277BA"/><path d="M786.812 373.441l-3.61-2.742c-27.948-21.226-67.743-15.777-88.9 12.172L415.283 751.612c-21.145 27.948-15.639 67.808 12.304 89.032l3.61 2.742c27.943 21.237 67.744 15.776 88.891-12.178l279.028-368.725c21.146-27.953 15.639-67.822-12.304-89.042z" fill="#F0D043"/><path d="M970.852 329.401c0 87.741-71.131 158.878-158.879 158.878-87.741 0-158.878-71.137-158.878-158.878 0-87.747 71.137-158.878 158.878-158.878 87.748 0 158.879 71.131 158.879 158.878z" fill="#E5594F"/></svg>
                    </button>
                    {isRolling && 
                        <div className={style.rolling}>
                            <iframe src="https://lottie.host/embed/4be7cdfe-fe8c-436a-8bee-14deb2d08ac3/75foCJrrAh.json"></iframe>
                        </div>
                    }
                    {winner && !isRolling && 
                    <div className={style.winner}>Congratulations! <br/>The prize is... <br/><br/><h4>{winner}</h4>
                    </div>}
                    </div>
                
            </div>
        </div>
    )
}