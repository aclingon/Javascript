const Calculator = { //object to keep track of values//
    Display_Value: '0', //display 0 //
    First_Operand: null, //hold first operand for any expression -null for now//
    Wait_Second_Operand: false, //check to see if second operand has been inputed//
    operator: null, //hold operator - null for now//
};

function Input_Digit(digit) { //modifies values when button is clicked //
    const {Display_Value, Wait_Second_Operand} = Calculator; 
    if (Wait_Second_Operand === true) { //seeing if wait_second_operand is tue & set display value to the key that was clicked//
        Calculator.Display_Value = digit; 
        Calculator.Wait_Second_Operand = false;
    } else { //overwrites display value if value is 0 otherwise adds onto it //
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

function Input_Decimal(dot) { //handles decimal points//
    if (Calculator.Wait_Second_Operand === true) return; //ensures accidental clicking of decimal point doesnt cause bugs //
    if (!Calculator.Display_Value.includes(dot)) { 
        Calculator.Display_Value += dot; //if there is no decimal point we want to add a decimal point//
    }
}

function Handle_Operator(Next_Operator) { //handles operators //
    const { First_Operand, Display_Value, operator } = Calculator
    const Value_of_Input = parseFloat(Display_Value); // when operator is pressed current number displayed on screen is converted to a number and then we store result in calculator first operand//
        if (operator && Calculator.Wait_Second_Operand) {
            Calculator.operator = Next_Operator; //checks if an operator exists and if Wait_Sec_Op is true then updates operator and exits function //
            return;
        }
        if (First_Operand == null) {
            Calculator.First_Operand = Value_of_Input;
        } else if (operator) { //checks if operator already exists //
            const Value_Now = First_Operand || 0;
            let result = Perform_Calculation[operator] (Value_Now, Value_of_Input); //if operator exists property look up is performed in perfrim calculation object and functiont hat matches operator is executed//
            result = Number(result).toFixed(9) //add fixed amount of numbers after decimal//
            result = (result * 1).toString() //removed trailing 0s//
            Calculator.Display_Value = parseFloat(result);
            Calculator.First_Operand = parseFloat(result);
        }
        Calculator.Wait_Second_Operand = true;
        Calculator.operator = Next_Operator;
    }

    const Perform_Calculation = {
        '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
        '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
        '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
        '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
        '=': (First_Operand, Second_Operand) => Second_Operand
    };

    function Calculator_Reset() {
        Calculator.Display_Value = '0';
        Calculator.First_Operand = null;
        Calculator.Wait_Second_Operand = false; 
        Calculator.operator  = null;
    }

    function Update_Display() { //updates screen with contents of display value //
        const display = document.querySelector('.calculator-screen');
        display.value = Calculator.Display_Value;
    }
    Update_Display();
    const keys = document.querySelector('.calculator-keys'); //monitors button clicks//
    keys.addEventListener('click', (event) => {
        const { target } = event; // target is an object that represents the element //
        if(!target.matches('button')) { //if element that was clicked is not a button exit function //
            return;
        }
        if (target.classList.contains('operator')) {
            Handle_Operator(target.value);
            Update_Display();
            return;
        }
        if (target.classList.contains('decimal')) {
            Input_Decimal(target.value);
            Update_Display();
            return;
        }

        if (target.classList.contains('all-clear')) { //ensures AC clears numbers from the calculator.//
            Calculator_Reset();
            Update_Display();
            return;
        }

        Input_Digit(target.value);
        Update_Display();
    })

