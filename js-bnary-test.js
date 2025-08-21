/**
 * Converts a string or number to its binary representation.
 * @param {string|number} input The value to convert.
 * @returns {string} The binary representation of the input.
 */
function toBinary(input) {
  // If the input is a string, convert each character to its binary ASCII value
  if (typeof input === 'string') {
    let binaryResult = '';
    for (let i = 0; i < input.length; i++) {
      // Get the ASCII (UTF-16) code of the character
      const charCode = input.charCodeAt(i);
      // Convert the code to its binary representation and pad with leading zeros to 8 bits
      binaryResult += charCode.toString(2).padStart(8, '0') + ' ';
    }
    // Trim any trailing space and return
    return binaryResult.trim();
  } 
  
  // If the input is a number, convert it directly to binary
  else if (typeof input === 'number') {
    // The toString(2) method converts a number to its binary string representation
    return input.toString(2);
  }
  
  // Handle other types of input
  else {
    return 'Invalid input. Please provide a number or a string.';
  }
}

// --- Examples ---

// Example 1: Converting a number
const numberInput = 42;
const binaryNumber = toBinary(numberInput);
console.log(`The binary representation of ${numberInput} is: ${binaryNumber}`); // Output: The binary representation of 42 is: 101010

// Example 2: Converting a string
const stringInput = "Hello";
const binaryString = toBinary(stringInput);
console.log(`The binary representation of "${stringInput}" is: ${binaryString}`); // Output: The binary representation of "Hello" is: 01001000 01100101 01101100 01101100 01101111

// Example 3: Invalid input
const invalidInput = null;
const binaryInvalid = toBinary(invalidInput);
console.log(binaryInvalid); // Output: Invalid input. Please provide a number or a string.