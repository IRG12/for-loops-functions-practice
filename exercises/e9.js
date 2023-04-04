// EXERCISE 9
// Return an array of bank accounts with balance over $100
// Array example: bankAccounts in /data/data.js
// getClientsWithBalanceOverOneHundred(array) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithBalanceOverOneHundred(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].balance > 100) {
      // console.log(array[i].name, array[i].balance)
      const acount = array[i];
      const bankAccount = {
        id: acount.id,
        name: acount.name,
        balance: acount.balance,
        deposits: acount.deposits,
        withdrawals: acount.withdrawals,
      };
      for (let key in acount) {
        if (acount[key] !== undefined) {
          bankAccount[key] = acount[key];
        }
      }
      result.push(bankAccount);
      // console.log(bankAccount)
    }
  }
  console.log(result);
  return result;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-9"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
