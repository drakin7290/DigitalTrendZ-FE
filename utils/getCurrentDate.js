import dayjs from "dayjs";


export default function getCurrentDate() {
    const now = dayjs();
    var day = now.get("D");
    if(day < 10) {
        day = "0" + day;
    }
    var month = now.get("M")+1;
    if(month < 10) {
        month = "0" + month;
    }
    const year = now.get("y");

    const result = `${year}-${month}-${day}`;
    return result
} 