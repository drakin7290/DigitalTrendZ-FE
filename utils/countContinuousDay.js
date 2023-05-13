import isAfterDate from "./isAfterDate";

export default function countContinuousDay(dateArray) {
    var count = 1;
    var index = dateArray.length-1;
    while(isAfterDate(dateArray[index-1],dateArray[index])) {
        count++;
        index--;
    }
    return count;
} 