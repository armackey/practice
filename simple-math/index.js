
// create variable called answer and SET it to the span DOM element in the HTML
let answer = document.getElementById("answer");
// ****

// create variable called inputFieldOne and SET it to the FIRST input DOM element you created in the HTML
let inputFieldOne = document.getElementById("input1");
// create variable called inputFieldTwo and SET it to the SECOND input DOM element you created in the HTML
let inputFieldTwo = document.getElementById("input2");
// MAKE SURE the input field variables are not SET to the same DOM element. They must be two different input fields

// ****

// create function called addNumbers that accepts two PARAMETERS, add those two PARAMETERS, then RETURN the answer
function addNumbers(){
  answer.innerHTML = inputFieldOne.value + inputFieldTwo.value
  console.log(answer.innerHTML);
}
// create function called subtractNumbers that accepts two PARAMETERS, substract those two PARAMETERS, then RETURN the answer
// create function called divideNumbers that accepts two PARAMETERS, divide those two PARAMETERS, then RETURN the answer
// create function called multiplyNumbers that accepts two PARAMETERS, multiply those two PARAMETERS, then RETURN the answer

// ****

console.log("hi");