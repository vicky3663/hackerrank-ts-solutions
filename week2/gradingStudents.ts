/**
 * Problem Summary:
 * HackerLand University has a grading policy where grades are rounded based on specific rules:
 * 1. If the grade is less than 38, it is a failing grade and no rounding occurs.
 * 2. If the difference between the grade and the next multiple of 5 is less than 3, round the grade up to the next multiple of 5.
 * 3. Otherwise, the grade remains unchanged.
 * 
 * Algorithm:
 * 1. Iterate through the list of grades.
 * 2. For each grade:
 *    a. If the grade is less than 38, return it as is (no rounding).
 *    b. Calculate the next multiple of 5.
 *    c. If the difference between the grade and the next multiple of 5 is less than 3, round up to the next multiple of 5.
 *    d. Otherwise, return the grade as is.
 * 3. Return the updated list of grades.
 */

function gradingStudents(grades: number[]): number[] {
    return grades.map(grade => {
        if (grade < 38) {
            return grade; // No rounding for failing grades
        }
        const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
        if (nextMultipleOf5 - grade < 3) {
            return nextMultipleOf5; // Round up if the difference is less than 3
        }
        return grade; // No rounding otherwise
    });
}

// Example usage:
const grades = [73, 67, 38, 33];
const result = gradingStudents(grades);
console.log(result); 