//interview Week one MOCK
/*findMedian
Problem Summary:
Given an array of integers, find the median value.
The median is the middle value in a sorted list of numbers.
If the list has an even number of elements, the median is the average of the two middle values.

Algorithm:
1. Sort the array in ascending order.
2. If the array has an odd number of elements, the median is the middle element.
3. If the array has an even number of elements, the median is the average of the two middle elements.
4. Return the median.

*/

function findMedian(arr: number[]): number {
    // Write your code here
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2;
    } else {
        return arr[mid];
    }
}

console.log(findMedian([1, 2, 3, 4, 5])); 