function Addition(){
    let add1 = document.getElementById("number1").value;
    let add2 = document.getElementById("number2").value;

    let result = parseFloat(add1) + parseFloat(add2);
    
    console.log(result);
    
}

function Subtraction(){
    let sub1 = document.getElementById("number1").value;
    let sub2 = document.getElementById("number2").value;

    let resultSubtraction = parseFloat(sub1) - parseFloat(sub2);
    console.log(resultSubtraction);
}

function Multiply(){
    let mul1 = document.getElementById("number1").value;
    let mul2 = document.getElementById("number2").value;

    let resultMultiplikation = parseFloat(mul1) * parseFloat(mul2);
    console.log(resultMultiplikation);
}

function Divide(){
    let div1 = document.getElementById("number1").value;
    let div2 = document.getElementById("number2").value;

    let resultDivision = parseFloat(div1) / parseFloat(div2);
    console.log(resultDivision);
}
