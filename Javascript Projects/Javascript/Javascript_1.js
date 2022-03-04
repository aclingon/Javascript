function Soup_Function() {
    var Soup_Output;
    var Soup = document.getElementById("Soup_input").value;
    var Soup_String = " is my favorite soup too!";
    switch(Soup) {
        case "Broccoli and Cheddar":
            Soup_Output = "Broccoli and Cheddar" + Soup_String;
        break;
        case "Tomato":
            Soup_Output = "Tomato" + Soup_String;
        break;
        case "Chicken Noodle":
            Soup_Output = "Chicken Noodle" + Soup_String;
        break;
        case "Pho":
            Soup_Output = "Pho" + Soup_String;
        break;
        case "Potato":
            Soup_Output = "Potato" + Soup_String;
        break;
        default:
            Soup_Output = "Please enter the soupe name exactly as above";
    }
    document.getElementById("Choice").innerHTML = Soup_Output;
}

function change_fun() {
    var Q = document.getElementsByClassName("change");
    Q[0].innerHTML = "Look I have changed!!";
}

var can =
document.getElementById("can_id");
var contx = can.getContext("2d");
//creating gradiant//
var grade =
contx.createLinearGradient(0,0,200,0);
grade.addColorStop(0,"blue");
grade.addColorStop(1,"green");
//fill with gradient//
contx.fillStyle = grade;
contx.fillRect(10,10,150,80);

//creating stroke text//
contx.font = "25px Impact";
contx.strokeText("I love blue!", 12,60);