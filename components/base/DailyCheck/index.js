import { useState } from "react"
import styles from "./styles.module.scss"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import getCurrentDate from "~/utils/getCurrentDate";

export default function DailyCheck({data}) {
    const [dateArray, setDateArray] = data;
    const lastDay = dateArray[dateArray.length-1];
    const [todayCheck, setTodayCheck] = useState(lastDay == getCurrentDate());
    
    const handlCheck = () => {
        let date = [].concat(dateArray);
        date.push(getCurrentDate());
        setDateArray(date);
        setTodayCheck(true);
    }

    const transformStyle = {
        transform: "rotateY(180deg)",
    }

    return (
            <div className={styles['container']}>
                <div className={styles['button-flipper']} style={todayCheck ? transformStyle : {}} >
                    <div className={styles['front-button']}
                        onClick={() => handlCheck()}
                    >
                        <CalendarTodayIcon 
                            sx={{
                            fontSize: "4rem",
                            color: "#f0f0f0"
                            }} 
                        />
                    </div>
                    <div className={styles['back-button']}>
                        <TaskAltIcon 
                            sx={{
                                fontSize: "6rem",
                                color: "#f0f0f0",
                            }}
                        />
                    </div>
                </div>
            </div>
    )
}
