/**problem Sumary:
 * We have two lists of strings: input strings and query strings.
    * For each query string, we need to count how many times it appears in the input strings.
    * We need to return an array of these counts
    * 
    * Algorithm:
    * 1. Initialize an empty array to store the counts of the query strings.
    * 2. Iterate through the query strings.
    * 3. For each query string, iterate through the input strings and count the number of times the query string appears.
    * 4. Push the count to the result array.
    * 5. Return the result array.
    
 */

function matchingStrings(strings: string[], queries: string[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < queries.length; i++) {
        let count = 0;
        for (let j = 0; j < strings.length; j++) {
            if (queries[i] === strings[j]) {
                count++;
            }
        }
        result.push(count);
    }
    return result;
}
console.log(matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])); 