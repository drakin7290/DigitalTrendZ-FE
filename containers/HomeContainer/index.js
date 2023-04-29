import Image from "next/image";
import styles from "./styles.module.scss"
import Button from "~/components/base/Button";
import ImageSlider from "~/components/common/ImageSlider";
import TheBlob from "~/components/common/TheBlob";


const slides = [
  {
    url:'https://images.unsplash.com/photo-1681589436610-ee3b350e57d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    description: 'csjci cij jcijc jicj jicjs jis sxdc',
    date: '23/02/2004'
  },
  {
    url:'https://images.unsplash.com/photo-1681651987346-a6db3ba3441f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    description: 'csjci cij jcijc jicj jicjs jis sxdc',
    date: '10/03/2026'
  },
  {
    url:'https://images.unsplash.com/photo-1682106446688-19a29ffb0b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 
    description: 'cs mot cai chuyen gi do s jis sxdc',
    date: '05/11/2023'
  },
]

function HomeContainer() {
  return (
  <div className={styles['main']}>
    <section className={styles['hero-section']} >
    <div className={styles['hero-section__containner']}>
      <div className=" flex flex-col">
        <p className={styles['heading']}>DigitalTrendZ<br></br>Club-AGU</p>
        <p className={styles['text']}>Bla bla bla bla mcm ndcnid uh cdcuh udh scjs njns njnj njn st ushu hushi</p>
        <Button to={'#'} className={styles['button']}>Explore
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
        </Button>
      </div>
      <div className="relative"><TheBlob /><Image src='/imgs/hero_img.png'  width={350} height={350} priority/></div>
    </div>
    </section>
    <section className={styles['explore']}>
      <div className={styles['explore__img']}>
        <div className="flex flex-col">
          <Image src={'/imgs/exploring.svg'} width={80} height={80}/>
          <p>TIÊU ĐIỂM TUẦN</p>
        </div>
      </div>
        <ImageSlider slides={slides} />
    </section>
  </div>
  )
}

export default HomeContainer;
