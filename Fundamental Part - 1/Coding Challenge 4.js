// Coding Challenge #4

const bill = 275;

// ternary operator
const tip = ((bill >=50) && (bill <= 300)) ? (bill*.15) : (bill*.20);

console.log(`The bill was ${bill} and tip was ${tip}, so total bill is ${bill + tip}`);