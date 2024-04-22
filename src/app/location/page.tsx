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
                    <h1>2024 Global Marketing Meeting <br/>Location</h1>
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
           
            <br/>
                <br/>
            <h3>Park Systems Japan Inc.</h3>
                <Link href="https://maps.app.goo.gl/YcXf7aQTrX4Pgr5p6">
                <strong>Address: </strong> 1-17-1 Kanda Nishiki-cho, Chiyoda-ku,
                Tokyo 101-0054, Japan
                <Image
                        className={style.icon}
                        src="/map.png"
                        alt="map icon"
                        width={20}
                        height={20}
                        priority
                        />
                </Link>
                <br/>
                <br/>
            <h3>Accommodation</h3>
            <div className={style.bodyComponents}>
                <h5>Sotetsu Fressa-in Kanda Otemachi​</h5>
                <Link href="https://maps.app.goo.gl/9WSNnDQb9DVsa2Bp7">
                <strong>Address:</strong> 101-0047Tokyo2-8-4 Uchikanda, Chiyoda-ku
            
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
                    src="/Accommodation.png"
                    alt="Venue Map"
                    width={800}
                    height={300}
                    priority
                    />
                    </div>
                   
            </div>
            <br/>
                <br/>
            <h3>Venue</h3>
            <div className={style.bodyComponents}>
                    
                <h5>Otemachi Place Hall & Conference</h5>
                <Link href="https://maps.app.goo.gl/EbZXnU4zkqSTsxJf8">
                <strong>Address:</strong> 2-3-1 Otemachi, Chiyoda-ku, Tokyo​
                <Image
                        className={style.icon}
                        src="/map.png"
                        alt="map icon"
                        width={20}
                        height={20}
                        priority
                        />
                </Link>
                <br/>
                <br/>
                <strong>Meeting Room:</strong> Conference Room 105
                <div className={style.imgBox}>
                    <Image
                    className={style.image}
                    src="/Venue_map-1.png"
                    alt="Venue Map"
                    width={800}
                    height={600}
                    priority
                    />
                </div>

                
                <br/>
                    
            </div>
            <br/>
                <br/>
            <h3>Access</h3>
        <div className={style.bodyComponents}>
            <h5>Haneda Airport - Kanda Station</h5>
            <div className={style.group}>
                <h5>Route1: Train (total 670 Yen)​</h5>
                 
                 <Image
                    className={style.image}
                    src="/route1.png"
                    alt="Route 1"
                    width={800}
                    height={600}
                    priority
                    />
            </div>

            <div className={style.group}>
                <h5>Route2: Bus – Train (total 1150 Yen)​</h5>
                ※ need to purchase bus ticket in advance <br/><br/>
                ※ cash or IC card only acceptable (No Credit Card) <br/><br/>
                <button><a href='https://www.keikyu-bus.co.jp/en/airport/h-tokyo/'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 -2 20 20">
                <g id="bus-left" transform="translate(-2 -3.997)">
                    <path id="secondary" fill="#2ca9bc" d="M3,11H21v5a1,1,0,0,1-1,1H19a2,2,0,0,0-4,0H9a2,2,0,0,0-4,0H4a1,1,0,0,1-1-1V11Z"/>
                    <path id="primary" d="M4.91,17H4a1,1,0,0,1-1-1V10.85L4.77,5.68a1,1,0,0,1,1-.68H20a1,1,0,0,1,1,1V16a1,1,0,0,1-1,1h-.91" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    <path id="primary-2" data-name="primary" d="M3,11H21m-6.08,6H9.06M15,5H9v6h6Zm0,12a2,2,0,1,0,2-2A2,2,0,0,0,15,17ZM5,17a2,2,0,1,0,2-2A2,2,0,0,0,5,17Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </g>
                </svg>
                    </a></button><br/><br/>
                <Image
                    className={style.image}
                    src="/route2.png"
                    alt="Route 2"
                    width={800}
                    height={600}
                    priority
                    />
            </div>

            <div className={style.group}>
                <h5>Route3: Taxi (total approx. 7500 Yen)​​</h5>
            </div>
            <div className={style.group}>
            <h5>Kanda station - Accommodation</h5>
            <strong>Access:</strong> 3-minute walk from JR Kanda station
                    <div className={style.imgBox}>
                    <Image
                    className={style.image}
                    src="/AccommodationAccess.png"
                    alt="Access To Hotel"
                    width={500}
                    height={300}
                    priority
                    />
                    </div>
                    <div className={style.imgBox}>
                    <Image
                    className={style.image}
                    src="/AccommodationAccessDirection.png"
                    alt="Access To Hotel_Direction"
                    width={900}
                    height={600}
                    priority
                    />
                    </div>
            </div>
            <div className={style.group}>
            <h5>Accommodation - Venue</h5>
            <strong>Access:</strong> 10-minute walk to Venue <br/><br/>
            <strong>Meeting Place:</strong> 1F Lobby​ <br/><br/>
            <strong>Meeting Time:</strong> Day 1: 9:30, Day 2: 9:00, Day3: 9:00<br/><br/>
                    <div className={style.imgBox}>
                    <Image
                    className={style.image}
                    src="/AccommodationToVenue.png"
                    alt="Access To Venue"
                    width={500}
                    height={700}
                    priority
                    />
                    </div>
                    
           
            </div>

            
        </div>             
    </div>
</div>
    )}