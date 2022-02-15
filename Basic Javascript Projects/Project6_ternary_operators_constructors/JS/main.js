function Ride_Function() {  //definging function //
    var Height, Can_ride; // ternary operator //
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough"; //outputs for if true or false //
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //actual output //

}

function Age_Function() { //defining function //
    var Age, Can_vote; //ternary operator //
    Age = document.getElementById("Age").value; //defining value //
    Can_vote = (Age < 18) ? "You are too young " : "You are old enough"; //outputs for true and false //
    document.getElementById("Vote").innerHTML = Can_vote + " to vote"; //actual output //

}

function Vehicle(Make, Model, Year, Color) {  //defining function object constructor //
    this.Vehicle_Make = Make; //using this keyword //
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // using new keyword //
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { //defining function //
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
// sending my function and text back to HTML //
}

function Dog(Age, Breed, Color) { // function or object constructor //
    this.Dog_Age = Age; //using this keyword//
    this.Dog_Breed = Breed;
    this.Dog_Color = Color;
}
var Chandler = new Dog(5, "Pitbull Boxer Mutt", "Orange and White"); //using new keyword to make more instances //
var Winston = new Dog(1, "Chihuahua Pitbull Mutt", "Fawn");
var Sally = new Dog(15, "Austrailian Sheppard", "Blue Mural");
function fun_ction() { //defining function //
    document.getElementById("New_and_This").innerHTML = 
    "Winston is a " + Winston.Dog_Age + " year old " + Winston.Dog_Color + " colored " + Winston.Dog_Breed + " and I love him";
}

function Multiples() { //defining function //
    document.getElementById("Nested_Function").innerHTML = Multi(); //nestiing function //
        function Multi() {
            var starting = 88;
            function times_three() { starting * 3;}
            times_three();
            return starting * 3; //sending back to html //
        }
    }
