import Img from '~/components/base/Img';

import styles from './styles.module.scss';

export default function BannerItem({ image }) {
  return (
    <div className={styles['banner-item']}>
      <Img className={styles['image']} src={image} errorImage={'/imgs/demos/banner-1.png'} />
    </div>
  );
}