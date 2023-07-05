import Image from "next/image";
import styles from "./styles.module.scss"
import Button from "~/components/base/Button";
import TheBlob from "~/components/common/TheBlob";
import FacebookIframe from "~/components/common/FacebookIframe";



function HomeContainer() {
  
  return (
  <main className={styles['main']}>
    <section className={styles['hero-section']} >
    <div className={styles['hero-section__containner']}>
      <div className=" flex flex-col">
        <p className={styles['heading']}>DigitalTrendZ<br></br>Club-AGU</p>
        <p className={styles['text']}>Câu lạc bộ DigitalTrendZ là nơi kết nối các bạn sinh viên AGU có niềm đam mê với chuyển đổi số và E-sports.</p>
        <Button to={'#explore'} className={styles['button']}>Khám phá
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
        </Button>
      </div>
      <div className="relative"><TheBlob /><Image src='/imgs/hero_img.png'  width={350} height={350} priority/></div>
    </div>
    </section>
    <section className={styles['explore']} id="explore">
      <div className={styles['explore__img']}>
        <div className="flex flex-col">
          <Image src={'/imgs/exploring.svg'} width={80} height={80}/>
          <p>TIN NỔI BẬT</p>
        </div>
      </div>
      <FacebookIframe />
    </section>
  </main>
  )
}

export default HomeContainer;
