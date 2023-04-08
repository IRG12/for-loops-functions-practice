// EXERCISE 19
// Please, read the exercise-info/reverse.md to get the initial data of what is the expected result of this exercise.
// reverseArray([1, 2, 3 ,4]) => [4, 3, 2, 1]
// NOTE: You can NOT use the array.reverse() method in your code

export function reverseArray(array) {
  // Your code goes here...
  // iterate over the first half of the array (up to the middle element)
  for (let i = 0; i < array.length / 2; i++) {
    let firstIndex = i; // store the index of the first element of the pair to swap
    let lastIndex = array.length - 1 - i; // store the index of the last element of the pair to swap

    let temp = array[firstIndex]; // temporarily store the value of the first element of the pair
    array[firstIndex] = array[lastIndex]; // overwrite the value of the first element with the value of the last element
    array[lastIndex] = temp; // overwrite the value of the last element with the temporary value (the original value of the first   element)
  }

  console.log(array);
  return array;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-19"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
