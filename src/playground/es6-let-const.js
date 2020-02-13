var nameVar = 'Nikhil';
var nameVar = 'Prajna';
console.log('nameVar', nameVar);

let nameLet = 'Nithin';
nameLet ='Julie'
console.log('nameLet',nameLet);

const nameConst ='Frank';
console.log('nameConst',nameConst);


// function getPetName() {
//      let petName = 'Hal';
//      return petName;
// }

// getPetName();
// console.log(petName);

//Block Level Scoping
var fullName ='Nikhil subramanyam';

if(fullName) {
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);