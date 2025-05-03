/**problem summary:
 * an array of n integers is given, and a positive integer, k.
 * Find and print the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.
 
 

 *Algorithm:
1. Initialize a variable to store the number of pairs that are divisible by k.
2. Iterate through the array of integers using a nested for loop and compare
each pair of elements.
3. If the sum of the pair is divisible by k, increment the count of pairs.
4. Return the count of pairs.
 */
function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                count++;
            }
        }
    }
    return count;
}
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])); // 5
