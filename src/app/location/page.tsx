"use client";
import {usePathname} from 'next/navigation';
import style from '@/app/location/location.module.css';
import BackButton from '@/app/_component/BackButton';
import Image from 'next/image';
import Link from "next/link";


export default function Location() {
    const pathname = usePathname();
    const parts = pathname.split("/"); 
    const title = parts[parts.length - 2];

    console.log(title);

    return (
    <div className={style.main}>
         <div className={style.header}>
                    <BackButton/>
                    <h1>숙소 정보</h1>
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
           
            <h3>Lunch</h3>
            <div className={style.bodyComponents}>
                    
                <h5>설악막국수춘천닭갈비</h5>
                <Link href="https://naver.me/FENynThz">
                <strong>주소:</strong> 경기 가평군 설악면 신천중앙로 159 
                <Image
                        className={style.icon}
                        src="/map.png"
                        alt="map icon"
                        width={20}
                        height={20}
                        priority
                        />
                </Link>
                <div className={style.imgBox}>
                    <Image
                    className={style.image}
                    src="/Lunch.jpg"
                    alt="lunch"
                    width={800}
                    height={400}
                    priority
                    />
                    </div>
                <br/>
                <br/>
                    
            </div>
            <h3>무아레리조트</h3>
            <div className={style.bodyComponents}>
                <Link href="https://naver.me/GxN87aDp">
                <strong>주소:</strong> 경기 가평군 청평면 북한강로1636번길 34
                <Image
                        className={style.icon}
                        src="/map.png"
                        alt="map icon"
                        width={20}
                        height={20}
                        priority
                        />
                </Link>
                <div className={style.imgBox}>
                    <Image
                    className={style.image}
                    src="/Accommodation.jpg"
                    alt="resort"
                    width={800}
                    height={400}
                    priority
                    />
                    </div>
                   
            </div>
            <br/>
            <br/>
    </div>
</div>
    )}