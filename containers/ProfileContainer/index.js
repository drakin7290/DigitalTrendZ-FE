import styles from "./styles.module.scss"
import getUser from "~/utils/getUser"

export default function ProfileContainer() {
    const {name, image, session} = getUser();
    const backgroundStyle = {
        backgroundImage: `url(https://images.pexels.com/photos/912413/pexels-photo-912413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
    }
    const imageStyle = {
        backgroundImage: `url(${image})`,
    }

    return (
        <main className={styles['main']}>
            { session && 
            <>
                <div className={styles['background']} style={backgroundStyle}>
                    <div className={styles['img']} style={imageStyle}></div>
                </div>
                <div className={styles['name-container']}>
                    <p className={styles['name']}>{name}</p>
                </div>
            </>
            }
        </main>
    )
}