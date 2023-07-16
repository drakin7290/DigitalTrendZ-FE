import Form from "~/components/common/Form"
import styles from "./styles.module.scss"
import { LoginArt } from "~/public/assets/svgs"

export default function LoginContainer() {
    return (
        <main>
            <div className={styles['img-container']}>
                <LoginArt className={styles['img']} width="300px" height="300px"/>
            </div>
            <Form />
        </main>
    )
}