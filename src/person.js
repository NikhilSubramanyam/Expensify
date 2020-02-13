const isAdult = age => (age >= 18 ? true : false);
const canDrink = age => (age >= 21 ? true : false);
const isSeniorCitizen = age => (age >= 65 ? true : false);
export { isAdult, canDrink,isSeniorCitizen as default };
