import isLogged from "~/utils/isLogged";
import styles from "./styles.module.scss"
import getUser from "~/utils/getUser"

export default function ProfileContainer() {
    const logged = isLogged();
    const data = getUser();
    // const logged = true;
    // const data = {
    //     name: "Nguyễn Văn A",
    //     avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    // }

    const backgroundStyle = {
        backgroundImage: `url(https://images.pexels.com/photos/912413/pexels-photo-912413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
    }
    const imageStyle = {
        backgroundImage: `url(${data.avatar})`,
    }

    return (
        <main className={styles['main']}>
            {logged &&
                <>
                    <div className={styles['background']} style={backgroundStyle}>
                        <div className={styles['img']} style={imageStyle}></div>
                    </div>
                    <div className={styles['name-container']}>
                        <p className={styles['name']}>{data.name}</p>
                    </div>
                </>
            }
        </main>
    )
}