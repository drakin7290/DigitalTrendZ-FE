import dayjs from "dayjs";


export default function getCurrentDate() {
    const now = dayjs();
    const day = now.get("D");
    const month = now.get("M")+1;
    const year = now.get("y")
    const result = `${day}/${month}/${year}`;
    return result
} 