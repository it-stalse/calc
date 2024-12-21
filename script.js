let firstNumber = "";
let secondNumber = "";
let operation = "";

function appendNumber(num) {
  if (operation === "") {
    firstNumber += num;
  } else {
    secondNumber += num;
  }
  updateOutput();
}

function setOperation(op) {
  if (firstNumber === "") return;
  if (operation !== "") return;
  operation = op;
  updateOutput();
}

function calculateResult() {
  if (firstNumber === "" || secondNumber === "" || operation === "") return;
  let result;
  switch (operation) {
    case "+":
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case "-":
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case "*":
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case "/":
      if (secondNumber === "0") {
        alert("Деление на ноль невозможно");
        clearInput();
        return;
      }
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
    default:
      return;
  }
  firstNumber = result.toString();
  secondNumber = "";
  operation = "";
  updateOutput();
}

function clearInput() {
  firstNumber = "";
  secondNumber = "";
  operation = "";
  updateOutput();
}

function updateOutput() {
  document.getElementById("output").value =
    firstNumber + " " + operation + " " + secondNumber;
}

// Обработчик нажатий клавиш на клавиатуре
document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key) && key >= 0 && key <= 9) {
    appendNumber(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    setOperation(key);
  } else if (key === "Enter" || key === "=") {
    calculateResult();
  } else if (key === "c" || key === "C") {
    clearInput();
  }
});
