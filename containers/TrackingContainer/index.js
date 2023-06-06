import { useState } from "react"
import styles from "./styles.module.scss"
import DailyCheck from "~/components/base/DailyCheck";
import CirclarProcess from "~/components/base/CirclarProcess";
import Image from "next/image";
import isLogged from "~/utils/isLogged";
import countContinuousDay from "~/utils/countContinuousDay";
import { useEffect } from "react";
import getListAttendance from "~/utils/fetchApi/getListAttendance";
import getStreak from "~/utils/fetchApi/getStreak";


export default function TrackingContainer() {
    const [dateArray, setDateArray] = useState([]);
    const [streak, setStreak] = useState(0);

    const logged = isLogged();

    const numOfDay = dateArray.length > 10 
                    ? dateArray.length 
                    : `0${dateArray.length}`;

    

    useEffect(() => {
        async function getList() {
            try {
                const  data = await getListAttendance();
                if(!data.error) {
                    setDateArray(data.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        async function getStreakPoint() {
            try {
                const data = await getStreak();
                if(!data.error) {
                    setStreak(data.streak);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getList();
        getStreakPoint();
    },[dateArray])
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
                            <div className={styles['num']}>{streak}</div>
                        </div>
                    </div>
                    <div className={styles['medal']}>
                        <div className={styles['medal__heading']}>Huy hiệu nhận được</div>
                        <div className={styles['medal__container']}>
                        </div>
                    </div>
            </div>
            }
        </main>
    )
}