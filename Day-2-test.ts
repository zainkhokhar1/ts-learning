
// Arrays, Touples, any, unknown , Literal types in typescript

// Arrays in ts

// basic typed arrays
const array1 : string[] = ['zain','khan','jan'];

const array2 : number[] = [1,2,3,4,5,6,7,8,9,10];

const isActive : boolean[] = [true,false,true,false,true,false];

const array4 : any[] = ['zain',1,true];

interface User{
    name : string;
    age : number,
    nickname : string[],
    phone_Number: number[],
    login_History: Date[]
}

// B. Readonly Arrays
const fixedUsers: readonly string[] = ['zain','khan','jan'];
// this array length cannot be changed

// C. Union type Array
const array5 : (string | number)[] = ['zain',1,'khan',2,'jan',3];

// Difference between tuples and Array
// Touples have fixed length and the pre-defined types and the elments going to be stored in it.
// Touple follow the order of the creation
// Touples are more strict then the arrays
// Touples contains multiple type of elements in it
// Arrays can contain multiple type of elements in it but usually it contains same type of elements in it
// Arrays can be of fixed length and can be of any length


// Basic tuples
// 1. 
const tuple1 : [string,number] = ['zain',1]; 
// Here order must be followed

// Optional touple elements

const toupleOptional : [string, number?] = ['zain']; 
// Here the second number is optional because of the ? mark symbol used here

// Ready only touples

const userRoles: readonly [string, string] = ['admin','user'];
// You can only ready it nothing can be manipulated in this tuple.

// any vs unknown vs never
// any type is used to get out of the rules of ts

let data: any = 4;
data = new Date();
data = 'zain';

// it can have any type of value in it

let value : unknown;

value = 4;
value = 'zain';
value = new Date();

console.log(value);

// error because it's unknown type
// value.slice(0,2);

// Any type of operation associated with the unknown type value is not allowed to use unless you use a safe check for it that is below

if(typeof value === 'string'){
    value.slice(0,2);
}

// never type in ts

// it's used for un-reachable code block

// if we have a function and it returns nothing but in actual it returns undefined if we return nothing from it and it uses void type internally
// example

function noReturn(){
    console.log('This is me Zain');
}

noReturn();

// If there is an error in the code then it will not return any thing

function apiError(message:string): never{
    throw new Error(message);
}

apiError('This is an error');

// never is used when we know that the function is going to through an error and it will return nothing for standards we use never type

// In literal type we can define the exact values the variable can have.

let vehicle : 'car' | 'truck' | 'bus';
// here vehicle is declared as type string with only the mentioned options of values and cannot have other then this type
vehicle = 'bus';


function getVehicle (vehicle: 'car'|'truck'|'bus'){
    return vehicle;
}

type man = string | number;
type touple = [string,number];

let tuples : touple;

let number : man;
number = 'zain';
number = 5;

// interface is used when you want to construct complex objects
interface student{
    name: string,
    age: number,
    nickName: string[],
    gender: 'male' | 'female' | 'other'
};
