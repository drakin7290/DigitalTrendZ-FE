import { useEffect, useState } from "react"
import styles from "./styles.module.scss"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import getCurrentDate from "~/utils/getCurrentDate";
import postAttendance from "~/utils/fetchApi/postAttendance";
import { toast } from "react-toastify";


export default function DailyCheck({data}) {
    const [dateArray, setDateArray] = data;
    const lastDay = dateArray[dateArray.length-1];
    const [todayCheck, setTodayCheck] = useState(false);


    useEffect(() => {
        if(lastDay == getCurrentDate()) {
            setTodayCheck(true);
        }
    },[dateArray])
    async function handlCheck() {
        try {
            const data = await postAttendance();
            if(!data.error) {
                toast.success(data.data, {autoClose: 2000});
                setTodayCheck(true);
                setDateArray(["0"]);
            } else {
                console.log(todayCheck);
            }
        } catch (error) {
            toast.error("Co loi xay ra >_<", {autoClose: 2000});
            console.log(error);
        }
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
