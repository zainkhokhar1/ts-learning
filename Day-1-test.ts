
// 1️⃣ Primitive Types — Fill in correct types and these all are never going to be changed because they are all fixed
const username: string = "Zainul"; // it's going to be string with fixed value 'Zainul'
const age: number = 21; // type number assigned for both integer and float
const isVerified: boolean = true; // type boolean assigned for true and false
const userId: bigint = 123456789n; // type for larger numbers always ends with n
const uniqueKey: symbol = Symbol("id"); // generates a unique symbol
const nothingHere: null = null; // primitive null value
const notSetYet: undefined = undefined; // undefined  type never going to be changed again

// 2️⃣ Array of strings with fixed array length I can use this below method
let skills: [string, string, string] = ["HTML", "CSS", "TS"]; // array of strings with fixed length

// 3️⃣ Tuple — fixed-length, mixed types
// Array has same type of elements in it in ts but tuple contains multiple type of elements
let person: [string, number] = ["Ali", 25]; // [string, number]

// generic value to write string of any length
let array1: Array<number> = [
  4, 65, 6634, 3, 4, 34, 34, 4, 43, 43, 43, 43, 43, 4,
];
// any length array of numbers
let array2: number[] = [4, 65, 6634, 3, 4, 34, 34, 4, 43, 43, 43, 43, 43, 4];

// first two types and numbers are fixed and then it can have any length of that spread operator array variables.
let flags: [string, number, ...boolean[]] = [
  "Ali",
  25,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
];

// To prevent length changing or you can say make a fixed length of array we can do something like this
let fixedLengthArray: readonly [string, number, boolean] = ["Ali", 25, true];
// this is not going to allow any operation that will change it's length

// 4️⃣ Union type — can be string or number
let score: number | string = 90;
score = "A+"; // valid

// 5️⃣ Literal types — only specific values allowed
let role: "admin" | "user" | "guest" = "admin"; // only "admin", "user", "guest" allowed
role = "guest";

// 6️⃣ Enum — define 3 user roles and use one
enum UserRole {
  Admin,
  User,
  Guest,
}
let currentRole: UserRole = UserRole.Admin;
// Answer will be zero 0

// 7️⃣ Function with `void` return
function greet(name: string): void {
  console.log("Hello", name);
}

// 8️⃣ Function that always throws — `never` type
function throwError(): never {
  throw new Error("Something went wrong");
}

// 9️⃣ `any` type — assign anything
let anything: any;
anything = 10;
anything = "yes";
anything = true;

// 🔟 `unknown` type — needs checking before usage
let maybeValue: unknown = "I might be anything";
if (typeof maybeValue === "string") {
  console.log(maybeValue.toUpperCase());
}

// ✅ Your Output
console.log("Test completed!");
