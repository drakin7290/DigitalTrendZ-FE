import getUser from "~/utils/getUser"
import styles from "./styles.module.scss"

export default function UserContainer() {
const userName = getUser().name;

const getFirstName = (name) => {
    const nameArray = name.split(" ");
    return `${nameArray[0]} ${nameArray[nameArray.length-1]}`
}
const firstName = getFirstName(userName);

return (
    <main className={styles['main']}>
        <div className={styles['heading']}>Chào bạn {firstName}</div>
        <div className={styles['computer-container']}>
        </div>
    </main>
)
}