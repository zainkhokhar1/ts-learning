// Today topics are
// Unions, intersections, typeof

// 1. typeof
// 2. in
// 3. instanceof

// Union types are used when we want that the variable can have more than 1 type but not the any type.

// example

function input(name: string, dob: string | number): void {}
// dob in this function is assigned a union type because it can have both types of values string or number but not other than these two types are allowed to assign.

// Intersection is used to combine the types and make a new type that has all the previous types in it.

// Example :

type detail = {
  name: string;
  age: number;
};

type additionalDetail = {
  gender: "M" | "F" | "O";
  maritalStatus: "Married" | "UnMarried";
};

type allDetails = detail & additionalDetail;

let user: allDetails = {
  name: "Zain ul abideen",
  age: 21,
  gender: "M",
  maritalStatus: "UnMarried",
};

// Intersection here is used to combine two types and create a parent type that will have all the properties (already defined types) of all childs.

// We use type narrowing to convert the broader types in to more specific types.

// typeof is used to primitive types.
// in is used for object properties (like for user object the properties are name, age etc).
// instanceof is used for the classes.

// typeof is used to check a variable that it has what type at a specific time.
// eg :
// type num = string | number;
// const number : num = 4;
// number can have any of the type defined
// if (typeof number === "string") {
//    number.toLowerCase();
// }else{
//     number.toFixed(10)
// }

// in operator is used to specifically check that a property exists or not

