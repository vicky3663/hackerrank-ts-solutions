/**
 * problem statement:
 * A pangram is a sentence that contains every letter of the alphabet at least once.
 * Given a sentence, determine whether it is a pangram.
 *
 * algorithm:
 * 1. Create a set to store the letters of the alphabet.
 * 2. Convert the input string to lowercase.
 * 3. Iterate through each character in the string.
 * 4. For each character, check if it is a letter.
 * 5. If it is a letter, remove it from the set.
 * 6. If the set is empty, return "pangram".
 * 7. If the loop ends and the set is not empty, return "not pangram".
 *
 */
function pangrams(s) {
    const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
    const lowerCaseInput = s.toLowerCase();
    for (let i = 0; i < lowerCaseInput.length; i++) {
        const char = lowerCaseInput[i];
        alphabet.delete(char);
        if (alphabet.size === 0) {
            return 'pangram';
        }
    }
    return 'not pangram';
}
const input = "We promptly judged antique ivory buckles for the next prize";
console.log(pangrams(input));
