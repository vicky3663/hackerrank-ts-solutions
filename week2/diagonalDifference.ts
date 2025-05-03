/*problem summary: Given a square matrix, calculate the absolute difference 
between the sums of its diagonals.
The primary diagonal is from the top left to the bottom right,
and the secondary diagonal is from the top right to the bottom left.

algorithm:
1. Initialize two variables, primaryDiagonalSum and secondaryDiagonalSum, to 0.
2. Iterate through the rows of the matrix using a loop.
3. For each row, add the element at the primary diagonal (i, i) to primaryDiagonalSum.
4. Add the element at the secondary diagonal (i, n - i - 1) to secondaryDiagonalSum, where n is 
the size of the matrix.
5. After iterating through all rows, calculate the absolute difference between the two sums.
6. Return the absolute difference.

*/


function diagonalDifference(arr: number[][]): number {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < arr.length; i++) {
        primaryDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[i].reverse()[i];
    }

    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

// Example:
const matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];
console.log(diagonalDifference(matrix)); 