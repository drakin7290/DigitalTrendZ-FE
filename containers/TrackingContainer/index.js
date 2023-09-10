import { useState } from "react"
import styles from "./styles.module.scss"
import DailyCheck from "~/components/base/DailyCheck";
import CirclarProcess from "~/components/base/CirclarProcess";
import isLogged from "~/utils/isLogged";
import { useEffect } from "react";
import getListAttendance from "~/utils/fetchApi/getListAttendance";
import getStreak from "~/utils/fetchApi/getStreak";
import getCurrentDate from "~/utils/getCurrentDate";


export default function TrackingContainer() {
    const [data, setData] = useState({dateArray: [], streak: 0});
    const [todayCheck, setTodayCheck] = useState(false);
    const {dateArray, streak} = data;

    const logged = isLogged();

    const numOfDay = dateArray.length >= 10 ? dateArray.length : `0${dateArray.length}`;

    

    useEffect(() => {
        async function getDataApi() {
            try {
                const [dateArray,streak] = await Promise.all([getListAttendance(), getStreak()]);
                const lastDay = dateArray[dateArray.length-1];
                const currentDate = getCurrentDate();
                setData({...data, dateArray: dateArray, streak: streak});
                setTodayCheck(lastDay == currentDate);
            } catch(error) {
                console.log(error);
            }
        }
        getDataApi();
    },[todayCheck]);


    return (
        <main className={`${styles['main']}`}>
            {logged &&
            <div className={styles['container']}>
                    <CirclarProcess numOfDay={dateArray.length}> 
                        <DailyCheck data={[todayCheck, setTodayCheck]}/>
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