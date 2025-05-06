//  OBJECTS , TYPE ALIASES , INTERFACES.

//  Objects in js and ts are used to store the real world entities informations in the form of key-value pair. In other words it's a collection of key-value pairs.

// For type safety of apps where we use multiple similar structured objects we have to use the type-aliases and interfaces.

// Example of type aliases

type Obj = {
  name: string;
  age: number;
  gender: string;
};

let z_obj: Obj = {
  name: "zain",
  age: 4,
  gender: "Male",
};

type Role = "admin" | "student" | "learner";

let User: {
  name: string;
  role: Role;
};

User = {
  name: "zain",
  role: "learner",
};

// Type aliases have some limitations then interfaces
// Best practice is to write their word's first letter in capital

// Limitations of type aliases

// 1. We cannot add more properties to it like we do re-opening of the interfaces.

// interface Person {
//   name: string;
//   password: string;
// }

// interface Person {
//   dob: Date;
// }

// now here we have re-opened the Person interface and added a new property dob to it and it will work perfectly for us.

// const person: Person = {
//   name: "zain",
//   password: "ril187187",
//   dob: new Date(),
// };

// person is having all the old and the new properties.

// Now let's try the same thing for the type Aliases

// type Person = {
//   name : string;
//   password : string;
// }

// type Person = {
//     dob : Date;
// }

// It will through an error that duplicate key is not supportive here... in type aliases.


