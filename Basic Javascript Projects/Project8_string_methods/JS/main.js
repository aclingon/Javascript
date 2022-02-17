function Next_fun() { //definging function //
    var a1 = "This is the first part "; //variables within function// 
    var a2 = "and this is the second part ";
    var a3 = "of my assignment ";
    var a4 = "to concatenate some strings! ";
    var more_a = a1.concat(a2, a3, a4); //variable made of other variables //
    document.getElementById("New_One").innerHTML = more_a; //connecting variables using concat method! //
}

function new_method() { //new function def //
    var Foood = "I like cake and cheese and pickles and more"; //defining varible //
    var Fude = Foood.slice(7, 22); //new variable using previous one and slice method.//
    document.getElementById("Food").innerHTML = Fude; //sending to html//
}
function upper_method() { //new function def //
    var Pickle = "Look now I'm upper case!"; //define variable //
    var pickles = Pickle.toUpperCase(); //define new variable using old one and to upper case method//
    document.getElementById("Upper").innerHTML = pickles; //sending to html //
}

function search_pls() { //defing new function //
    var thingy = "Hi I am making a search thingy"; //new variable //
    var thingy_2 = thingy.search("a"); //using new variable to find a specfic spot in previous one with search method//
    document.getElementById("Searching").innerHTML = thingy_2 //send to html//
}
function string_time() { //new function def //
    var cat = 1997; //new variable def//
    document.getElementById("Strings").innerHTML = cat.toString(); //send to html and making it a string value//
}
function precise_pls() { //new function def //
    var dog = 3333.444455678; //variable def //
    document.getElementById("Precise").innerHTML = dog.toPrecision(8); //using to precision method //
}

function rounding() { //new function def //
    var bird = 7.052; //define variable //
    document.getElementById("Rounded").innerHTML = bird.toFixed(1); //using to fixed variable //
}
function valuable() { //defining function //
    var w = "I am ready for some snacks. "; //define variable //
    document.getElementById("Value1").innerHTML = w.valueOf(); //using value of method//
}