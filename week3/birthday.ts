function birthday(s: number[], d: number, m: number): number {
    let count = 0;

    for (let i = 0; i <= s.length - m; i++) {
        const segment = s.slice(i, i + m);
        const sum = segment.reduce((acc, num) => acc + num, 0);
        if (sum === d) {
            count++;
        }
    }

    return count;
}

// Example usage:
const s = [1, 2, 1, 3, 2];
const d = 3; // Ron's birth day
const m = 2; // Ron's birth month
console.log(birthday(s, d, m)); // Output: 2