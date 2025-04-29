function twoArrays(k: number, A: number[], B: number[]): string {
    // Sort A in ascending order
    A.sort((a, b) => a - b);

    // Sort B in descending order
    B.sort((a, b) => b - a);

    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) {
            return "NO";
        }
    }

    return "YES";
}

// Example:
const k = 5;
const A = [1, 2, 2, 1];
const B = [3, 3, 3, 4];

console.log(twoArrays(k, A, B)); 
