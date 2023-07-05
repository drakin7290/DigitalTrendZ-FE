import Contact from "~/components/base/Contact";
import styles from "./styles.module.scss"
import Image from "next/image"

export default function ForgotPasswordContainer() {
    const contact = {
        name: "Hoèng Eng",
        background: "https://images.unsplash.com/photo-1682880279219-5e1434044a64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        imgUrl: "https://s120-ava-talk.zadn.vn/b/6/7/c/54/120/d066ccb5f8480f228be54bbae2be0752.jpg",
        zalo: "https://zalo.me/0982062971",
    };
    return(
        <main className={styles['main']}>
            <div className={styles['container']}>
                <div className={styles['img']}>
                    <Image src="/imgs/duck_dancing.gif" width={150} height={150} />
                </div>
                <p className={styles["heading"]}>Bạn đã quên mật khẩu???</p>
                <p className={styles["desc"]}>Người zì đâu mà não cá vàng quá, liên hệ chủ nhiệm club để cấp lại nhé <del>, kèm theo phí 50.000VND</del></p>
                <div className={styles['contact-container']}>
                    <Contact 
                        name="Hoèng Eng"
                        background="https://images.unsplash.com/photo-1682880279219-5e1434044a64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        imgUrl="https://s120-ava-talk.zadn.vn/b/6/7/c/54/120/d066ccb5f8480f228be54bbae2be0752.jpg"
                        zalo="https://zalo.me/0982062971"
                    />
                </div>
            </div>
        </main>
    )
}