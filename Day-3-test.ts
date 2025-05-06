
// FUNCTIONS WITH TYPES (Default, Optional params)

// Functions with Types in TypeScript
// TypeScript allows you to explicitly define types for:

// Parameters

// Return types

// Function returning string and params definition
function non(name: string): string {
  return name;
}

// Function having arrow function

const multiply = (a: number, b: number): number => a * b;

// optional params

const divide = (a: number, b?: number): number => {
  return b ? a / b : a;
};

// default params
function greet (name: string = 'zain'): string{
 return name;
}


