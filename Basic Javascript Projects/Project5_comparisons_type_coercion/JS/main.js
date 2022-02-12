document.write(typeof "helllllooooo"); //tells me type of input//
document.write("&nbsp;&nbsp;&nbsp;"); //spacing//

document.write("8" + 8); //coercing two data types that are not the same//
document.write("&nbsp;&nbsp;&nbsp;");

function my_Fun() { //define function//
    document.getElementById("Apple").innerHTML = (4 / "cake") ; //making it display not a number//
}

function Fun_Fun() { //define function//
    document.getElementById("Hello").innerHTML = 3.8E400; // making it display infinity//
}
function Funner_Fun() {
    document.getElementById("Hi").innerHTML = -2.3E333; //making it display negative infinity//
}
document.write(6>10); //boolean logic//
document.write("&nbsp;&nbsp;&nbsp;");

document.write(4<6); //boolean logic//
document.write("&nbsp;&nbsp;&nbsp;");

console.log(9+9); //adding math in the console log //
console.log(18>34); //boolean logic in the console log//

document.write(7==7); //equal operator //
document.write("&nbsp;&nbsp;&nbsp;");

document.write(9==10); //equal operator //
document.write("&nbsp;&nbsp;&nbsp;");

x= 5;
y=5;
document.write(x===y); //operator checking data and data type //
document.write("&nbsp;&nbsp;&nbsp;");

a="33";
b=33;
document.write(a===b); //operator checking data and data type//
document.write("&nbsp;&nbsp;&nbsp;");

c=6;
d="98";
document.write(c===d); //operator checking data and data type//
document.write("&nbsp;&nbsp;&nbsp;");

e="Chandler";
f="Winston";
document.write(e===f); //operator checking data and data type//
document.write("&nbsp;&nbsp;&nbsp;");

document.write(4>3 && 5>2); //boolean AND operator //
document.write("&nbsp;&nbsp;&nbsp;");

document.write(60>16 && 32<12); //boolean AND operator //
document.write("&nbsp;&nbsp;&nbsp;");

document.write(4>10 || 10>4); // boolean OR operator //
document.write("&nbsp;&nbsp;&nbsp;");

document.write(6>10 || 7<4); //boolean OR operator //

document.write("&nbsp;&nbsp;&nbsp;");

function not_fun() { //define function//
    document.getElementById("Not").innerHTML = !(15<12); //using NOT operator to display true//
}

function not_fun_fun() {
    document.getElementById("Yes").innerHTML =!(34>2); //using NOT operator to display false//
}