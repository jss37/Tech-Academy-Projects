function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Black":
            Color_Output = "Black" + Color_String;
        break;
        case "White":
            Color_Output = "White" + Color_String;
        break; 
        default:
        Color_Output = "Please enter a color exactly as written on the above list.";  
    }
    document.getElementById("Output").innerHTML = Color_Output;
}
function Hello_World_Function () {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}