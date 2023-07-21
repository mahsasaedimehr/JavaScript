const number1 = +prompt ("number1?");
const operator = prompt ("operator?");
const number2 = +prompt ("number2?");

if (isNaN(number1) || isNaN(number2) ){
    console.log("number1 or number2 ERROR!")
}



if (operator === "+") {
    console.log(number1 + number2)
}

document.writeln(number1+number2);

if (operator === "-") {
    console.log(number1 - number2)
}

document.writeln(number1-number2);

if (operator === "*") {
    console.log(number1 * number2)
}

document.writeln(number1*number2);

if (operator === "/") {
    console.log(number1 / number2)
}

document.writeln(number1/number2);