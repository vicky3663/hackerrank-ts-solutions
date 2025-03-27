/*Problem summary:
Given a series of input lines, you need to perform operations on the words in the input.
The operations include splitting camel case words into space-delimited words and combining
space-delimited words into camel case words. The operations are specified by the operation
type (S for split and C for combine) and the word type (M for method, C for class, and V for variable).
The input lines consist of the operation type(Split/Combine), word type(method,class or variable), and 
the words to process.

Algorithm:
1. seperate each input line into operation (S/C), type (M/C/V), and the words to process
2. For split operations (S):
    -Remove parentheses for methods
    -Convert camel case to space-delimited words by inserting a space before each capital 
    letter and converting to lowercase
3. For combine operations (C):
    -Splits the input by spaces
    -For classes, capitalize the first letter of the first word
    -For variables and methods, keep the first word lowercase and
        Capitalize the first letter of all subsequent words
    Adds parentheses for methods
4. Outputs the result for each input line
 */

function main() {
    // Enter your code here
    const inputLines = [];
    
}