//ES5 vs ES6

//Arguments object - No longer bound with arrow functions
// const add = function(a,b) {
//     console.log(arguments);
//     return a+b;
// };
// console.log(add(55,1));

//This is an error as arguments keyword cannot be used with arrow functions
const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};
//console.log(add(55, 1));
//This keyword - no longer bound

const user = {
  name: "Nikhil",
  cities: ["Dallas", "New York", "New Jersey", "Dover"],
  printPlacesLived() {
    const cityMsgs = this.cities.map(city => {
      return this.name + " has lived in " + city;
    });
    return cityMsgs;
    //This keyword is not accessible below
    //  this.cities.forEach(function(city) {
    //      console.log(this.name + 'has lives in ' + city);
    //  });

    // this.cities.forEach((city) =>{
    //     console.log(this.name + ' has lives in ' + city);
    // });
  }
};
//console.log(user.printPlacesLived());

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) =>{
return number * this.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());