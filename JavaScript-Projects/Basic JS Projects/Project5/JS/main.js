function inf_Function() {
    var x=23E22222;
    document.getElementById("Inf").innerHTML = x;
}
//Infinite
function neginf_Function() {
    var x=-23E22222;
    document.getElementById("-Inf").innerHTML = x;
}
//negative infinite
function bool_Function() {
    var x= 4 > 5;
    document.getElementById("bool").innerHTML = x;
}
//sees if true or false
function bool_Function2() {
    var x= 5 > 2;
    document.getElementById("bool2").innerHTML = x;

}
//sees if true or false
function eq_Function() {
    var x= (5+5 == 10);
    document.getElementById("eq").innerHTML = x;

}
//sees if true or false, equal to
function eq_Function2() {
    var x= (5+5 == 11);
    document.getElementById("eq2").innerHTML = x;

}
//sees if true or false, equal to
function comp_Function() {
   var x = 10;
   var y = 10;
   document.getElementById("comp").innerHTML = (x === y);
}
//sees if same data type and if they are equal
function comp_Function2() {
    var x = 10;
    var y = 9;
    document.getElementById("comp2").innerHTML = (x === y);
 }
 //sees if same data type and if they are equal

 function comp_Function3() {
    var x = "10";
    var y = 10;
    document.getElementById("comp3").innerHTML = (x === y);
 }
 //sees if same data type and if they are equal

 function comp_Function4() {
    var x = "1";
    var y = 10;
    document.getElementById("comp4").innerHTML = (x === y);
 }
 //sees if same data type and if they are equal


function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}
//NOT comparison
function or_Function() {
    document.write(2 > 4 || 5> 2)
}
// OR comparison
function and_Function(){
    document.write(4 > 2 && 6 > 2)
}
// AND comparison
console.log(2+2);
 
