// ------------------------ Coding Challenge #1 ------------------------
"use strict";
const calcAverage = (a, b, c) => (a+b+c)/3;

let Dolphins = calcAverage(44,23,71);
let Koalas = calcAverage(65,54,49);

// Test 1
function checkWinner(Dolphins, Koalas){
    if (Dolphins >= 2 * Koalas){
        console.log(`Dolphins win ${Dolphins} vs. ${Koalas}`);
    } else if (Koalas >= 2 * Dolphins) {
        console.log(`Koalas win ${Koalas} vs. ${Dolphins}`);
    } else{
        console.log('No Team Wins...!');
    }
}
checkWinner(Dolphins, Koalas);

// Test 2
Dolphins = calcAverage(85,54,41);
Koalas = calcAverage(23,34,27);
checkWinner(Dolphins, Koalas);
