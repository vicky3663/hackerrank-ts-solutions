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
function timeConversion(s: string): string {
    let period = s.slice(-2);
    let timeParts = s.slice(0, -2).split(':');
    let hours = timeParts[0];
    let minutes = timeParts[1];
    let seconds = timeParts[2];

    if (period === 'AM') {
        if (hours === '12') {
            hours = '00';
        }
    } else {
        if (hours !== '12') {
            hours = String(Number(hours) + 12);
        }
    }

    return `${hours}:${minutes}:${seconds}`;
}
let s = '07:05:45PM';   
console.log(timeConversion(s)); // 19:05:45
