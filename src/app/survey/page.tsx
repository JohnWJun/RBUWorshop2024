"use client";
import {usePathname} from 'next/navigation';
import {useState} from 'react';
import style from './survey.module.css';
import BackButton from '@/app/_component/BackButton';
import Image from 'next/image';


export default function Quiz() {
    const [day1Open, setDay1Open] = useState(true);
    const [day2Open, setDay2Open] = useState(false);
    const [day3Open, setDay3Open] = useState(false);

    
    const day1OpenClickOpen = () => {
        setDay1Open(true);
        setDay2Open(false);
        setDay3Open(false);
    };
    
    const day2OpenClickOpen = () => {
        setDay1Open(false);
        setDay2Open(true);
        setDay3Open(false);  
    };
    const day3OpenClickOpen = () => {
        setDay1Open(false);
        setDay2Open(false);
        setDay3Open(true);  

    };
    const onClickCloseForm =() =>{
        setDay1Open(false);
        setDay2Open(false);
        setDay3Open(false);
    }

    return (
    <div className={style.main}>
         <div className={style.header}>
                    <BackButton/>
                    <h1>2024 Global Marketing Meeting <br/>Surveys</h1>
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
                        
                                <button onClick={day1OpenClickOpen}>
                                    Day1 Survey
                                </button>
                         
                                <button onClick={day2OpenClickOpen}>
                                    Day2 Survey
                                </button>
                         
                                <button onClick={day3OpenClickOpen}>
                                    Day3 Survey
                                </button>
        
        </div>

       
                    <div className={style.formSection}>
                    {day1Open && 
                    
                        <div className={style.iframeBox}>
                            <iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=3MQ0dk6aFUaTLpn2gUcdknDtY1ThZb1IrmWKCPATKcZUOVoxNEk5WFpUT0E2WFhaQVVIVEhGSFY4WC4u&embed=true"> </iframe>
                        </div>
                        
                        }
                    </div>

       
                    <div className={style.formSection}>
                    {day2Open && 
                    
                        <div className={style.iframeBox}>
                            <iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=3MQ0dk6aFUaTLpn2gUcdknDtY1ThZb1IrmWKCPATKcZUNkkxTERRR0FHOUQwS1QxMFpHUzFJMEQwOS4u&embed=true"> </iframe></div>
                        
                        }
                    </div>


        
                    <div className={style.formSection}>
                    {day3Open && 
                    
                        <div className={style.iframeBox}>
                        <iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=3MQ0dk6aFUaTLpn2gUcdknDtY1ThZb1IrmWKCPATKcZUQ0NJWFUxUEdUODhBUFpYN1NETEpaWklBTS4u&embed=true"> </iframe>    
                        </div>
                        
                        }
                    </div>
    </div>
    )}