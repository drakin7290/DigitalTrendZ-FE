import getUser from "~/utils/getUser"
import styles from "./styles.module.scss"
import Image from "next/image";


export default function UserContainer() {

const userName = getUser().name ?? "";
const getFirstName = (name) => {
    const nameArray = name.split(" ");
    return `${nameArray[0]} ${nameArray[nameArray.length-1]}`
}
const firstName = getFirstName(userName);


return (
    <main className={styles['main']}>
        <div className={styles['heading']}>Chào bạn <span className={styles['heading__username']}>{firstName}</span></div>
        <div className={styles['illus-container']}>
            <Image src="/imgs/user_illus.svg" width={400} height={400} priority alt="user_illus" />
        </div>
    </main>
)
}