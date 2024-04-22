"use client";
import style from '@/app/eBook/eBook.module.css';
import Link from 'next/link';
import { useState } from 'react';
import BackButton from '@/app/_component/BackButton';
import Image from 'next/image';

export default function Ebook() {

    const [day1Open, setDay1Open] = useState(false);
    const [day2Open, setDay2Open] = useState(false);
    const [day3Open, setDay3Open] = useState(false);
    
    const day1OpenClickOpen = () => {
        setDay1Open(true);
    };
    const day1OpenClickClose = () => {
        setDay1Open(false);
    };
    const day2OpenClickOpen = () => {
        setDay2Open(true);
    };
    const day2OpenClickClose = () => {
        setDay2Open(false);
    };
    const day3OpenClickOpen = () => {
        setDay3Open(true);
    };
    const day3OpenClickClose = () => {
        setDay3Open(false);
    };
    
    return (
    <div className={style.main}>
        
        <div className={style.header}>
        <BackButton/>
            <h1>Keynote Speech & Education</h1>
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
            {/* instruction */}
            <div className={style.howToUse}>
                *Please click the each title to download the eBook(PPTs)
            </div>
            &nbsp;
            {/* Day 1 */}
            <div className={style.day1}>
                <div className={style.dayHeader}>
                 <h2>Day 1: Marketing Strategy and Plan</h2>
                 {!day1Open ? (
                    <button onClick={day1OpenClickOpen}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                            <path d="M7 10L12 15L17 10" stroke="#000000" />
                        </svg>
                    </button>
                ) : (
                    <button onClick={day1OpenClickClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z" fill="#000000"/>
                        </svg>
                    </button>
                )}

                </div>
                &nbsp;
                
            { day1Open === true &&   
                    <ul>
                    <h4 className={style.daySubTitle}>HQ Highlights</h4>
                    &nbsp;
                    <li>
                    <button>
                        <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/EWK51mTYViRLvBCpuFRhoAwBuF1KO42uHs7q8DCaK9eWnw?e=RSa6WA'}><h4>Keynote Speech</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/KeynoteSpeech/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/EXGGr2zVUCpAmT4zXbVKgskB1SbAqlFtrYIvApWxKZXqzw?e=xpQTaE'}><h4>HQ Marketing Overview</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/MarketingOverview/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    &nbsp;
                    <h4  className={style.daySubTitle}>Global Digital Marketing Overview​</h4>
                    &nbsp;
                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/EYtDHBEyfeNEm1_x-_u9TYQB2cb0qbbAsXWPGyEtiNm3PA?e=YOm8vA'}><h4>Global Digital Marketing Overview</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/GDMOverview/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/ERwcHrse72RClBWX1eHqfUUBmoNuoPXkW2W2DXtR0nd1Lg?e=UsGhRG'}><h4>Global Campaigns Overview</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/GCOverview/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/EWSVMYSqhFdOv_mBqGiaseIBKeK_vnXxPVvQYgeUaEGOmw?e=dqib7C'}><h4>Social Media & Paid Media Strategy​</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/GCOverview/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    &nbsp;
                    <h4 className={style.daySubTitle}>Accurion Product & Marketing Overview</h4>
                    &nbsp;
                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/EQ18WEjqRFVIlR4OiJA2ey4B6jIgyQgLXR5GtRIjLUbOEg?e=sMENBo'}><h4>ISE Product & Marketing Overview</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/ISE/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    &nbsp;
                    <h4 className={style.daySubTitle}>Corporate Marketing Plan</h4>
                    &nbsp;
                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/ESwZVtu5bdRLsMaTnOmULl8BtkLmtjBYrgIyZ3Rky5DuMQ?e=TJSJ8M'}><h4>Corporate Marketing Overview</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/corporateMktOverview/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/EZkot-v0M_NHsVc7dvpYTGMBF1bl1dXgFbaCLNKd-1_T8w?e=xwNelq'}><h4>All-New Global Website: How Can It Be Used?</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/newWebsiteHowToUse/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/EW-g6Q9zjOtGi5OpB0GG8MoBeZULMIIuv7Q-lKOd-RyQeg?e=S7l1PX'}><h4>Digitization and Centralization of Park Assets</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/parkAssets/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/EfOXrOD6trZGmyB8bBzUkOIBCC5oQP11vq94Wdn7zPqUEw?e=xm3C5j'}><h4>PPT Template Guide</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/templateGuide/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    &nbsp;
                    <h4 className={style.daySubTitle}>RE Sales Technical Marketing Strategy</h4>
                    &nbsp;

                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/EX3GaGg8F8NJqTJXrBr5598BqJdH28h0oVAjeCOyv939QQ?e=QTyAXR'}><h4>Common Goal: To Turn Prospects Into Customers</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/commonGoal/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/EYXF9ynyJKJJg_G7JqIh9jIBrZgM9-UE74WfbKtSPIfMGA?e=40Qwvd'}><h4>Technical Marketing and Product Plan</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/productPlan/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                
                    </ul>}
            </div>
            
            {/* Day 2 */}
            <div className={style.day2}>
                <div className={style.dayHeader}>
                 <h2>Day 2: NANOscientific Events ​Workshop & Marketing Tactic</h2>
                 {!day2Open ? (
                    <button onClick={day2OpenClickOpen}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                            <path d="M7 10L12 15L17 10" stroke="#000000" />
                        </svg>
                    </button>
                ) : (
                    <button onClick={day2OpenClickClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z" fill="#000000"/>
                        </svg>
                    </button>
                )}

                </div>
                &nbsp;
                
            { day2Open === true &&   
                    <ul>
                    <h4 className={style.daySubTitle}>Marketing Insight</h4>


                    &nbsp;
                    <li>
                    <button>
                        <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/EUXNHnXdgPVIl_Ih6478MUwB_oeCVFvSSPXvOYwDhydrLA?e=9PgJXF'}><h4>Marketing Trend (from Adobe Summit)</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/marketingTrend/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/EcF827pGiMtInN9PexYj6bwBZsD063aQB_c7dk_MBLMWCQ?e=WP0UBu'}><h4>Regional Marketing Best Known Method - PSG</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/bestKnownMethod/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    <li>
                    <button>
                    <Link href={'/'}><h4>HQ X Regional Collaboration - PSI</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/HQRegionalCollab/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    &nbsp;
                    <h4 className={style.daySubTitle}>NANOscientific Branding</h4>
                    &nbsp;
                    <li>
                    <button>
                    <Link href={'/'}><h4>NANOscientific Rebranding</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/NANOscientificRebranding/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/ER-uJomXDzNOpJ3G4l1pMHEBcH5Fi7Os15noqR6obWpONw?e=KEuR8G'}><h4>NANOscientific Events Video Guide</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/symposiumVideoGuide/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/Ed3qkyU9Ry9Csh3bF2oMYyUB905XijzAIzItyzqtJBrPcQ?e=Z8o2cm'}><h4>NANOscientific Web Digital Check-In</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/NANOscientificWeb/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                 
                   
                    

                    &nbsp;
                    <h4 className={style.daySubTitle}>2024 NANOscientific Event Plan - Regional</h4>
                    &nbsp;
                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/EWelRVLfhvROosKieqVaIeABDrCRUSHN9baNqJ-7_9BUdA?e=vNLZQP'}><h4>NANOscientific Marketing Framework Overview </h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/NSSFrameworkOverview/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>
                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/EY2lfebD9-lMuE-k9MkKFLEBnOXBLLs8UGEpsgfHZX-DXA?e=f9gG0Y'}><h4>NSS America (PSI)</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/PSI/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/EY1s6UTgj65HrNnNV6fxYtYB3k_6tO_2Sn1y960RMQ1Log?e=utzJuD'}><h4>NSF Europe (PSE)</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/PSE/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/EZMLpETnkXFCrr1RQRPLL8gBl3fuVV-jUknuAFDZZUPFFA?e=DPMeEJ'}><h4>NSS Japan (PSJ)</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/PSJ/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/ESWjXZC5QNxJuPXGKOjcYgwBL-5cZEy1BRcT6GK99dbs6Q?e=JAq1SW'}><h4>NSS China (PSG)</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/PSG/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/ESCuvEBE9p5LvGKwb-yRregByzbDJWxeL4MGgwPNxJJNwQ?e=XgmrTX'}><h4>NSS Korea (PSK)</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/PSK/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/ETIO2zuU4dBMlHhsmx48ag4BECz5wEPTbOd180Z4Emq1LA?e=mCz8BV'}><h4>NSS Asia (PSS)</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/PSS/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>

                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/EdHyitYL6fZHi2D1O4DB2VMB2G-a-ejGCgpkO2EKdSFmFg?e=3ACOzk'}><h4>NSS Asia 2023 Quick Review (PSIN)</h4></Link>
                    </button>
                    {/* <button>
                        <Link href={'eBook/PSIndia/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button> */}
                    </li>
                    </ul>}
            </div>
       
       {/* Day 3 */}
       <div className={style.day3}>
                <div className={style.dayHeader}>
                 <h2>Day 3: Lead & Marketo Training</h2>
                 {!day3Open ? (
                    <button onClick={day3OpenClickOpen}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                            <path d="M7 10L12 15L17 10" stroke="#000000" />
                        </svg>
                    </button>
                ) : (
                    <button onClick={day3OpenClickClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z" fill="#000000"/>
                        </svg>
                    </button>
                )}

                </div>
                &nbsp;
                
            { day3Open === true &&   
                    <ul>
                    <h4 className={style.daySubTitle}>Marketo Introduction</h4>
                    &nbsp;
                    <li>
                    <button>
                        <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/EeGnt3mFm61NpmiaZP0KY10BQbEHRP73d8PQ5twRthzYYw?e=Riieso'}><h4>Lead Management - Marketo / Lead journey </h4></Link>
                    </button>
                    <button>
                        <Link href={'eBook/marketoAndLeadJourney/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button>
                    </li>

                    &nbsp;
                    <h4 className={style.daySubTitle}>Marketo Training</h4>
                    &nbsp;
                    <li>
                    <button>
                    <Link href={'/'}><h4>Marketo Training Session #1 – Event</h4></Link>
                    </button>
                    <button>
                        <Link href={'eBook/training1/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button>
                    </li>

                    <li>
                    <button>
                    <Link href={'https://parkafm-my.sharepoint.com/:p:/g/personal/sun_ham_parksystems_com/EfrxIk2PNo1Ftzz_b5IpQSABL-FH3HAqm3AXLK9oGSmOQQ?e=IhcUPK'}><h4>Marketo Training Session #2 – Webinar</h4></Link>
                    </button>
                    <button>
                        <Link href={'eBook/training2/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button>
                    </li>

                    <li>
                    <button>
                    <Link href={'/'}><h4>Marketo Training Session #3 – Marketing Performance Insight</h4></Link>
                    </button>
                    <button>
                        <Link href={'eBook/training3/quiz'}>
                        <h5>Quiz</h5>
                        </Link>
                    </button>
                    </li>
                    </ul>}
            </div>
        </div>
        
    </div>)}