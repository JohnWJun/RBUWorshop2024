"use client";
import {usePathname} from 'next/navigation';
import style from '@/app/(modalPages)/training/training.module.css';
import BackButton from '@/app/_component/BackButton';
import Image from 'next/image';
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";
import Script from 'next/script';
import Link from 'next/link';

export default function Training() {
    

    return (
    <div className={style.main}>
         <div className={style.header}>
                    <BackButton/>
                    <h1>2024 Global Marketing Meeting <br/>Marketo Training</h1>
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
            <Link href={'/training/introduction'}><h3>Introduction: Lead Journey with Marketo</h3></Link>
            <Link href={'/training/training1'}><h3>Training Session #1: </h3></Link>
            <Link href={'/training/training2'}><h3>Training Session #2: </h3></Link>
            <Link href={'/training/training3'}><h3>Training Session #3: </h3></Link>
            
            <div className={style.bodyComponents}>
                

                
                {/* <Script
                    src="//pages.parksystems.com/js/forms2/js/forms2.min.js"
                    strategy="afterInteractive"
                    onLoad={() => {
                    // @ts-ignore
                    MktoForms2.loadForm("//pages.parksystems.com", "988-FTP-549", 2508);
                    }}
                />
                <form id="mktoForm_2508"></form> */}
                

                

                <div className={style.group}>
                <h5></h5>
                </div>
            </div>
            


        

        </div>           
    </div>       

)}