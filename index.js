let num1 = 8;
let num2 = 4;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;


let numResult = document.getElementById("sum-el")
console.log(numResult);

function add() {
	let result = num1 + num2;
	numResult.textContent = "Sum: " + result;
}
function subtract() {
	let result = num1 - num2;
	numResult.textContent = "Sum: " + result;
}
function divide() {
	let result = num1 / num2;
	numResult.textContent = "Sum: " + result;
}
function multiply() {
	let result = num1 * num2;
	numResult.textContent = "Sum: " + result;
}