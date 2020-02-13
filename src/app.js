//import './util.js';
// import subtract,{square,add} from './util.js';


// console.log("app.js is running");
// console.log(square(4));
// console.log(add(11,11));
//console.log(subtract(100,80));

// import "./person.js";
// import isSenior,{ isAdult, canDrink } from "./person.js";
// console.log(isAdult(17));
// console.log(canDrink(17));
// console.log(isSenior(65));

//install -> import -> use (npm validator)->Google it 
// import validator from 'validator';

// console.log(validator.isEmail('test@gmail.com'));

import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'testing 123');
ReactDOM.render(template,document.getElementById('app'));