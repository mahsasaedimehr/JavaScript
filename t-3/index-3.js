function sum(a = 0, b = 0, c = 0, d = 0, e = 0, o)  {
    if (!isNaN(a, b, c, d, e)) {
        switch (o) {
            case '+':
                return(a + b + c + d + e);  
            default:
                return ("oprator is wrong!")      
        }
    }
    return "something wrong!"
}

const num1 = +prompt("add number1");
const num2 = +prompt("add number2");
const num3 = +prompt("add number3");
const num4 = +prompt("add number4");
const num5 = +prompt("add number5");
const operator = prompt("operator");

console.log(sum(num1, num2, num3, num4, num5, operator))