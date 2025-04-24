function countingValleys(steps, path) {
    let altitude = 0;
    let valleys = 0;
    for (let i = 0; i < steps; i++) {
        const step = path[i];
        if (step === 'U') {
            altitude++;
            // If we just came up to sea level, we completed a valley
            if (altitude === 0) {
                valleys++;
            }
        }
        else if (step === 'D') {
            altitude--;
        }
    }
    return valleys;
}
const steps = 8;
const path = "UDDDUDUU";
console.log(countingValleys(steps, path));
