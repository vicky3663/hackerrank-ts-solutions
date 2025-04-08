/**
 * problem summary:
 * You have a 32-bit unsigned integer. You need to flip all the 
 bits of this integer and return the new integer.
    *flip all 1 bits to 0 and all 0 bits to 1s.
* convert the binary representation of the integer to a decimal number.
* return the decimal number.

* Algorithm:
* 1. Convert the integer to its binary representation.
* 2. Flip all bits (0s to 1s and 1s to 0s).
* 3. Convert the flipped binary representation back to a decimal number.
* 4. Return the decimal number.
*
  */

    function flippingBits(n: number): number {
        // Convert the integer to its binary representation
        const binary = n.toString(2).padStart(32, '0');
        // Flip all bits (0s to 1s and 1s to 0s)
        const flippedBinary = Array.from(binary, (bit) => (bit === '0' ? '1' : '0')).join('');
        // Convert the flipped binary representation back to a decimal number
        const decimal = parseInt(flippedBinary, 2);
        return decimal;
    }
    // Example usage:
    const input = 2147483647; // Replace with your input integer