let activePlayer = 'X'; //keeps track of whose turn it is//
let selectedSquares = []; //stores an array of moves. Use this to determine win conditions

function placeXOrO(squareNumber) { // function for placing an x or o in a square//
    if (!selectedSquares.some(element => element.includes(squareNumber))) { //ensures square hasn't been selected already some() method checks each element of array //
        let select = document.getElementById(squareNumber); //retrieves html element id that was clicked//
        if (activePlayer === 'X') { //checking to see whos turn it is//
            select.style.backgroundImage = 'url("images/x2.png")'; // if active player is equal to X the x image is placed in HTML //
             }
             else { //if player is not X they are O//
                select.style.backgroundImage = 'url("images/o2.png")'; //if active player is equal to O o image is places in html //
             }
             selectedSquares.push(squareNumber + activePlayer); // these are concatenated together and added to array //
             checkWinConditions(); //call function to check for winning conditions//
             if (activePlayer === 'X') { //condition changes who is the active player //
                 activePlayer = 'O';
             }
             else {
                 activePlayer = 'X';
             }
             audio('./Media/place2.mp3'); //plays placement sound//
             if(activePlayer === 'O'){ //checks to see if it is computers turn //
                disableClick(); //disables you from choosing computer choice //
                setTimeout(function () { computersTurn(); }, 1000) //waits 1 seconds before computer places images and enables click //
             }
             return true; // needed for our computers Turn function to work//
        }
        function computersTurn() {
            let success = false;
            let pickASquare;
            while(!success) {
                pickASquare = String(Math.floor(Math.random() * 9));
                if (placeXOrO(pickASquare)) {
                    placeXOrO(pickASquare);
                    success = true;
                }
            }
        }
    }


//function will look through array and search for win conditions- if met drawline function is called to draw line//
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    else if (selectedSquares.length >= 9 ) {
        audio('./media/tie2.mp3'); //plays tie game sound//
        setTimeout(function() { resetGame(); }, 1000);
    }

}
function arrayIncludes(squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA)
    const b = selectedSquares.includes(squareB)
    const c = selectedSquares.includes(squareC)
    if (a=== true && b === true && c === true) { return true }
}

function disableClick() { // function makes body element temp unclickable //
    body.style.pointerEvents = 'none'; //body unclickable//
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000); //makes body clickable again after 1 second//
}

function audio(audioURL) { //function takes a string parameter of path set earlier for sound//
    let audio = new Audio(audioURL); //new audio object //
    audio.play(); //play method plays our audio sound//
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) { // function utilizes html canvas to draw win lines //
    const canvas = document.getElementById('win-lines') // this line assesses our html canvas element //
    const c = canvas.getContext('2d'); //gives access to methos and properties to use on canvas //
    let x1 = coordX1, //indicates where the start of x axis is //
        y1 = coordY1, //indicates where the start off y axis is //
        x2 = coordX2, //indicates end of x axis //
        y2 = coordY2, //indicates end of y axis //
        x = x1, //temporary x axis data //
        y= y1; /// temporary y axis data //

function animateLineDrawing() {
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    c.clearRect(0, 0, 608, 608)
    c.beginPath();
    c.moveTo(x1, y1)
    c.lineTo(x, y)
    c.lineWidth = 10;
    c.strokeStyle = 'rgba(70, 255, 33, 0.8)';
    c.stroke();
    if (x1 <= x2 && y1 <= y2) {
        if (x < x2) { x += 10; }
        if (y < y2) { y += 10; }
        if (x >= x2 && y >=y2) { cancelAnimationFrame(animationLoop); }
    }
    if (x1 <= x2 && y1 >= y2) {
        if (x < x2) { x += 10;}
        if (y > y2) { y -= 10;}
        if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
    }
}


function clear() {
    const animationLoop = requestAnimationFrame(clear);
    c.clearRect(0, 0, 608, 608);
    cancelAnimationFrame(animationLoop);
}
disableClick();
audio('./media/win2.mp3');
animateLineDrawing();
setTimeout(function() { clear(); resetGame(); }, 1000);
}

function resetGame() { //function resets game with win or tie//
    for (let i = 0; i < 9; i++) { //iterates through each html square element//
        let square = document.getElementById(String(i)) //gets html element of i //
        square.style.backgroundImage = '' //removing background image//
    }
    selectedSquares = []; //resets array so it is empty and you can start over //
}