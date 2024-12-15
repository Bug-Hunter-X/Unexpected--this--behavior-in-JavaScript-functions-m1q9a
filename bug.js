function myFunc() {
  console.log(this);
}

myFunc(); // Output: undefined in strict mode, window in non-strict mode