// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...

  let result = [];
  // traverse array
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i])
    // assign object array[i] to a variable named 'account'
    let account = array[i];
    let accountsDeposits = array[i].deposits;
    // console.log(accountsDeposits)
    let sum = 0;
    // going to push account(s) that are defined
    if (accountsDeposits !== undefined) {
      // console.log(accountsDeposits)
      for (let j = 0; j < accountsDeposits.length; j++) {
        // console.log(accountDeposits)
        // console.log(accountDeposits[j])
        // sum each accounts deposits
        sum += accountsDeposits[j];
        // console.log(sum)
      }
      // console.log(sum);
      // sum of deposits less than 2000
      if (sum < 2000) {
        // console.log(account)
        // exit nested for loop to get total summed deposits for each array           in account
        // push account(s) to 'result' array

        result.push(account);
      }
      // console.log(result)
    } else if (accountsDeposits == undefined) {
      result.push(account);
    } else {
      return null;
    }
  }
  console.log(result);
  return result;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
