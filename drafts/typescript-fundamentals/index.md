# Typescript fundamentals

## What is Typescript ?
Is an open source programming language created by Microsoft and it was created as a typed superset of Javascript. It compiles to clean, simple Javascript code with runs on any browser, in Node.js, or in any Javascript engine that supports ECMAScript 3 or newer. Currently this is a very popular language and it is being used instead Javascript because of being statically typed over dYnamically typed, I don't mean that static is better than dynamic but for nowdays purposes where we as software developers need to create large application with requirmentes changing every day is  better if we have more verbose and explicit code.

## What is static and dynamic typed ?
Is important to understand the difference between static and dynamic because it is the main difference between Javascript and Typescript. When we write code we do in a way that is understandable for humans and this code is called `source code`, but machines don't understand our language and this is why `source code` is translated by a `compiler` or an `interpreter` to machine code, finally a computer executes machine and this phase is called `Run-time`. 

Being TS static typed it checks types during `compile` time and JS do it during `Run-time`.

From my point of view TS is better than JS in this sense because we can find errors in an early step and using TS tools we can notice this erros even before compiling our code.

### Working with Typescript

#### Basic Types
All programs need to have simple units of data to build complex applications, in TS we have numbers, strings, Array, Tuple, Enum, Any, Void, Null and undefined, Object and Type assertions.

#### Interfaces
One of Typescript's core principles is that type checking focuses on the shape that values have. This is sometimes called `duck typing` or `structural subtyping`. In Typescript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

#### Generics
A major part of software engineering is building components that not only have well-defined and oncistent APIs, but are also reusable. Components that are capable of working on the data of today as well as the data of tomorrow will give you the most flexible capabilities for building up large software systems. 

In a function, we capture the type of the argument in such a way that we can also use it to denote what is being returned.
```
  function identity<T>(arg: T): T {
      return arg;
  }
```
So we've now added a type variable T to the identity function. This T allows us to caputre the type the user provide and we can use that information later. Here we use `T` again as the return type. This `identity` function is generic because it works over a range of types.

A generic function could be invoked in one of two ways:

Here we explicitly set `T` to be a `string`
```
let output = identity<string>("myString");  // type of output will be 'string'
```

or

The most common way is when we use `type argument inference`- that is, we want the compiler to set the value of T for us automatically based on the type of the argument we pass in:
```
let output = identity("myString");  // type of output will be 'string'
```

#### Declaration files

There is not tools required to consume declaration files, in acquiring, ausing and finding them.
If the npm package already includes its declaration file there is no need of downloading the corresponding `@types` package, but in case it don't have a declartaio file we should download it from (Definitely typed repository)[https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types]

Downloading 
```
npm install --save @types/lodash
```

Consuming
With a declaration file we will be able to use lodash in our Typescript code with no fuss.
```
import * as _ from "lodash";
_.padStart("Hello TypeScript!", 20, " ");
```
