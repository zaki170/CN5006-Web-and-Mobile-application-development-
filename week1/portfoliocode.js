function add(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Function to perform subtraction
function subtract(numbers) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result -= numbers[i];
    }
    return result;
}

// Function to perform multiplication
function multiply(numbers) {
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
        result *= numbers[i];
    }
    return result;
}

// Function to perform division
function divide(numbers) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            console.log("Error: Division by zero is not allowed!");
            return null;
        }
        result /= numbers[i];
    }
    return result;
}

// Main program starts here
let input = prompt("Enter numbers separated by spaces (e.g. 10 5 2):");
let numbers = input.split(" ").map(Number);

let operation = prompt("Choose operation: + for addition, - for subtraction, * for multiplication, / for division");

let answer;

switch (operation) {
    case '+':
        answer = add(numbers);
        break;
    case '-':
        answer = subtract(numbers);
        break;
    case '*':
        answer = multiply(numbers);
        break;
    case '/':
        answer = divide(numbers);
        break;
    default:
        console.log("Invalid operation selected!");
        break;
}

if (answer !== undefined && answer !== null) {
    console.log("Result: " + answer);
}