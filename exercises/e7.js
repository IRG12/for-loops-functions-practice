// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(array) {
  let balance = [];
  let minBalance = array[0].balance;
  let object = {};
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i].name);
    // console.log(array[i].balance);

    if (array[i].balance > 0) {
      // console.log(array[i].name ,array[i].balance)
      if (array[i].balance < minBalance) {
        object.id = array[i].id;
        object.name = array[i].name;
        object.balance = array[i].balance;
        object.deposits = array[i].deposits;
        object.withdrawals = array[i].withdrawals;
        console.log(object);
        balance.push(object);
        console.log(balance, "balance");
      }
    }
  }
  return balance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
