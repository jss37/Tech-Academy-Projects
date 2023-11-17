function count_to_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML= Digit;
}

var Instruments = ["Guitar","Piano","Bass","Violin","Trumpet","Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Pictures = [];
    Cat_Pictures[0] = "sleeping";
    Cat_Pictures[1] = "playing";
    Cat_Pictures[2] = "eating";
    Cat_Pictures[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Pictures[2] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender",color:"black"};
    Musical_Instrument.color = "green"
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +Musical_Instrument.color+" " +Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var x = 92;
document.write(x);
{
    let x = 33;
    document.write("<br>" + x);
}
document.write("<br>" + x);

let car = {
    make: "Dodge",
    model: "Vipe",
    year: "2021",
    color: "red",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById.apply("Car_Object").innerHTML = car.description();