import styles from "./styles.module.scss"
import Image from "next/image"


export default function Contact({style, name, background, imgUrl, zalo}) {
    const backgroundStyle = background 
    ? 
        {
            background: `url(${background})`,
        }
    : 
        {
            backgroundColor: '#1364FB',
        }

    return (
        <div className={styles["contact"]} style={style}>
            <div className={styles['background']} style={backgroundStyle}>
                <img src={imgUrl} className={styles['img']} />
            </div>
            <p className={styles['name']}>{name}</p>

            <div className={styles['list-contact']} >
            {
                zalo &&
                <a target="_blank" href={zalo} rel="noreferrer">
                        <Image src="/imgs/logo/zalo_logo.png" width={30} height={30} alt=""/>
                </a>
            }
            </div>
        </div>
    )
}