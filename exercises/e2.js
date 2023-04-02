// EXERCISE 2
// for every number between 0 and max find all numbers that have square roots that are integers
// getNumbersWithSquareRoots(17) => [0, 1, 4, 9, 16]

export function getNumbersWithSquareRoots(max) {
  let array = [];
  let perfect = [];
  let count = 0;
  while (count < max) {
    // console.log(count);
    array.push(count);
    if (count === max) {
      break;
    }
    count++;
  }
  console.log(array, "Line 12");

  for (let i = 0; i < array.length; i++) {
    let sqrNum = array[i] * array[i];
    if (sqrNum < max) {
      perfect.push(sqrNum);
      console.log(sqrNum);
      console.log(perfect);
    }
  }
  return perfect;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

// My comments:
// A square root is a mathematical operation that is the inverse of squaring a number. In other words, if you take the square root of a number, you will get a value that, when multiplied by itself, equals the original number. For example, the square root of 25 is 5, because 5 multiplied by itself equals 25.

// When a square root is an integer, it means that the result of the operation is a whole number. In other words, the number being squared has a perfect square root. For example, the square root of 16 is 4, which is an integer.

// So when the question asks "What are square roots that are integers?", it is asking for numbers that have perfect square roots, or in other words, numbers that when you take the square root of them, the result is a whole number. Some examples of these numbers include 1, 4, 9, 16, 25, 36, 49, and so on.
