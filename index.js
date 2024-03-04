// EXAMPLE 1 - Get the Last item in an Object in JavaScript

const obj = {one: 1, two: 2, three: 3};

const lastKey = Object.keys(obj).pop();
console.log(lastKey); // 👉️ three

const lastValue = Object.values(obj).pop();
console.log(lastValue); // 👉️ 3

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the last key-value pair in an object using Object.entries()

// const obj = {one: 1, two: 2, three: 3};

// const [key, value] = Object.entries(obj).pop();

// console.log(key); // 👉️ three
// console.log(value); // 👉️ 3

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using Array.at() with Array.pop()

// const obj = {one: 1, two: 2, three: 3};

// const [key, value] = Object.entries(obj).at(-1);

// console.log(key); // 👉️ three
// console.log(value); // 👉️ 3
