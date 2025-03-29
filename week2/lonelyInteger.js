/**
 * Problem Summary:
 * Given an array of integers, every element appears twice except for one.
 * Find that single one.
 *
 * Algorithm:
 * 1. Create a frequency map to count the occurrences of each number.
 * 2. Iterate through the array and populate the frequency map.
 * 3. Iterate through the frequency map to find the number that appears only once.
 * 4. Return the lonely integer.
 */
function lonelyinteger(a) {
    const frequency = {};
    // Count the occurrences of each number
    for (let num of a) {
        frequency[num] = (frequency[num] || 0) + 1;
    }
    // Find the number that appears only once
    for (let num in frequency) {
        if (frequency[num] === 1) {
            return parseInt(num);
        }
    }
    throw new Error("No lonely integer found");
}
// Example usage:
const inputArray = [1, 2, 3, 2, 1];
console.log(lonelyinteger(inputArray)); // Output: 3
