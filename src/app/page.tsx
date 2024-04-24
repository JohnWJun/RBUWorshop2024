"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import SakuraFalls from '@/app/_component/SakuraFalls';
import { useState } from 'react';

export default function Home() {
  const [isParkyTime, setIsParkyTime] = useState(false);

  const onClickParky = () => {

      if(isParkyTime === false){
          setIsParkyTime(true)
      }else {
          setIsParkyTime(false)
      }
  }
  return (
    <main className={styles.main}>
      
      

      
      <div className={styles.center}>
      <div className={styles.centerLogBox}>
      
        <Image
          className={styles.logo}
          src="/parksystemsLogo.svg"
          alt="Park Logo"
          width={200}
          height={157}
          priority
        /> 
      
      </div>
        <h1>2024 RBU Workshop</h1>
        
        
  
      </div>
      <div className={styles.upperMenubar}>
      { isParkyTime ?(
    
      <div className={styles.showTime}>
        It is Parky time! <br/>
        Click Parky again to turn it off!
      </div>
     
      ): null}
      

      <button className={styles.parkyTime} onClick={onClickParky}><Image
                        src="/parky.svg"
                        alt="parky icon"
                        width={50}
                        height={50}
                        priority
                        /></button>
       
        </div>
      <div className={styles.grid}>
        <Link
          href="/eBook"
          className={styles.card}
        >
          <h2>
            Education<span>-&gt;</span>
          </h2>
          <p>PPTs and educational resources</p>
        </Link>

        <Link
          href="/programs"
          className={styles.card}
        >
          <h2>
            Schedule <span>-&gt;</span>
          </h2>
          <p>Check the schedule</p>
        </Link>

        {/* <Link
          href="/meal"
          className={styles.card}
        >
          <h2>
            Meal <span>-&gt;</span>
          </h2>
          <p>Lunch & Dinner menu</p>
        </Link> */}

        <Link
          href="/location"
          className={styles.card}
        >
          <h2>
            Location<span>-&gt;</span>
          </h2>
          <p>Accommodation, venues, and access</p>
        </Link>

        {/* <Link
          href="/quiz"
          className={styles.card}
        >
          <h2>
            Quiz<span>-&gt;</span>
          </h2>
          <p>Test your understanding</p>
        </Link> */}

        <Link
          href="/entertainment"
          className={styles.card}
        >
          <h2>
            Team Building<span>-&gt;</span>
          </h2>
          <p>Work on the missions with your team to get the prize</p>
        </Link>

        {/* <Link
          href="/qnA"
          className={styles.card}
        >
          <h2>
            Q&A<span>-&gt;</span>
          </h2>
          <p>Leave any questions here</p>
        </Link> */}

        {/* <Link
          href="/survey"
          className={styles.card}
        >
          <h2>
            Survey<span>-&gt;</span>
          </h2>
          <p>Please leave a meaningful message for improvement</p>
        </Link> */}
      </div>
      
       {/* <div className={styles.footer}>
        <div className={styles.contactUs}>
        <h5>Contact Us</h5>
        <div className={styles.contact}>
          <p><strong>Cherie Jung:</strong> +8210 6573 9295</p>
          
        </div>
        <div className={styles.contact}>
          <p><strong>Sun Ham: </strong> +8210 9245 0553</p>
          
         
  
        </div>
        
        <div className={styles.contact}>
          <p><strong>Hitomi Makabe: </strong> +8190 9018 4554</p>
          
      
        </div>

        </div>
        </div> */}
     
            { isParkyTime ?(<SakuraFalls/>): null}
    </main>
  );
}
