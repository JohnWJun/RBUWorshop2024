"use client";
import {usePathname} from 'next/navigation';
import style from './quiz.module.css';
import BackButton from '../../../_component/BackButton';
import Image from 'next/image';


export default function Quiz() {
    const pathname = usePathname();
    const parts = pathname.split("/"); 
    const title = parts[parts.length - 2];

    console.log(title);

    return (
    <div className={style.main}>
         <div className={style.header}>
                    <BackButton/>
                        <h1>Quiz</h1>
                        <Image
                    className={style.logo}
                    src="/parksystemsLogo.svg"
                    alt="Park Logo"
                    width={180}
                    height={37}
                    priority
                    />
                    </div>
        {title && <>
            {title === 'KeynoteSpeech'&&
            <>
                    
                <div className={style.iframeBox}>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSem8OfFqvNEWKk6zZ2C3C621vThc6qFEMP2wLnBmUK3oSL5rg/viewform?embedded=true" width="640" height="895">로드 중…</iframe>
                   </div>
            </>
            }
            {title === 'MarketingOverview'&&
                <>
                <div className={style.iframeBox}>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfmjLTZnJVne81JCLrJLbTNk2e5BRHEY79BzbGUpBHgPBFGXw/viewform?embedded=true" width="640" height="931" >로드 중…</iframe>
                </div>
                </>
            }
            {title === 'GDMOverview'&&
                 <>
                 <div className={style.iframeBox}>
                 <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSenMY6fg0DG7WOiEfYMD5UORr0Hu2XAOebnvKvKLc2I6QQr-w/viewform?embedded=true" width="640" height="931">로드 중…</iframe> </div>
                 </>
            }
            {title === 'GCOverview'&&
                  <>
                  <div className={style.iframeBox}>
                  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeRhpugridh-tSvSUUrShscNtDcln3dfuGswRydnzAqKi_7lA/viewform?embedded=true" width="640" height="931" >로드 중…</iframe> 
                  </div>
                  </>
            }
            {title === 'ISE'&&
                  <>
                  <div className={style.iframeBox}>
                  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfkxNeNZ6Vmst7lA7Y4FZl0BE_jWuLC4xlNb5f3cryE3TYMlw/viewform?embedded=true" width="640" height="972">로드 중…</iframe>
                  </div>
                  </>
            }
            {title === 'corporateMktOverview'&&
                <>
                <div className={style.iframeBox}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeRhpugridh-tSvSUUrShscNtDcln3dfuGswRydnzAqKi_7lA/viewform?embedded=true" width="640" height="931" >로드 중…</iframe> 
                </div>
                </>
            }
            {title === 'newWebsiteHowToUse'&&
                <>
                <div className={style.iframeBox}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSch8Nt6XXhGnotQKrJ7KFzjrT6oIA212R2kCKJhhIGlxfxctw/viewform?embedded=true" width="640" height="974" >로드 중…</iframe>
                </div>
                </>
            }
            {title === 'parkAssets'&&
                 <>
                 <div className={style.iframeBox}>
                 <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSddELSXmloverQ6QlQ7qvfRtAw_O5sYo0gY57arzt1alkpw1g/viewform?embedded=true" width="640" height="974">로드 중…</iframe>   
                 </div>
                 </>
            }
            {title === 'templateGuide'&&
                <>
                <div className={style.iframeBox}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSce9ary-o0j6oH0t8fhcpOZIwslLFO6PSIVPECDcdINaCct4Q/viewform?embedded=true" width="640" height="931" >로드 중…</iframe>
                </div>
                </>
            }
            {title === 'commonGoal'&&
                <>
                <div className={style.iframeBox}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfmK-TwB05-rTtiMppi3Abare2Mjp9I7mtEbf7OGAg-8HZ7ZA/viewform?embedded=true" width="640" height="974" >로드 중…</iframe>
                </div>
                </>
            }
            {title === 'productPlan'&&
                <>
                <div className={style.iframeBox}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdnIcHezco1JBJnPTBdQOn-be29ytP8Q8DXhjvgeNAQzoXbDA/viewform?embedded=true" width="640" height="931" >로드 중…</iframe>
                </div>
                </>
            }
            {title === 'productMarketing'&&
                <>
                <div className={style.iframeBox}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSetqppanaSXfcKHW9GDNiZkWIUZfmjXYg1szFD_TX25kR8PzA/viewform?embedded=true" width="640" height="931" >로드 중…</iframe>
                </div>
                </>
            }

            {/* Day 2 */}
            {title === 'marketingTrend'&&
                  <>
                  <div className={style.iframeBox}>
                  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScoqN-iCXaWd14kQGzasJK4K5NdTHTHLxmk73ODy88H6ln5Tg/viewform?embedded=true" width="640" height="931" >로드 중…</iframe>
                  </div>
                  </>
            }
            {title === 'bestKnownMethod'&&
                <>
                <div className={style.iframeBox}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfqwun5_MLNEmuTWcKUnt9YpQWnlyBQHJEXx1K3UAYwyT63nw/viewform?embedded=true" width="640" height="931">로드 중…</iframe>
                </div>
                </>
            }
            {title === 'HQRegionalCollab'&&
                 <>
                 <div className={style.iframeBox}>
                 <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdlRDAqMlToiW9bsgsOcVwnerck0giljjX5sBCnRhyPDuk32A/viewform?embedded=true" width="640" height="931" >로드 중…</iframe>  
                 </div>
                 </>
            }
            {title === 'NANOscientificRebranding'&&
                <>
                <div className={style.iframeBox}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScdP_ShdCnNJ-zyhRyG6fasvbiXawoCBHrLJjIWsXUwAA17fQ/viewform?embedded=true" width="640" height="931">로드 중…</iframe>
                </div>
                </>
            }
            {title === 'symposiumVideoGuide'&&
                <>
                <div className={style.iframeBox}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdKnmGz00jRgsFrk4l9L53hpddaMYEuLqT1ojicvOWuUjDTIw/viewform?embedded=true" width="640" height="931" >로드 중…</iframe>
                </div>
                </>
            }
            {title === 'NANOscientificWeb'&&
                 <>
                 <div className={style.iframeBox}>
                 <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfEs7-a_Lu9B6bi748L_VMs3ZBRpFGCp7XfcHauStVlHaJI8A/viewform?embedded=true" width="640" height="931" >로드 중…</iframe>
                 </div>
                 </>
            }
            {title === 'NSSFrameworkOverview'&&
                 <>
                 <div className={style.iframeBox}>
                 <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeCznkc2ISxD2ZyVG7JWz4AIH0XL8xiTjAAv0I6L_htapg6tQ/viewform?embedded=true" width="640" height="931" >로드 중…</iframe>
                 </div>
                 </>
            }
            {title === 'socialAndPaidMedia'&&
                <>
                <div className={style.iframeBox}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfjsYPGfA1gHGgqQSxRYiT0DAsnD-nRx4ZSKaHQHR6YmzT7GQ/viewform?embedded=true" width="640" height="931" >로드 중…</iframe>
                </div>
                </>
            }
            {title === 'PSI'&&
                <>
                <div className={style.iframeBox}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfJo5ddcDwkR5JIe1ogPHEwdLUhgRiHBqpT25L92e5Nx2D3Nw/viewform?embedded=true" width="640" height="931">로드 중…</iframe>
                </div>
                </>
            }
            {title === 'PSE'&&
                <>
                <div className={style.iframeBox}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScOCBGumTqVrdRTUikRzo1L_Zh0cg8hDNbtFAnS8TIvugRkSw/viewform?embedded=true" width="640" height="931" >로드 중…</iframe>
                </div>
                </>
            }
            {title === 'PSJ'&&
                <>
                <div className={style.iframeBox}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdZ2uApO_QCd1YSgS4Jby3puMjLwFCw_ffKIFKijLaORYhL-w/viewform?embedded=true" width="640" height="931" >로드 중…</iframe>
                </div>
                </>
            }
            {title === 'PSG'&&
                <>
                <div className={style.iframeBox}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdD3zBt3sKxDI09ExhWPf2vEqjFM3G7z7ygHUjuwCwThqEGOQ/viewform?embedded=true" width="640" height="931" >로드 중…</iframe>
                </div>
                </>
            }
            {title === 'PSK'&&
               <>
               <div className={style.iframeBox}>
               <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScp70gi8B2LV-yhv8hb030_QK1cbTlcrE-BsdSiRybkn4HdEA/viewform?embedded=true" width="640" height="931" >로드 중…</iframe>
               </div>
               </>
            }
            {title === 'PSS'&&
                <>
                <div className={style.iframeBox}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfEO3paPbkNosImq65_fkiKrZOSapVsfkm691gsvhEtkws-1A/viewform?embedded=true" width="640" height="931" >로드 중…</iframe>
                </div>
                </>
            }
            {title === 'PSIndia'&&
                <>
                <div className={style.iframeBox}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSccU_-n68i_arGQLEwzhTgj93HL0p7FsOWosUvgHfZUdULk8g/viewform?embedded=true" width="640" height="931">로드 중…</iframe> 
                </div>
                </>
            }
            {/* Day 3 */}
            {title === 'marketoAndLeadJourney'&&
                <>
                <div className={style.iframeBox}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdBlYv396tq5FvCE_-4UVtH5Ri8vx3tPk-FSoVIM_gAv7bSzA/viewform?embedded=true" width="640" height="974" >로드 중…</iframe> 
                </div>
                </>
            }
            {title === 'training1'&&
                 <>
                 <div className={style.iframeBox}>
                 <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfx7WNoy7swM0jrlNyY-qUR9WTDeM6eY3QbKj5exh8EcDwi_g/viewform?embedded=true" width="640" height="974">로드 중…</iframe>
                 </div>
                 </>
            }
            {title === 'training2'&&
               <>
               <div className={style.iframeBox}>
               <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf9vbll22-wjIhe-ElSjjcBIj_hcD25U2dPVNrtfmeB4aKxaQ/viewform?embedded=true" width="640" height="899" >로드 중…</iframe>
               </div>
               </>
            }
            {title === 'training3'&&
                <>
                <div className={style.iframeBox}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScRIZmcPae-fNw1_rIcuhkwq7OfpBzYikIc6YU4B_S9e4olSQ/viewform?embedded=true" width="640" height="899" >로드 중…</iframe>
                </div>
                </>
            }


        </>

            
        }
    </div>
    )}