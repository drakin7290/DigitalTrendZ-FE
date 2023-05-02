import styles from "./styles.module.scss"

export default function UserContainer() {
return (
    <main className={styles['main']}>
        <p className={styles['heading']}>Đây là trang chủ của User đã đăng nhập thành công</p>
    </main>
)
}