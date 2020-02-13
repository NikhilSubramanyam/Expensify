//ES5 Features

const square = function (x) {
 return x*x;
};


//ES6 Features
// const squareArrow = (x) => {
//     return x*x;
// };

//If only single line statements
// const squareArrow = (x) => x*x;
// console.log(squareArrow(8));

//Challenge
const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Nikhil Subramanyam'))