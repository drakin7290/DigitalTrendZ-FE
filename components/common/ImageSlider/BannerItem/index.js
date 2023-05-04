import styles from './styles.module.scss';
import { Calendar } from "~/public/assets/svgs";

export default function BannerItem({ data }) {
  return (
    <div className={styles['banner-item']} style={{backgroundImage: `url(${data.url})`}}>
      <div className={styles['desc-container']}>
            <div className={styles['desc__date']}>
              <Calendar />
              {data.date}
            </div>
                <div className={styles['desc__heading']}>{data.description}</div>
            </div>
    </div>
  );
}