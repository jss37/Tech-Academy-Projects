var x =10;
function Add_number_1(){
    document.write(20 + x + "<br>");
}
function Add_number_2 () {
    document.write(x + 100);
}
Add_number_1();
Add_number_2();

function Add_numbers_1(){
    var x = 10;
    document.write(20 + x + "<br>");
}
function Add_numbers_2 () {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();

if (1 < 6) {
	document.write("<br>Awee gee i hope this works!")
}


function get_Date() {
 	if (new Date().getHours() < 18) {
	document.getElementById("Greeting").innerHTML = "How are you today?";
	}
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!"
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= Time > 0) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}