// This Is Pass By Values:

let a = 10;
let b = a;

b = b + 5;

console.log(a);
console.log(b);

// This Is Pass By Reference in object:

const obj1 = {
  name: "Abdul Abid",
  Password: "AB1234",
};
const obj2 = obj1;

obj2.password = "CD5678";

console.log(obj1);
console.log(obj2);

// This Is Pass By Reference in Array method 1:

const array1 = [1, 2, 3, 4, 5, 6];
const array2 = array1;

array2.push(7);

console.log(array1);
console.log(array2);

// This Is Pass By Reference in Array method 2:

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [].concat(arr1);

arr2.push(7);

console.log(arr1);
console.log(arr2);

let c = [
  {
    id: 1,
    name: "Muhammad Ali",
    category: "a",
  },
  {
    id: 2,
    name: "Abdul Basit",
    category: "a",
  },
  {
    id: 3,
    name: "Muhammad Ahmed",
    category: "b",
  },
  {
    id: 4,
    name: "Ahmed Ali",
    category: "a",
  },
];

let filterItem = c.filter(function (x) {
  if (x.category.includes("a")) {
    return x;
  }
});
console.log(filterItem);
