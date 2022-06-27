// Coding Challenge #2

var markmass = 95;
var markheight = 1.88 ;
var markBMI;

var johnmass = 96;
var johnheight = 1.5 ;
var johnBMI;

markBMI = markmass / markheight ** 2;
johnBMI = johnmass / johnheight ** 2;

if(markmass < johnBMI){
    console.log("John's BMI is higher than Mark's!")
}else if(markmass > johnBMI){
    console.log("Mark's BMI is higher than John's!")
}else{
    console.log("same BMI")
}