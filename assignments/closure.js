// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function makeFunction() {
  let name = "Tyler Turnipseed";

  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunction();
myFunc();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let num = 0;
  // Return a function that when invoked increments and returns a counter variable.
  return () => num++;

};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
newCounter();
newCounter();
newCounter();
console.log(newCounter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let counter = 0;

  function changeVal(val) {
    counter += val;
  }
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  return {
    increment: function () {
      changeVal(1);
    },
    decrement: function () {
      changeVal(-1);
    },
    value: function () {
      return counter;
    }
  }
};

let newestCounter = counterFactory();
console.log(newestCounter.value());
newestCounter.increment();
newestCounter.increment();
console.log(newestCounter.value());
newestCounter.decrement();
console.log(newestCounter.value());