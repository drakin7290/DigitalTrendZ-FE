import styles from "./styles.module.scss"



export default function LoadingContainer() {

    return (
        <main className={styles['container']}>
            <img src="/imgs/loading.gif" className={styles['img']} />
        </main>
    )
}