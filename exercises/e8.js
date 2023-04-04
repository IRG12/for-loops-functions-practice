// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  let balance = [];
  let maxBalance = array[0].balance;
  let bankAccount = {};
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i].name);
    // console.log(array[i].balance);

    if (array[i].balance > 0) {
      // console.log(array[i].name, array[i].balance)
      if (array[i].balance > maxBalance) {
        bankAccount.id = array[i].id;
        bankAccount.name = array[i].name;
        bankAccount.balance = array[i].balance;
        bankAccount.deposits = array[i].deposits;
        bankAccount.withdrawals = array[i].withdrawals;
        // console.log(object)
        balance.push(bankAccount);
      }
    }
  }

  console.log([balance[0]], "balance");
  return [balance[0]];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
