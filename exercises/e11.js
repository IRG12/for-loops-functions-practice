// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

export function getAllWithdrawals(array) {
  let result = [];
  // traverse array
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i])
    // store withdrawals to a variable
    let withdrawal = array[i].withdrawals;
    let sum = 0;
    // console.log(withdrawal)
    // if an account's withdrawal exist
    if (withdrawal !== undefined) {
      // console.log(withdrawal)
      //traverse accounts that have withdrawals
      for (let j = 0; j < withdrawal.length; j++) {
        // console.log(withdrawal)
        // sum each accounts withdrawals
        sum += withdrawal[j];
        // console.log(sum)
      }
      // console.log(`Sum of nested array ${i + 1}: ${sum}`);
      // push sum of each account to empty array named 'result'
      result.push(sum);
      // if an account's withdrawal does NOT exist
    } else if (withdrawal == undefined) {
      // set that 0 to what would have been an array of that person's withdrawals
      withdrawal = 0;
      // push it to 'result' array
      result.push(withdrawal);
    }
  }
  // answer
  // console.log(result);
  return result;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
