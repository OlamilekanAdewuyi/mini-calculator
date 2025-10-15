// Addition
const addition = () => {
    const convertedfirstNumber = Number(firstNumber.value);
    console.log(convertedfirstNumber);
    const convertedsecondNumber = Number(secondNumber.value);
    console.log(convertedsecondNumber);
    const answer = Number(firstNumber.value) + Number(secondNumber.value);
    console.log(answer);
    showResult.innerHTML = answer
}

// Multiplication
const multiply = () => {
    // console.log(firstNumber.value);
    // console.log(secondNumber.value);
    const answer = (firstNumber.value * secondNumber.value)
    // console.log(answer);
    showResult.innerHTML = answer
}
// Subtraction
const subtraction = () => {
    // console.log(firstNumber.value);
    // console.log(secondNumber.value);
   const answer = (firstNumber.value - secondNumber.value)
    // console.log(answer);
    showResult.innerHTML = answer
}

// Division
const division = () => {
    // console.log(firstNumber.value);
    // console.log(secondNumber.value);
    const answer = (firstNumber.value / secondNumber.value).toFixed(3)
    // console.log(answer);
    showResult.innerHTML = answer
}