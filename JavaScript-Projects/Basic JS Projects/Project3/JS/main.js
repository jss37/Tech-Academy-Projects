function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
} //Addition function

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + subtraction;
}
//subtraction function
function multi_Function() {
    var multiplication = 2 * 5;
    document.getElementById("Math3").innerHTML = "2 * 5 = " + multiplication;
}
//multiplicaton function
function div_Function() {
    var division = 5 / 2;
    document.getElementById("Math4").innerHTML = "5 / 2 = " + division;
}
//division function
function modulus_Operate() {
    var simple_Math = 25 % 6;
    document.getElementById("Math5").innerHTML= "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}
//modulus function
function neg_Function(){
    var x=10;
    document.getElementById("Math6").innerHTML= -x;
}
//negative function
function inc_Function() {
    var x=10;
    x++;
    document.write(x);
}
//increment function
function dec_Function() {
    var x=10;
    x--;
    document.write(x);
}
//decrement function
function ran_Function() {
var x=(Math.random());
document.write(x);
}
//random number function