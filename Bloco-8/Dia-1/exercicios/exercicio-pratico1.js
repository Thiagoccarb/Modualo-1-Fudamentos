const waking = () => 'Acordando!!';
const coffee = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => func();

doingThings(waking);

console.log(doingThings(coffee));