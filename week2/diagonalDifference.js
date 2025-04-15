function diagonalDifference(arr) {
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
