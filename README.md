# Unexpected 'this' behavior in JavaScript functions

This repository demonstrates a common source of confusion in JavaScript: the implicit binding of the `this` keyword.  The example shows how the value of `this` can vary depending on whether the code is running in strict mode or not.

## Bug

The `bug.js` file contains a simple function `myFunc`. When called, the value of `this` inside the function differs depending on the execution context. In strict mode, `this` will be `undefined`, whereas in non-strict mode, it will be bound to the global object (usually the `window` object in browsers).

## Solution

The `bugSolution.js` file offers solutions to manage the context of 'this' effectively.

**Solution 1:** Explicitly bind 'this' using `bind()`
**Solution 2:** Use arrow function for lexical this