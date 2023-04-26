import Image from "next/image";
import styles from "./styles.module.scss"
import bg from "../../public/imgs/backgound.png"
import Button from "~/components/base/Button";

function HomeContainer() {
  return (
  <div className={styles['main']}>
    <section className={styles['hero-section']} style={{backgroundImage:`url(${bg.src})`}}>
    <div className={styles['hero-section__containner']}>
      <div className=" flex flex-col">
        <p className={styles['heading']}>CLB.DigitalTrendZ</p>
        <p className={styles['text']}>Bla bla bla bla mcm ndcnid uh cdcuh udh scjs njns njnj njn st ushu hushi</p>
        <Button to={'#'} className={styles['button']}>Explore
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
        </Button>
      </div>
      <div className="grid items-center"><Image src='/imgs/hero_img.png'  width={350} height={350}/></div>
    </div>
    </section>
    <section className={styles['explore']}>
      <div className={styles['explore__img']}>
      <Image src={'/imgs/exploring.svg'} width={100} height={100}/>
      </div>
    </section>
  </div>
  )
}

export default HomeContainer;
