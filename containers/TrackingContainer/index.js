import { useState } from "react"
import styles from "./styles.module.scss"
import DailyCheck from "~/components/base/DailyCheck";
import CirclarProcess from "~/components/base/CirclarProcess";
import Image from "next/image";


export default function TrackingContainer({data}) {
    const [dateArray, setDateArray] = useState(data ?? []);
    
    
    return (
        <main className={`${styles['main']}`}>
            <div className={styles['container']}>
                    <CirclarProcess numOfDay={50}> 
                    <DailyCheck data={[dateArray, setDateArray]}/>
                    </CirclarProcess>
                    <div className={styles['divider']}></div>
                    <div className={styles['rate']}>
                        <div className={styles['col']}>
                            <div className={styles['head']}>Số ngày đã check</div>
                            <div className={styles['num']}>25</div>
                        </div>
                        <div className={styles['col']}>
                            <div className={styles['head']}>Giữ 🔥 liên tục</div>
                            <div className={styles['num']}>03</div>
                        </div>
                    </div>
                    <div className={styles['medal']}>
                        <div className={styles['medal__heading']}>Huy hiệu nhận được</div>
                        <div className={styles['medal__container']}>
                            <div className={styles['medal__item']}>
                                <Image src={"/imgs/medal/gold.png"} width={"auto"} height={"auto"} alt="gold"/>
                            </div>
                        </div>
                    </div>
            </div>
        </main>
    )
}