// EXERCISE 16
// Please, read the exercise-info/flat.md to get the initial data of what is the expected result of this exercise.
// Array example: flatArraysData in /data/data.js
// flatArrays([['d', 'r'], 'z', 'b', ['f', 'y']]) => ['d', 'r', 'z', 'b', 'f', 'y']
// NOTE: You can NOT use the array.flat() method in your code

export function flatArrays(array) {
  const storing = [];
  const result = [];
  let specificStringWhenJoined = "";
  let concatString = "";
  for (let h = 0; h < array.length; h++) {
    if (typeof array[h] === "object") {
      for (let a = 0; a < array[h].length; a++) {
        storing.push(array[h][a]);
        // console.log(array[h][a])
      }
    }

    if (typeof array[h] !== "object") {
      console.log(array[h]);
      storing.push(array[h]);
    } else if (typeof array[h] !== "object" && typeof array[h] === "string") {
      if (concatString === "") {
        concatString += array[h];
        // console.log(specificStringWhenJoined)
      } else {
        concatString += " " + array[h];
      }
    }

    specificStringWhenJoined = concatString;
  }

  if (storing.length) {
    console.log(storing);
    return storing;
  } else {
    console.log(specificStringWhenJoined);
    return specificStringWhenJoined;
  }
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
