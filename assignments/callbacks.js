// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// Function
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

// Invocation
getLength(items, length => console.log(length));

// Function
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

// Invocation
last(items, lastItem => console.log(lastItem));

// Function
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

// Invocation
sumNums(3, 4, sum => console.log(sum));

// Function
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

// Invocation
multiplyNums(3, 4, multiply => console.log(multiply));

// Function
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let bool = false;

  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      bool = true;
      break;
    }
  }

  return cb(bool);
}

// Invocation
contains('yo-yo', items, check => console.log(check));

/* STRETCH PROBLEM */
const dupedItems = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];

function removeDuplicates(array, cb) {
  let singleItems = [];
  let i, arrLen = array.length;
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  for (i = 0; i < arrLen; i++) {
    if (!singleItems.includes(array[i])) {
      singleItems.push(array[i]);
    }
  }

  return cb(singleItems);
}

removeDuplicates(dupedItems, unDuped => console.log(unDuped));