const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(input){
    display.value = "";
}

function calculate(input){
    try{
        display.value = eval(display.value);

    }
    catch(error){
        display.value = "Error";
    }
    
}

function logCalc(){
    try{
        display.value = Math.log10(display.value);
    }
    catch(Infinity){
        display.value = "Error";
    }
    
}

