import styles from "./styles.module.scss"
import Image from "next/image"


export default function Contact({contact}) {
    const backgroundStyle = contact.background 
    ? 
        {
            background: `url(${contact.background})`,
        }
    : 
        {
            backgroundColor: '#1364FB',
        }

    return (
        <div className={styles["contact"]}>
            <div className={styles['background']} style={backgroundStyle}>
                <img src={contact.imgUrl} className={styles['img']} />
            </div>
            <p className={styles['name']}>{contact.name}</p>

            <div className={styles['list-contact']} >
            {
                contact.zalo &&
                <a target="_blank" href={contact.zalo}>
                        <Image src="/imgs/logo/zalo_logo.png" width={30} height={30} />
                </a>
            }
            </div>
        </div>
    )
}