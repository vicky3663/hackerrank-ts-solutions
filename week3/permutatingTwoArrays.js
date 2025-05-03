function twoArrays(q, queries) {
    const results = [];
    for (let i = 0; i < q; i++) {
        const { k, A, B } = queries[i];
        // Sort A in ascending order
        A.sort((a, b) => a - b);
        // Sort B in descending order
        B.sort((a, b) => b - a);
        let isValid = true;
        for (let j = 0; j < A.length; j++) {
            if (A[j] + B[j] < k) {
                isValid = false;
                break;
            }
        }
        results.push(isValid ? "YES" : "NO");
    }
    return results;
}
// Example:
const q = 1;
const queries = [
    //{ k: 10, A: [2, 1, 3], B: [7, 8, 9] }
    { k: 5, A: [1, 2, 2, 1], B: [3, 3, 3, 4] }
];
console.log(twoArrays(q, queries));
