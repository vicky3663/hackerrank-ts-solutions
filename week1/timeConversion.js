/*

1. Extract the period (AM/PM) from the input string.
2. Split the input string into hours, minutes, and seconds.
3. If the period is 'AM':
    - If the hours are '12', set hours to '00' (midnight case).
    - Otherwise, keep the hours unchanged.
4. If the period is 'PM':
    - If the hours are '12', keep the hours unchanged (noon case).
    - Otherwise, add 12 to the hours to convert to 24-hour format.
5. Return the formatted time string in 'HH:MM:SS' format.

*/
function timeConversion(s) {
    // Write your code here
    let period = s.slice(-2);
    let [hours, minutes, seconds] = s.slice(0, -2).split(':');
    if (period === 'AM') {
        hours = hours === '12' ? '00' : hours;
    }
    else {
        hours = hours === '12' ? hours : String(Number(hours) + 12);
    }
    return `${hours}:${minutes}:${seconds}`;
}
let s = '07:05:45PM';
console.log(timeConversion(s)); // 19:05:45
