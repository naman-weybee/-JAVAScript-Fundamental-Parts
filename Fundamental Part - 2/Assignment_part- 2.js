// ----------------------------assignments-----------------------

// assignments ------- Functions -------
function describeCountry(country, poppulation, capitalcity){
    const info = console.log(`${country} has ${poppulation} people and itscapital city is ${capitalcity}`);
    return info;
}
const data = describeCountry('india', '132 crores', 'delhi');

// A function Declaration must have a function name and does not require variable to store the function.
// A function Expression is similar to a function declaration without the function name and it stored in variable.

// function Declaration

function calage1(birthyear){
    const data = 2022 - birthyear;
    return data;
}
const age1 = calage1(2001);
console.log(age1);

// function Expression
const calage2 = function(birthyear){
    const data = 2022 - birthyear;
    return data;
}
const age2 = calage2(2005);
console.log(age2);

// assignments ------- Function Declarations vs. Expressions -------

// // function Declaration

function percentageOfWorld1(poppulations){
    const country = (poppulations/7752800000)*100;
    return country;
}
const poe = percentageOfWorld1(1380000000);
console.log(`poppulation of india is ${poe}%`);

// function Expression

const percentageOfWorld2 = function(poppulations){
    const country1 = (poppulations/7752800000)*100;
    return country1;
}
const poe1 = percentageOfWorld2(329500000);
console.log(`poppulation of america is ${poe1}%`);
const poe2 = percentageOfWorld2(1216100000);
console.log(`poppulation of africa is ${poe2}%`);

// Aerrow Function
const calcage3 = birthyear1 => 2022 - birthyear1; 
const age3 = calcage3(2001);
console.log(age3);

const yearstoretirement = (birthyear2, firstname) => {
    const age4 = 2022 - birthyear2;
    const retirement = 65 - age4;
    return `${firstname} retires in ${retirement} years.`;
}
console.log(yearstoretirement(2001,'naman'));

// assignments ------- Arrow Functions -------
const percentageOfWorld3 = (poppulation1, country2) => {
    const pep = (poppulation1/7752800000)*100;
    return `${country2} has ${pep}% poppulation in world.`
}
const data1 = percentageOfWorld3(1380000000, 'india');
console.log(data1);

// assignments ------- Functions Calling Other Functions -------
function cutpieces(fruits2){
    return fruits2 * 4;
}

function juice1(apples1, oranges1){
    const fruitpieces1 = cutpieces(apples1);
    const fruitpieces2 = cutpieces(oranges1);
    const fruits1 = (`juice from ${fruitpieces1} pieces of apples and ${fruitpieces2} pieces of orange.`);
    return fruits1;
}

const myjuice1 = juice1(5,4);
// var apples1 = prompt("enter no. of apples");
// var oranges1 = prompt("enter no. of oranges");
// const myjuice1 = juice1(apples1, oranges1);
console.log(myjuice1);

// Assignment Functions Calling Other Functions
function percentageOfWorld1(poppulations1){
    return (poppulations1/7752800000)*100;
}
function describePopulation(country3){
    const pop1 = percentageOfWorld1(1380000000);
    const pop2 = percentageOfWorld1(380000000);
    return `${country3} has ${pop1} people, which is about ${pop2} of the world.'`
}
const data2 = describePopulation('india');
console.log(data2);
const data3 = describePopulation('usa');
console.log(data3);

// assignments ------- Basic Array Operations (Methods) -------

const neighbours = ['india','usa','uk'];
console.log(neighbours);
console.log(neighbours.push('utopai'));
console.log(neighbours.pop());
if(neighbours.includes('germany')){
    console.log('central European country');
}else{
    console.log('Probably not a central European country');
}
console.log(neighbours.indexOf('uk'));
neighbours[2] = 'republic of uk';
console.log(neighbours);

// assignments ------- Dot vs. Bracket Notation -------

// console.log(`${mycountry.country4} has ${mycountry.poppulation3} ${mycountry.language}-speaking people, ${length.neighbours1} neighbouring countries and capital called ${mycountry.capital}`);
// mycountry.poppulation3 = '135 crores';
// console.log(mycountry);
// mycountry['poppulation3'] = '138 crores';
// console.log(mycountry);

// assignments ------- Iteration: The for Loop -------
"use strict";
let i;
for(i=1;i<=50;i++){
    console.log(`Voter number ${i} is currently voting`);
}

//----------------------------------------------------

const percentages2 = [1380000000, 32000000, 45000000, 1170000000];
for(i=0;i<4;i++){
    console.log(percentages2[i]/77528000);
}

// assignments ------- Looping Arrays, Breaking and Continuing -------

const jonas = ['John','Smith',92,1.95,'usa'];

let j;
for(j=0 ; j<jonas.length ; j++){
    if(typeof jonas[j] !== 'string') continue;
    console.log(jonas[j]);
}

// assignments ------- Looping Backwards and Loops in Loops -------

const jonas1 = ['John','Smith',92,1.95,'usa'];

let k,s,z;
for(k=jonas1.length-1;k>=0;k--){
    console.log(jonas1[k]);
}

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];

for(s=0;s<listOfNeighbours.length;s++){
    for(z=0;z<listOfNeighbours[s].length;z++){
        console.log(`Neighbour : ${listOfNeighbours[s][z]}`);
    }
}

// assignments ------- The while Loop -------

let x=0,m=0;
const listOfNeighbours1 = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];

while(x<listOfNeighbours1.length){
    while(m<listOfNeighbours1[x].length){
        console.log(`Neighbour : ${listOfNeighbours1[x][m]}`);
        m++;
    }
    x++;
}