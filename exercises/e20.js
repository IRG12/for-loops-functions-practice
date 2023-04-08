// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  let array2 = [];
  let array3 = [];
  let result = [];
  let letter = "a";
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i])
    let hasLetter = false;
    for (let j = 0; j < array[i].length; j++) {
      // console.log(array[i][j])
      if (letter === array[i][j]) {
        hasLetter = true;
        break;
      }
    }
    if (hasLetter) {
      array2.push(array[i]);
    } else {
      array3.push(array[i]);
    }
  }
  // console.log(array2)
  result.push(array2);
  // console.log(array3)
  result.push(array3);
  // console.log(result);
  return result;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
