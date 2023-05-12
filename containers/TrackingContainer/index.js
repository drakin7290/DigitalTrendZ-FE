import { useState } from "react"
import styles from "./styles.module.scss"
import DailyCheck from "~/components/base/DailyCheck";
import CirclarProcess from "~/components/base/CirclarProcess";
import Image from "next/image";


export default function TrackingContainer() {
    const data = ["1/4/2023","5/5/2023","5/5/2023","5/5/2023","5/5/2023","5/5/2023","5/5/2023","5/5/2023","5/5/2023","5/5/2023","5/5/2023","5/5/2023","5/5/2023","5/5/2023","5/5/2023","5/5/2023","5/5/2023","5/5/2023","5/5/2023","5/5/2023","5/5/2023","5/5/2023","5/5/2023","5/5/2023","5/5/2023"];
    const [dateArray, setDateArray] = useState(data ?? []);
    
    const numOfDay = dateArray.length > 10 
                    ? dateArray.length 
                    : `0${dateArray.length}`
    
    return (
        <main className={`${styles['main']}`}>
            <div className={styles['container']}>
                    <CirclarProcess numOfDay={dateArray.length}> 
                    <DailyCheck data={[dateArray, setDateArray]}/>
                    </CirclarProcess>
                    <div className={styles['divider']}></div>
                    <div className={styles['rate']}>
                        <div className={styles['col']}>
                            <div className={styles['head']}>Số ngày đã check</div>
                            <div className={styles['num']}>{numOfDay}</div>
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
                                <Image src="/imgs/medal/gold.png" width={50} height={50} alt="gold" layout="fill"/>
                            </div>
                        </div>
                    </div>
            </div>
        </main>
    )
}