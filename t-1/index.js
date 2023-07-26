function sum(a = 0, b = 0, o)  {
    if (!isNaN(a + b)) {
        switch (o) {
            case '+':
                return(a + b);
            case '-':
                return(a - b);
            case '*':
                return(a * b);
            case '/':
                return(a / b);  
            default:
                return ("oprator is wrong!")      
        }
    }
    return "something wrong!"
}

const num1 = +prompt("add number1");
const num2 = +prompt("add number2");
const operator = prompt("operator");

console.log(sum(num1, num2, operator))