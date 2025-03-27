/*
The problem asks you to track how many times a basketball player breaks 
their season record for most and least points in a game. Given a list of 
scores for each game of the season, you need to determine how many times the 
player breaks their record for most points and least points in a game.

Algorithm:
1. Initialize the maximum and minimum scores to the first score in the list.
2. Initialize counters for the maximum and minimum breaks to 0.
3. Iterate through the list of scores starting from the second score.
4. If the current score is greater than the maximum score, update the 
maximum score and increment the maximum breaks counter.
5. If the current score is less than the minimum score, update the minimum
score and increment the minimum breaks counter.
6. Return the maximum and minimum breaks counters as an array.

 */

function breakingRecords(scores: number[]): number[] {
    // Initialize variables
    let maxScore = scores[0];
    let minScore = scores[0];
    let maxBreaks = 0;
    let minBreaks = 0;

    // Iterate through the scores
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            maxBreaks++;
        } else if (scores[i] < minScore) {
            minScore = scores[i];
            minBreaks++;
        }
    }

    // Return the results as an array
    return [maxBreaks, minBreaks];
}


const scores = [12, 24, 10, 24];
console.log(breakingRecords(scores)); 