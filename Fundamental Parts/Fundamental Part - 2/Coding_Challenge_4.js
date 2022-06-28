// ------------------------ Coding Challenge #4 ------------------------
"use strict";
let d,p,sum = 0;
function calcTip1(bill1){
    const tip1 = bill1>=50 && bill1<=300 ? bill1*.15 : bill1*.2;
    return tip1;
}
const tips1 = [];
const totals = [];
const bills1 = [22,295,176,440,37,105,10,1100,86,52];
for(d=0;d<bills1.length;d++){
    const tips = calcTip1(bills1[d]);
    tips1.push(tips);
    totals.push(tips + bills1[d]);
}
console.log(bills1);
console.log(tips1);
console.log(totals);

function calcAverage1(arr1){

for(p=0;p<arr1.length;p++){
    sum += arr1[p];
}
return sum / arr1.length;
}
console.log(calcAverage1(bills1));
console.log(calcAverage1(tips1));
console.log(calcAverage1(totals));