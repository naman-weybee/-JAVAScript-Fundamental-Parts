// ------------------------ Coding Challenge #3 ------------------------
"use strict";
const mark = {
    fullname : 'Mark Miller',
    mass : 78,
    height : 1.6,

    calBMI: function(){
        console.log(this);
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }

};

const john = {
    fullname : 'John Smith',
    mass : 92,
    height : 1.95,

    calBMI: function(){
        console.log(this);
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};

console.log(mark.calBMI());
console.log(john.calBMI());

let anwser = (mark.calBMI() > john.calBMI()) ? 'higher' : 'lower';
console.log(`Mark's BMI ${mark.calBMI()} is ${anwser} than John's BMI ${john.calBMI()}.`);