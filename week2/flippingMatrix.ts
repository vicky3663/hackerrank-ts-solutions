/**
 * problemstatement:
 * You are given a square matrix of integers. You can flip any row or 
 * column by choosing it and flipping all the elements in that row or column. 
 * The goal is to maximize the sum of the elements in the matrix after performing any 
 * number of flips.
 * 
 * algorithm:
 * 1. Divide the 2N x 2N matrix into four quadrants.
 * 2. For each cell in the top-left quadrant, determine the maximum value 
 *    obtainable by flipping rows and/or columns. This can be done by 
 *    considering the corresponding cells in the other three quadrants.
 * 3. Sum up the maximum values from the top-left quadrant to get the 
 *    maximum sum of the matrix after flipping.
 * 
 */

function flippingMatrix(matrix: number[][]): number {
    const n = matrix.length / 2;
    const flippedMatrix = Array.from({ length: 2 * n }, () => Array(2 * n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const topLeft = matrix[i][j];
            const topRight = matrix[i][2 * n - j - 1];
            const bottomLeft = matrix[2 * n - i - 1][j];
            const bottomRight = matrix[2 * n - i - 1][2 * n - j - 1];

            const maxValue = Math.max(topLeft, topRight, bottomLeft, bottomRight);

            flippedMatrix[i][j] = maxValue;
            flippedMatrix[i][2 * n - j - 1] = maxValue;
            flippedMatrix[2 * n - i - 1][j] = maxValue;
            flippedMatrix[2 * n - i - 1][2 * n - j - 1] = maxValue;
        }
    }

    return flippedMatrix;
}