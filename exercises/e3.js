// EXERCISE 3
// Make sure to solve two parts beneath

/**
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
  // Your code goes here...
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    let sumTotal = (sum += array[i]);
    console.log(sumTotal);
    avg = sumTotal / array.length;
    console.log(avg);
  }
  return avg;
}

/**
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */

export function getStringSum(str) {
  // Your code goes here...
  let sumArray = [];
  let sum2 = 0;
  for (let i = 0; i < str.length; i++) {
    console.log(parseInt(str[i]));
    if (parseInt(str[i])) sumArray.push(parseInt(str[i]));
    console.log(sumArray);
  }
  for (let j = 0; j < sumArray.length; j++) {
    sum2 += sumArray[j];
  }
  console.log(sum2);
  return sum2;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
