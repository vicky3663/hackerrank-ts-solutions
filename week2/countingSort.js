function countingSort(arr) {
    const frequencyArray = Array(100).fill(0);
    // Count frequency of each element in the input array
    for (let i = 0; i < arr.length; i++) {
        frequencyArray[arr[i]]++;
    }
    return frequencyArray;
}
// Example:
const arr = [1, 1, 3, 2, 1, 4, 5, 2, 3, 0];
console.log(countingSort(arr));
