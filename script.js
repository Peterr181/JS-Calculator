class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  reset() {
    this.currentOperand = "";
  }

  exception() {
    if (this.currentOperand > 1000000000000000000000000000) {
      this.clear();
    }
  }

  play() {
    audio.play();
  }

  playSpecial() {
    audio2.play();
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "X":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }

    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    return number;
  }
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = "";
    }
  }
}

var audio = new Audio("click.wav");
var audio2 = new Audio("delete.wav");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const resetButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
    calculator.play();
    calculator.exception();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
    calculator.play();
  });
});

resetButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
  calculator.playSpecial();
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
  calculator.playSpecial();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
  calculator.playSpecial();
});

const firstChoice = document.getElementById("one");
const secondChoice = document.getElementById("two");
const thirdChoice = document.getElementById("three");

secondChoice.addEventListener("click", function () {
  const bodyEl = document.querySelector("body");
  const textEl = document.querySelector(".title");
  const calcBody = document.querySelector(".calc__body");
  const outputWindow = document.getElementById("screen");
  const currentOp = document.querySelector(".current-operand");
  const toggleCircle = document.getElementById("circle");
  toggleCircle.style.left = "30%";
  currentOp.style.color = "black";
  textEl.style.color = "black";
  bodyEl.classList.add("active1");
  bodyEl.classList.remove("active2");
  calcBody.style.background = "hsl(28, 16%, 65%)";
  outputWindow.style.background = "#fff";
});

firstChoice.addEventListener("click", function () {
  const bodyEl = document.querySelector("body");
  const textEl = document.querySelector(".title");
  const calcBody = document.querySelector(".calc__body");
  const outputWindow = document.getElementById("screen");
  const currentOp = document.querySelector(".current-operand");
  const toggleCircle = document.getElementById("circle");
  toggleCircle.style.left = "0";
  outputWindow.style.background = "hsl(224, 36%, 15%)";
  currentOp.style.color = "#fff";
  calcBody.style.background = "hsl(223, 31%, 20%)";
  bodyEl.classList.remove("active1");
  bodyEl.classList.remove("active2");
});

thirdChoice.addEventListener("click", function () {
  const bodyEl = document.querySelector("body");
  const textEl = document.querySelector(".title");
  const calcBody = document.querySelector(".calc__body");
  const outputWindow = document.getElementById("screen");
  const currentOp = document.querySelector(".current-operand");
  const toggleCircle = document.getElementById("circle");
  toggleCircle.style.left = "65%";
  outputWindow.style.background = "hsl(224, 36%, 15%)";
  currentOp.style.color = "#fff";
  textEl.style.color = "#fff";
  calcBody.style.background = "hsl(223, 31%, 20%)";
  bodyEl.classList.add("active2");
});
