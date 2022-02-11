function do_math() { //defining function//
var addition = 7 + 2 // the actual addition assigned to a variable//
document.getElementById("math").innerHTML = ("7 + 2 = " + addition); //displaying the math//
}

function more_math() { //definging function//
    var subtract = 99 - 42 //assinging the math to variable//
    document.getElementById("more_math").innerHTML = ("99 - 42 = " + subtract); //pushing to html//
}

function multiply() {
    var multiplication = 5 * 4 //assigning values to variable //
    document.getElementById("multiply").innerHTML = ("5 * 4 = " + multiplication); // pushing to html//
}

function divide() { //defining function //
    var division = 77/11 //what the function will do // 
    document.getElementById("divide").innerHTML = ("77/11 = " + division); //sending and displaying to html//
}

function combo() { //defing//
    var multiple_things = 7 * 8 /2 + 10 // the math I want to do//
    document.getElementById("combo").innerHTML = ("7 times 8 divided by 2 plus 10 =" + multiple_things); //sending to html//
}

function modulus() { //defining //
    var math = 79 % 5 // math I want for variable //
    document.getElementById("modulus").innerHTML = ("After 79 is divided by 5 there is a remainer of" + math); //sending to html//
}

function negation() { //defining my function //
    var x = 88; //defining variable //
    document.getElementById("negation").innerHTML = -x; //sending to html and negating my variable //
}

var q = 99; //defining variable 
q++; //adding one to my variable //
document.write( q ); //display new variable //

var r = 4; // defining variable //
r--; //subtracting one from variable //
document.write( r ); //display new variable

window.alert(Math.random() * 125); //calling a random number btwn 0 and 125 //

function operation() { /// defining variable //
document.getElementById("operation").innerHTML = Math.sqrt(16);  //sending to html and telling it what math function to preform //
}