var t = 44; //defining global variable //
function Adding_time() { //definig function //
    document.write(33 + t + "<br>");  // sending glocal variable + 33 to be displayed //

}
function Adding_again() { //new function//
    document.write(t + 55 + "<br>"); //adding to global function again //
}
Adding_time(); //performing functions //
Adding_again();

function Adding_more() { //defining new function //
    var b = 20; //local variable //
    document.write( 80 + b + "<br>"); //math with local variable //
}
function Adding_please() { //defining function //
    document.write(b + 99); //incorect becuase variable was local not global but asking to do math //
}
Adding_more(); //performing functions //
Adding_please();

function get_Date() { //defining function //
    if (new Date().getHours() < 23) { //using if statement //
        document.getElementById("Howdy").innerHTML = "How are you today?"; //sending to html file with result from function //
    }
}
function basic_func() { //new function def //
    if (3 < 9) { //if statement//
        document.getElementById("New").innerHTML = " 3 is less than 9 "; //sending result to html//
    }
}

function good_number() { // new function def //
    Numb = document.getElementById("Numb").value; // defining variable num from input in html //
    if (Numb < 5) { //if statement //
        Answer = "Wow that is infact a great number!!";
    }
    else { //else statement //
        Answer = "Sorry but that is not my favorite number so I am calling it wrong";
    }
    document.getElementById("Fave_Num").innerHTML = Answer; //returning function outcome to html //
}
function Time_Function() { //new function def //
    var Time = new Date().getHours(); //defining variable -- asking computer to get time for me in hours //
    var Reply; //introducing a new variable //
    if (Time < 12 == Time > 0) { // if statement //
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) { //else if statement -- for when if is false before regular else //
        Reply = "It is afternoon.";
    }
    else { //else statememt //
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //sending result with correlating value for reply back to html //
}