import styles from "./styles.module.scss"
import ComputersCanvas from "~/components/3DModel/Computers"

export default function UserContainer() {
return (
    <main className={styles['main']}>
        <div className={styles['heading']}>Chào mừng bạn đến với Digital TrendZ</div>
        <div className={styles['computer-container']}>
            <ComputersCanvas />
        </div>
    </main>
)
}