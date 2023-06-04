import { useState } from "react"
import styles from "./styles.module.scss"
import DailyCheck from "~/components/base/DailyCheck";
import CirclarProcess from "~/components/base/CirclarProcess";
import Image from "next/image";
import isLogged from "~/utils/isLogged";
import countContinuousDay from "~/utils/countContinuousDay";


export default function TrackingContainer() {
    const [dateArray, setDateArray] = useState(() => {
        const data = ["02/04/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","04/05/2023","09/05/2023","10/05/2023","11/05/2023","12/05/2023","13/05/2023","14/05/2023"];
        return data ?? [];
    });

    const logged = isLogged();

    const numOfDay = dateArray.length > 10 
                    ? dateArray.length 
                    : `0${dateArray.length}`;

    const numOfContinuousDay = countContinuousDay(dateArray);

    return (
        <main className={`${styles['main']}`}>
            {logged &&
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
                            <div className={styles['num']}>{numOfContinuousDay}</div>
                        </div>
                    </div>
                    <div className={styles['medal']}>
                        <div className={styles['medal__heading']}>Huy hiệu nhận được</div>
                        <div className={styles['medal__container']}>
                            <div className={styles['medal__item']}>
                                <Image src="/imgs/medal/gold.png" alt="gold" layout="fill"/>
                            </div>
                        </div>
                    </div>
            </div>
            }
        </main>
    )
}