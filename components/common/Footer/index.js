import styles from "./styles.module.scss"

export default function Footer() {
  return ( 
  <footer className={styles['footer']}>
    <div className={styles['footer__copyright']}>
      <p>&#169; 2023 Digital TrendZ </p>
      <p>Made with ❤</p>
    </div>
  </footer>
  )
}
