function fahrenheitCnvrt(){
    const celsius = +prompt("Enter a celsius value:");
    const fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}

console.log(fahrenheitCnvrt());