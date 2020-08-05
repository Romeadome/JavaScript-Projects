function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors.toUpperCase()) {
        case "RED":
            Color_Output = "Red" + Color_String;
        break;
        case "YELLOW":
            Color_Output = "Yellow" + Color_String;
        break;
        case "GREEN":
            Color_Output = "Green" + Color_String;
        break;
        case "BLUE":
            Color_Output = "Blue" + Color_String;
        break;
        case "PINK":
            Color_Output = "Pink" + Color_String;
        break;
        case "PURPLE":
            Color_Output = "Purple" + Color_String;
        break;
        default:
            Color_Output = "Please enter a color that is available in " 
            + "the above list.";
    }
    document.getElementById("Output").innerHTML= Color_Output;
}