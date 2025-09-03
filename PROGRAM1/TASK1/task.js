// ADDITION OPERATION
function add(){
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const total = num1+num2;
    document.getElementById("output1").innerText ="The  Value Addition Is :" +total;

}

// SUBRACTION OPERATION

function subract(){
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const total = num1-num2;
    document.getElementById("output2").innerText ="The  Value Subraction Is :" +total;

}
