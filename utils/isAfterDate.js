import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat"; 

export default function isAfterDate(dateStr1, dateStr2) {
    dayjs.extend(customParseFormat);
    const DateFormat = "DD/MM/YYYY";

    const date1 = dayjs(dateStr1,DateFormat);
    const date2 = dayjs(dateStr2,DateFormat).subtract(1, 'day');

    if(date1.isValid() && date2.isValid()) {
        return date1.isSame(date2);
    } else {
        return null;
    }
}