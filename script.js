function firstNonRepeatedChar(str) {
    const charCount = {};

    // Count the occurrences of each character in the string
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeated character
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // Return null if no non-repeated character is found
    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
