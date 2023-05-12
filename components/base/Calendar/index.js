import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import styles from "./styles.module.scss"

export default function Calendar() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div>
                <DateCalendar readOnly/>
            </div>
        </LocalizationProvider>
    )
}