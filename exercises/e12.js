// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...

  let result = [];
  // traverse array
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i])
    // store withdrawals to a variable
    let accountsDeposits = array[i].deposits;
    let sum = 0;
    // console.log(accountsDeposits)
    // if an account's withdrawal exist
    if (accountsDeposits !== undefined) {
      // console.log(accountsDeposits)
      //traverse accounts that have withdrawals
      for (let j = 0; j < accountsDeposits.length; j++) {
        // console.log(accountDeposits[j])
        if (accountsDeposits[j] > 100) {
          let accountDeposits = accountsDeposits[j];
          console.log(accountDeposits);
          // sum each accounts withdrawals
          // sum += deposit[j];
          // console.log(sum)
          result.push(accountDeposits);
        }
      }
      // console.log(`Sum of nested array ${i + 1}: ${sum}`);
      // push sum of each account to empty array named 'result'
      // if an account's withdrawal does NOT exist
    }
  }
  // answer
  console.log(result);
  return result;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
