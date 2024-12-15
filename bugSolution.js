function myFunc() {
  console.log(this);
}

// Solution 1: Using bind()
const boundMyFunc = myFunc.bind({ name: 'bound object' });
boundMyFunc(); // Output: { name: 'bound object' }

// Solution 2: Using arrow function
const arrowMyFunc = () => {
  console.log(this);
};
arrowMyFunc(); // Output: (global object or undefined depending on the context)