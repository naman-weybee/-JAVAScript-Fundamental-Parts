// Coding Challenge #3
"use strict";
var Dolphins;
var Koalas;
var DolphinsData1;
var KoalasData1;
var DolphinsData2;
var KoalasData2;
var DolphinsData3;
var KoalasData3;

DolphinsData1 = (96+108+89)/3;
DolphinsData2 = (97+112+101)/3;
DolphinsData3 = (97+112+101)/3;

KoalasData1 = (88+91+110)/3;
KoalasData2 = (109+95+123)/3;
KoalasData3 = (109+95+126)/3;

Dolphins = (DolphinsData1+DolphinsData2+DolphinsData3)/3;
Koalas = (KoalasData1+KoalasData2+KoalasData3)/3;

if(Dolphins < Koalas){
    console.log("Koalas Wins")
}else if(Dolphins > Koalas){
    console.log("Dolphins Wins!")
}else{
    console.log("Draw...!")
}
