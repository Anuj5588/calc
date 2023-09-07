const display = document.getElementById("display");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btnPlus = document.getElementById("btnPlus");
const btnEquals = document.getElementById("btnEquals");

let currentCalculation = "";

btn1.addEventListener("click", () => {
  currentCalculation += "1";
  display.textContent = currentCalculation;
});

btn2.addEventListener("click", () => {
  currentCalculation += "2";
  display.textContent = currentCalculation;
});

btnPlus.addEventListener("click", () => {
  currentCalculation += "+";
  display.textContent = currentCalculation;
});

btnEquals.addEventListener("click", () => {
  const result = eval(currentCalculation); // Use eval to evaluate the expression
  display.textContent = result;
});
