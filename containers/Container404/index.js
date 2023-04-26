import styles from './styles.module.scss';
import Image from 'next/image';

export default function Container404() {
  return <div className={styles['container-404']}>
    <div>404 NOT FOUND</div>
    <Image src="/imgs/404_Not_Found.svg" width={400} height={400}/>
    </div>;
}
