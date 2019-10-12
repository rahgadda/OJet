## Typescript

### Overview

- TypeScript is a typed super set of JavaScript that compiles to plain JavaScript.

  ![](../01-Images/05-Typescript.png)

- TypeScript is pure object oriented with classes, interfaces and statically typed like C# or Java.
- Compiled TypeScript can be consumed from any JavaScript code.
- Typescript provides [playground](https://www.typescriptlang.org/play/) to run and test. The online editor shows the corresponding JavaScript emitted by the compiler.
- Typescript compiler rejects any raw JavaScript file passed to it. The compiler deals with only **.ts** or **.d.ts** files.

---

### Architecture

- It was designed by **Anders Hejlsberg** (designer of C#) at Microsoft.
- TypeScript comes with an optional static typing and type inference system through the TLS (TypeScript Language Service).
- Typescript uses features like Modules, classes inline to EcmaScript specifications. Typescript also adds additional features like generics and type annotations that aren’t a part of the EcmaScript.
- JavaScript is an interpreted language. Identification of errors can be done based on code execution. Unlike JavaScript, Typescript transpiler provides the error-checking feature. TypeScript will compile the code and generate compilation errors, if it finds some sort of syntax errors.
- TypeScript supports type definitions for existing JavaScript libraries. TypeScript Definition file (with **.d.ts** extension) provides definition for external JavaScript libraries.

---

### Installation

- Install Node.js from [here](https://nodejs.org)
- Install typescript using `npm i -g typescript`. During this tutorial typescript version was **v3.6**.
- To convert a file from **.ts** to **.js** run `tsc <file.ts>`
  ![](../01-Images/06-Compilation.png)
- Typescript has good support for VSCode. Compilation options of typescript can be provided using `tsconfig.json`. A default file can be created using `tsc --init`.
- The `tsconfig.json` file should be placed at the root of TypeScript project so that it be directly used by tsc compiler.

---

### Modules

- Data Types:

  - During variable declaration it is mandatory to define datatype of variables in Typescript.

  ```typescript
  var num: number =5;
  num = "Sample" \\ This leads to Error

  ```

  - Typescript allows to support more than one datatype to a variable. This is called union type definition.

  ```typescript
  let code: string | number;
  code = 123; // OK
  code = "ABC"; // OK
  code = false; // Compiler Error
  ```

  - Different type in typescript

    | Sno | Type      | Description                                                                                                                                                                                                                                                                                                                                                                              |
    | --- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | 1   | number    | Used to define both integers and floating point numbers                                                                                                                                                                                                                                                                                                                                  |
    | 2   | string    | Used to define character and strings                                                                                                                                                                                                                                                                                                                                                     |
    | 3   | boolean   | true or false                                                                                                                                                                                                                                                                                                                                                                            |
    | 4   | undefined | This is a default value set to variables that are not defined or explicitly set with any value. This is also the value returned by function with void or no return values.                                                                                                                                                                                                               |
    | 5   | null      | This is used to indicate value is unavailable. To determine null or undefined of a variable of function call used below console.log(null == undefined) //true console.log(null == null) //true                                                                                                                                                                                           |
    | 6   | any       | Used to store any data type. Expressions involving any are not type checked.                                                                                                                                                                                                                                                                                                             |
    | 7   | void      | This represents "nothing", can be used as a function return value.                                                                                                                                                                                                                                                                                                                       |
    | 8   | never     | This is used to indicate the values that will never occur. The difference between never and void is void type can have undefined or null as a value whereas never cannot have any value. If we try to assign variable to a function with return values as never then typescript will through an error let nothing: never = null; // Error: Type 'null' is not assignable to type 'never' |
    | 9   | enum      | Defines variable that does not change. { Red = 0, Blue, Green }                                                                                                                                                                                                                                                                                                                          |
    | 10  | Array     | Store Arrays of specific datatype. There two ways of defining Arrays number[] - array of numbers Array<string> - array of strings                                                                                                                                                                                                                                                        |
    | 11  | Tuples    | Tuples have a fixed number of elements with specific types. [boolean, string] - Tuple of boolean and a String                                                                                                                                                                                                                                                                            |
    | 12  | Function  | Must specify types for the parameters and return value (param: number) => string - Takes number as input and returns a String                                                                                                                                                                                                                                                            |
    | 13  | {}        | Used to define variables and methods/functions                                                                                                                                                                                                                                                                                                                                           |

---
