"use client";
import {usePathname} from 'next/navigation';
import style from '@/app/entertainment/entertainment.module.css';
import BackButton from '@/app/_component/BackButton';
import Image from 'next/image';
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";
import Link from "next/link";

export default function Entertainment() {
    const pathname = usePathname();
    const parts = pathname.split("/"); 
    const title = parts[parts.length - 2];

    console.log(title);

    return (
    <div className={style.main}>
         <div className={style.header}>
                    <BackButton/>
                    <h1>2024 Global Marketing Meeting <br/>Entertainment</h1>
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
            <h3>Groups</h3>
            
            <div className={style.bodyComponents}>
                <div className={style.group}>
                <h5>Event Running Team</h5>
                Hitomi Makabe, Sun Ham, Cherie Jung, John Jun, Lina Ma, Soo Lee, Judy Kim, Jack Cha, and Eric Kim
                </div>

                <div className={style.group}>
                <h5>Group A</h5>
                Insu Kim, Xiaowei Tian, Yuya Wagatsuma, Kenneth Kang, Hyein Kim, Katie Yang, Raina Lee, Elizabeth Martinez, and Caleb Chu 
                </div>

                <div className={style.group}>
                <h5>Group B</h5>
                Takahiro Fujimoto, Shin Matsuda, Yi-Chen Lu, Haichao Guo, Katja Kiffner, Alejandro Bonilla, Brian Kim, Vamsi Bendalam, and Peter Park
                </div>

                <div className={style.group}>
                <h5>Group C</h5>
                Dr. Kim, Shun Okano, Chie Goto, Sang-Joon Cho, Jessica Kang, Eileen Shin, Cathy Lee, Xun Hao Chok, and Primrose Arcillas
                </div>
            </div>
            <br/>
            <br/>
            <h3>Day 1: Welcome Dinner</h3>
            <div className={style.bodyComponents}>

                <h5><a href='https://tabelog.com/tokyo/A1302/A130201/13156146/'>Okonomiyaki and Teppanyaki Osaka Messe Bear Tokyo​</a>​</h5>
                <div className={style.bodyComponents}>
                <p>Menu:</p> 
                <h5>Okonomiyaki</h5>
                </div>
                <Link href="https://maps.app.goo.gl/nHjjdge4TFXVtsaL6">
                <strong>Address:</strong> 100-6290Marunouchi1-11-1, Pacific Century Place Marunouchi B1F
                
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
                    src="/dinnerDay1.jpg"
                    alt="Dinner Day1"
                    width={700}
                    height={500}
                    priority
                    />
                </div>

                
            </div>
            <h3>Day 2: Shibuya Sky</h3>
            <div className={style.bodyComponents}>
            <h5>Dinner Site: <a href='https://hyoto.jp/menu/%e9%a3%b2%e3%81%bf%e6%94%be%e9%a1%8c%e4%bb%98%e3%81%8d-%e4%ba%ac%e9%83%bd%e3%81%bd%e3%83%bc%e3%81%8f-%e5%87%ba%e6%b1%81%e3%81%97%e3%82%83%e3%81%b6%e4%bc%9a%e5%b8%ad-%e7%b4%ab%e8%8d%89/'>Hyoto Shibuya​</a>​</h5>
                <div className={style.bodyComponents}>
                <h5>Kaiseki (traditional multi-course Japanese dinner)</h5>
                <p>Menu: </p>
                <h5>- Brand Pork Dashi Shabu Kaiseki Murasaki</h5>
                <h5>- Vegan Kaiseki</h5>​
                <Link href="https://maps.app.goo.gl/trkTYAS8zb2TJPU57">
                <strong>Address:</strong> Kyoto Hyoto Shabu Shabu Shibuya, 東急プラザ渋谷（渋谷フクラス 7F 1 Chome-2-3 Dogenzaka, Shibuya City, Tokyo 150-0043, Japan
                <Image
                        className={style.icon}
                        src="/map.png"
                        alt="map icon"
                        width={20}
                        height={20}
                        priority
                        />
                </Link>
                </div>
                <div className={style.imgBox}>
                    <Image
                    className={style.image}
                    src="/dinnerDay2.png"
                    alt="Dinner Day2"
                    width={700}
                    height={500}
                    priority
                    />
                    </div>
                    
                <h5><a href='https://www.shibuya-scramble-square.com.e.apy.hp.transer.com/sky/'>Shibuya Sky</a></h5>
                <strong>Admission time:</strong> 19:40-20:00​<br/>
                <strong>Schedule:</strong> ~21:30
                <div className={style.imgBox}>
                    <Image
                    className={style.image}
                    src="/ShybuyaSky.png"
                    alt="Shybuya Sky"
                    width={900}
                    height={300}
                    priority
                    />
                </div>
                <Link href="https://maps.app.goo.gl/2xpUvWi59E5iQKqs8">
                <strong>Address:</strong> 150-0002Shibuya2-24-12 Shibuya
                <Image
                        className={style.icon}
                        src="/map.png"
                        alt="map icon"
                        width={20}
                        height={20}
                        priority
                        />
                </Link>

                    
            </div>
            <br/>
            <br/>
            <h5>Schedule:</h5>
            <br/>
            <br/>
            <div className={style.bodyComponents}>
        
            <div className={style.group}>
            <Table className={style.table} aria-label="schedule table">
            <TableHeader >
                <TableColumn className={style.tableHeadColumn}>Time</TableColumn>
                <TableColumn className={style.tableHeadColumn}>Action</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1">
                <TableCell className={style.cell}>16:30</TableCell>
                <TableCell className={style.cell}>Move to Shibuya(bus)</TableCell>
                </TableRow>
                <TableRow key="2">
                <TableCell className={style.cell}>17:00</TableCell>
                <TableCell className={style.cell}>Arrival at Shubuya</TableCell>
                </TableRow>
                <TableRow key="3">
                <TableCell className={style.cell}>17:30 - 19:30</TableCell>
                <TableCell className={style.cell}>Dinner at Hyoto Shibuya</TableCell>
                </TableRow>
                <TableRow key="4">
                <TableCell className={style.cell}>19:30 - 20:00</TableCell>
                <TableCell className={style.cell}>Move to Shibuya Sky and activity time</TableCell>
                </TableRow>
                <TableRow key="5">
                <TableCell className={style.cell}>21:30</TableCell>
                <TableCell className={style.cell}>Move to TKP Shibuya(bus) and back to accommodation</TableCell>
                </TableRow>
                <TableRow key="6">
                <TableCell className={style.cell}>22:00</TableCell>
                <TableCell className={style.cell}>Arrival at accommodation</TableCell>
                </TableRow>
            </TableBody>
            </Table>

                 
                 
            </div>


            </div>

        </div>           
               
    </div>
    )}