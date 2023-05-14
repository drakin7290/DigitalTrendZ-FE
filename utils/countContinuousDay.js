import getCurrentDate from "./getCurrentDate";
import isAfterDate from "./isAfterDate";

export default function countContinuousDay(dateArray) {
    var count = 1;
    var index = dateArray.length-1;
    if(isAfterDate(dateArray[index],getCurrentDate()) || dateArray[index] === getCurrentDate()) {
        while(isAfterDate(dateArray[index-1],dateArray[index])) {
            count++;
            index--;
        }
    } else {
        count = 0
    }
    return count;
} 