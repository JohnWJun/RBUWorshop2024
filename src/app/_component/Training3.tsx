"use client";
// Importing necessary libraries
import { useState } from 'react';
import style from '@/app/_component/training2.module.css';
import {useRouter} from "next/navigation";
import Image from 'next/image';

export default function Training2(){
    const router = useRouter();
    const [page, setPage] = useState(1);


const onClickClose =() => {

}
const onClickNext = () => {
    if(page >0){
    setPage((prevPage)=>prevPage+1);
    }
}
const onClickPrev = () => {
    if(page >0){
    setPage((prevPage)=>prevPage-1);
}
}
    const onClickBack = () => {
        router.back();
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

                    {page ===1 &&(
                    
                    <div className={style.group}>
                    <h4>Step1: Foldering</h4>
                    &nbsp;
                    &nbsp;
                    <div className={style.description}>
                    Your lead journey with Marketo begins here. You may arrive at our website through various channels such as SNS advertisements and web magazines. Once here, you may freely explore the site until you stumble upon something that piques your interest.
                    </div>

                    <h5>Channels:</h5>
                    &nbsp;
                    <ul>
                        <li>Paid Media</li>
                        <li>Paid Search</li>
                        <li>SNS</li>
                        <li>Webinar</li>
                        <li>etc</li>
                    </ul>
                    <div className={style.imgBoxVer}>
                    <Image
                    className={style.logo}
                    src="/foldering.png"
                    alt="foldering pic"
                    width={800}
                    height={220}
                    priority
                    />
                    <div className={style.imgBoxHor}>
                    <Image
                    className={style.logo}
                    src="/introPic2.png"
                    alt="introPic2"
                    width={400}
                    height={800}
                    priority
                    />
                    <Image
                    className={style.logo}
                    src="/introPic3.png"
                    alt="introPic3"
                    width={450}
                    height={800}
                    priority
                    />
                    </div>
                    </div>
                    </div>
                    )}
                    {page ===2 &&(
                    
                    <div className={style.group}>
                    <h4>Step2: Known</h4>
                    <div className={style.description}>
                                        
                    You may find yourself here when you come across compelling information that you&apos;re eager to download. In our Marketo system, customer leads are primarily captured through minimal effort, typically via form submissions. 
                    Of course, leads obtained from regional offline events are manually entered into the Marketo DB. 
                    Regardless of the channel through which leads are acquired, they are automatically saved in the Marketo DB based on the email provided by the customers.</div>

                    <h5>Channels:</h5>
                    &nbsp;
                    <ul>
                        <li>Inquiries(Form Submission)</li>
                        <li>Brochure Download(Form Submission)</li>
                        <li>List Importing</li>
                        <li>etc</li>
                    </ul>
                    &nbsp;
                    <h5>Try this!</h5>
                    &nbsp;
                    <div className={style.iframeBox}>
                    <iframe src='https://pages.parksystems.com/Marketing-Meeting-Marketo-Training_02-LP---Download.html'> </iframe>
                    <button>
                        <a href='https://app-sn06.marketo.com/?satellite=1#SL1122B2!' target="_blank">
                            
                                <svg width={26} viewBox="0 0 24 24" aria-hidden="true"
                                     className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e">
                                    <g>
                                        <path
                                            d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                                    </g>
                                </svg>
                                <h5>See the result</h5>
                        </a>
                    </button>
                    
                    </div>
                    &nbsp;
                    
                    </div>
                    
                    )}
                    {page ===3 &&(
                    <div className={style.group}>
                    <h4>Step3: Engaged</h4>
                    <h5>Nurturing Leads</h5>
                    &nbsp;
                    <div className={style.description}>
                    Once customers&apos; leads are captured and saved in the Marketo DB, Marketo&apos;s nurturing program begins to manage and cultivate these leads until they reach MQL, SAL, SQL, and eventually become actual customers.
                    This is where Marketo&apos;s powerful automated nurturing system truly shines. Marketo adjusts leads&apos; scores based on their actions on the website, such as downloading brochures, attending webinars, or making inquiries. 
                    According to the scoring policy set by marketers, Marketo adds or subtracts from the score to determine if a lead has the potential to become a customer. Marketable leads are nurtured through various marketing methods, such as newsletters or email ads, 
                    until they reach a certain score considered as SAL. Once a lead&apos;s score exceeds the set threshold, Marketo automatically sends these leads to the Sales team (SalesForce DB).
                    </div>

                    &nbsp;
                    <h5>Scenario #1: sales Inquiry</h5>
                    &nbsp;
                    <div className={style.iframeBox}>
                    <iframe src='https://pages.parksystems.com/Marketing-Meeting-Marketo-Training_02-LP---Sales-Inquiry.html'> </iframe>
                    </div>
                    
                    

                    &nbsp;
                    <h5>Scenario #2: Webinar Register</h5>
                    &nbsp;
                    <div className={style.iframeBoxLong}>
                    <iframe src='https://pages.parksystems.com/Marketing-Meeting-Marketo-Training_03-Webinar-Registration-LP.html'> </iframe>
                    
                    <button>
                        <a href='https://app-sn06.marketo.com/?satellite=1#SL1122B2!' target="_blank">
                            
                                <svg width={26} viewBox="0 0 24 24" aria-hidden="true"
                                     className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e">
                                    <g>
                                        <path
                                            d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                                    </g>
                                </svg>
                                <h5>See the result</h5>
                        </a>
                    </button>
                    </div>

                    
                    </div>
                    )}
                    {page ===4 &&(
                    <div className={style.group}>
                    <h4>Step4: Recycled</h4>
                    <h5>Re-nurturing Leads</h5>
                    &nbsp;
                    <div className={style.description}>
                    When a potential customer is identified, they&apos;re initially labeled as a Marketing Qualified Lead (MQL) and passed to the Sales Department. 
                    Upon reaching the Sales team, they become a Sales Accepted Lead (SAL), indicating interest in a purchase. However, this interest isn&apos;t guaranteed, and if the lead decides against purchasing, 
                    they&apos;re recycled back to the Marketing Team for further engagement and nurturing with compelling content.
                    </div>
                    <div className={style.imgBoxVer}>
                    <Image
                    className={style.logo}
                    src="/recycling.jpg"
                    alt="recycling"
                    width={1000}
                    height={350}
                    priority
                    />
                    </div>
                    </div>
                    )}
                    {page ===5 &&(
                    <>
                    </>
                    )}
                    {page ===6 &&(
                    <>
                    </>
                    )}
                    {page ===7 &&(
                    <>
                    </>
                    )}
                    
                    </div>
                    <div className={style.modalFooter}>
                    <div className={style.seeMoreButtonSection}>
                    <button disabled={page===1} className={style.seeMoreButton} onClick={onClickPrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                        <polyline fill="none" stroke={page !== 1 ? "#000000" : "#e3e3e3"}  strokeWidth="2" points="7 2 17 12 7 22" transform="matrix(-1 0 0 1 24 0)" />
                    </svg>
                    </button>
                    <button disabled={page===4} className={style.seeMoreButton} onClick={onClickNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill={page !== 4 ? "#000000" : "#e3e3e3"} height="20px" width="20px" version="1.1" id="XMLID_287_" viewBox="0 0 24 24" >
                    <g id="next"><g>
                    <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12   "/></g></g>
                    </svg>
                    </button>
                    </div>
                        
                    </div>
                    </div>
        </div>
    )
}