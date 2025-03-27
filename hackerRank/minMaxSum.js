function miniMaxSum(arr) {
    /*
    
    1. Initialize min to the maximum safe integer value.
    2. Initialize max to the minimum safe integer value.
    3. Iterate over each element in the array using index i:
        a. Initialize sum to 0.
        b. Iterate over each element in the array using index j:
            i. If j is not equal to i, add the element at index j to sum.
        c. Update min to be the minimum of min and sum.
        d. Update max to be the maximum of max and sum.
    4. Print the values of min and max.
     */
    // Write your code here
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        // Sum all elements except the element at index i
        for (let j = 0; j < arr.length; j++) {
            if (j !== i) {
                sum += arr[j];
            }
        }
        min = Math.min(min, sum);
        max = Math.max(max, sum);
    }
    console.log(min, max);
}
let arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);
