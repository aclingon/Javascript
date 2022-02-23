function Call_Loop() {
    var numb = "";
    var sub = 20;
    while (sub > 5) {
        numb += "<br>" + sub;
        sub--;
    }
    document.getElementById("Loop").innerHTML = numb;

}

var Instruments = ["Piano", "Tuba", "Trombone", "Flute", "Clarinet"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Fav_Foods = [];
    Fav_Foods[0] = "Curry";
    Fav_Foods[1] = "Pasta";
    Fav_Foods[2] = "Ice Cream";
    Fav_Foods[3] = "Salads";
    document.getElementById("Array").innerHTML = "One of my favorite foods is " + Fav_Foods[0] + ".";
}

function constant_function() {
    const Dog = {breed: "Mutt", color: "orange", Name: "Chandler"};
    Dog.activity = "run";
    Dog.age = "5"
    Dog.color = "brown"
    document.getElementById("Constant").innerHTML = "My dog is super cool he is a " + Dog.color + " " + Dog.breed + 
    " who's favorite activity is to " + Dog.activity;
}
let dog_name = "Chandler";
document.write("<br>" + dog_name);

document.getElementById("pie").innerHTML= my_fun("Tuesday");

function my_fun(day) {
    return "The day today is " + day;
}

let dinner = {
    protien: "chicken ",
    herb: "cilantro ",
    carb: "rice noodles ",
    sauce: "peanut butter and garlic chili sauce ",
    ingredients: function() {
        return "I'm making pad thai for dinner these are the main things I need: " + this.protien +
        this.herb + this.carb + this.sauce;
    }
};
document.getElementById("Din_tonight").innerHTML = dinner.ingredients();

let text = "";
for (let a = 2; a < 12; a++) {
    if (a===6) { continue; }
    text += "Counting numbers " + a + "<br>";
}
document.getElementById("count").innerHTML = text;

let word = "";
let b = 0;
while (b< 16) {
    word += b + "<br>";
    b++;
    if (b===9) break;
}

document.getElementById("counting").innerHTML= word;

