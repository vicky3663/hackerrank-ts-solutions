/*
problem statement:
* Mars Exploration is a space mission to explore the planet Mars.
* The mission has a set of messages that are sent to the spacecraft.
* Each message is a string of characters.(SOS)
* The spacecraft is expected to receive the message in a specific format but due to some interference, the message may be altered.
* The altered message may contain some characters that are not part of the original message.
* The goal is to determine how many characters were altered in the received message.
*
*
* algorithm:
* 1. Create a variable to store the original message "SOS".
* 2. Create a variable to store the count of altered characters.
* 3. Iterate through the received message in chunks of 3 characters.
* 4. For each chunk, compare it with the original message "SOS".
* 5. If the characters do not match, increment the count of altered characters.
* 6. Return the count of altered characters.
*/
function marsExploration(s) {
    const originalMessage = "SOS";
    let count = 0;
    // Iterate through the received message in chunks of 3 characters
    for (let i = 0; i < s.length; i += 3) {
        // Compare each character with the original message
        for (let j = 0; j < 3; j++) {
            if (s[i + j] !== originalMessage[j]) {
                count++;
            }
        }
    }
    return count;
}
const receivedMessage = "SOSSPSSQSSOR";
marsExploration(receivedMessage);
