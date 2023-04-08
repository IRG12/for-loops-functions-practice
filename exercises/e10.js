// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  let result = [];
  // traverse array
  for (let i = 0; i < array.length; i++) {
    // access object with key of 'name'
    console.log(array[i].name, letter);
    // store name in a variable
    let name = array[i].name;
    // traverse string
    for (let char of name) {
      // if parameter  'letter' equals the 'char' of the string
      if (letter.toLowerCase() === char.toLowerCase()) {
        // push that name to an empty array
        result.push(name);
      }
    }
  }
  console.log(result);
  return result;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
