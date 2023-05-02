import Image from "next/image"
import Link from "next/link"
import styles from "./styles.module.scss"

export default function Footer() {
  return ( 
  <footer className={styles['footer']}>
    <div className={styles['container']}>
      <ul className={styles['link-list']}>
        <li className={styles['link-item']}><Link href="/about">Giới thiệu</Link></li>
        <li className={styles['link-item']}><Link href="#">Quy định chung</Link></li>
      </ul>

      <div className={styles['don-vi-truc-thuoc']}>
        <div className={styles['dvtt__heading']}>
          ĐƠN VỊ TRỰC THUỘC
        </div>
        <div className={styles['logo']}>
          <div className={styles['logo__item']}><Image src='/imgs/logo/agu_logo.png' width={36} height={36} /></div>
          <div className={styles['logo__item']}><Image src='/imgs/logo/hsv_logo.png' width={36} height={36} /></div>
          <div className={styles['logo__item']}><Image src='/imgs/logo.png' width={36} height={36} /></div>
        </div>
      </div>
    </div>

    <div className={styles['footer__copyright']}>
      <p>&#169; 2023 Digital TrendZ </p>
      <p>Made with ❤</p>
    </div>
  </footer>
  )
}
