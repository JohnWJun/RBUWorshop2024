"use client";
import {usePathname} from 'next/navigation';
import style from './meal.module.css';
import BackButton from '@/app/_component/BackButton';
import Image from 'next/image';
import { useState } from 'react';


export default function Quiz() {

    const [day1Open, setDay1Open] = useState(false);
    const [day2Open, setDay2Open] = useState(false);


    
    const day1OpenClickOpen = () => {
        setDay1Open(true);
        setDay2Open(false);
    };
    
    const day2OpenClickOpen = () => {
        setDay2Open(true);
        setDay1Open(false);
    };
  
   

    return (
    <div className={style.main}>
         <div className={style.header}>
                    <BackButton/>
                    <h1>2024 Global Marketing Meeting <br/>Lunch Menu</h1>
                        <Image
                        className={style.logo}
                        src="/parksystemsLogo.svg"
                        alt="Park Logo"
                        width={180}
                        height={37}
                        priority
                        />
        </div>
                <div className={style.buttonSection}>
                        {!day1Open &&
                                <button onClick={day1OpenClickOpen}>
                                    Day1
                                </button>
                            }
                            </div>
                    <div className={style.formSection}>
                    {day1Open && 
                    <>
                     <h2>Day1 Menu:</h2>
                        <div className={style.menuBox}>
                           
                            <div className={style.optionBox}>
                                <h4>Option 1: Fries Combo Lunch box</h4>
                                <Image
                                className={style.menu}
                                src="/day1lunch1.jpg"
                                alt="day1 lunch1"
                                width={250}
                                height={200}
                                priority
                                />
                                </div>
                                <div className={style.optionBox}>
                                <h4>Option 2: Silver Salmon Grilled with Salt & Mixed Fried Lunch Box</h4>
                                <Image
                                className={style.menu}
                                src="/day1lunch2.jpg"
                                alt="day1 lunch2"
                                width={250}
                                height={200}
                                priority
                                />
                                </div>
                                <div className={style.optionBox}>
                                <h4>Option 3: Ginger-yaki Lunch Box</h4>
                                <Image
                                className={style.menu}
                                src="/day1lunch3.jpg"
                                alt="day1 lunch3"
                                width={250}
                                height={200}
                                priority
                                />
                                </div>
    
                                </div>
                                </>
                        }
                    </div>
        
                    <div className={style.buttonSection}>
                        {!day2Open &&
                                <button onClick={day2OpenClickOpen}>
                                    Day2
                                </button>
                            }
                            </div>
                    <div className={style.formSection}>
                    {day2Open && 
                    <>
                    <h2>Day2 Menu:</h2>
                        <div className={style.menuBox}>
                            <div className={style.optionBox}>
                                <h4>Option 1: Deep-fried and Grilled Salmon Lunch Box</h4>
                                <Image
                                className={style.menu}
                                src="/day2lunch1.jpg"
                                alt="day2 lunch1"
                                width={250}
                                height={200}
                                priority
                                />
                                </div>
                                <div className={style.optionBox}>
                                <h4>Option 2: Karaage & Teriyaki Hamburg Lunch Box</h4>
                                <Image
                                className={style.menu}
                                src="/day2lunch2.jpg"
                                alt="day2 lunch2"
                                width={250}
                                height={200}
                                priority
                                />
                                </div>
                                <div className={style.optionBox}>
                                <h4>Option 3: Chicken Deluxe Lunch Box</h4>
                                <Image
                                className={style.menu}
                                src="/day2lunch3.jpg"
                                alt="day2 lunch3"
                                width={250}
                                height={200}
                                priority
                                />
                                </div>
                
                                </div>
                                </>
                        }
                    </div>
                

    </div>
    )}