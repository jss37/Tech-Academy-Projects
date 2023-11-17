function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";

}

function age_Function() {
    var Age, Can_vote;
    Height = document.getElementById("Age").value;
    Can_vote = (Height <18) ? "You are too younge":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";

}
function Wrestler (Name) {
this.Wrestler_Name = Name;
}

var Kenny_Omega = new Wrestler("Kenny Omega");
function myFunction() {
    document.getElementById("New_and_This").innerHTML=
    "My favorite wrestler is " + Kenny_Omega.Wrestler_Name;
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}