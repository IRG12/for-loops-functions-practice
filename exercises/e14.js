// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...

  let result = [];
  let currentBalance;

  let account;
  // traverse array
  for (let i = 0; i < array.length; i++) {
    account = array[i];
    // console.log(account)
    // store withdrawals to a variable
    // let deposits = array[i].deposits;
    // let withdrawals = array[i].withdrawals;
    let sumDeposits = 0;
    let sumWithdrawals = 0;
    // console.log(deposits)
    // console.log(withdrawal)
    // if an account's withdrawals and deposits exist
    if (account.withdrawals && account.deposits) {
      // console.log(account.deposits)
      // console.log(account.withdrawals)
      // console.log(account)
      currentBalance = account.balance;
      // console.log(currentBalance)
      if (account.deposits) {
        for (let d = 0; d < account.deposits.length; d++) {
          // console.log(account.deposits[d])
          sumDeposits += account.deposits[d];
        }
        // console.log(sumDeposits)
      }
      if (account.withdrawals) {
        for (let w = 0; w < account.withdrawals.length; w++) {
          // console.log(account.withdrawals[w])
          sumWithdrawals += account.withdrawals[w];
        }
        // console.log(sumWithdrawals)
      }
      let diff = sumDeposits - sumWithdrawals;
      // console.log(diff !== currentBalance)
      if (diff !== currentBalance) {
        // console.log(account)
        result.push(account);
      }
    }
  }
  console.log(result);
  return result;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
