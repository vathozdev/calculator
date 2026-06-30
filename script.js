currentNumber = "";
firstNumber = null;
operator = null;
justComputed = true;
errorOccured = false;

operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
};

document.getElementById("screen").innerText = 0;

function formatNumber(num) {
    if (typeof num !== "number") return num;
    return num.toFixed(4).replace(/\.?0+$/, "");
}
const operatorBtns = document.querySelector('.operators');

operatorBtns.addEventListener("click", (event) => {
    const op = event.target.textContent;

    if (errorOccured === true) {
        return;
    }

    if (firstNumber !== null && operator !== null && currentNumber !== "") {

        if (operator === "/" && Number(currentNumber) === 0) {
            errorOccured = true;
            document.getElementById("screen").innerText = "Cannot divide by zero";
            return;
}

        firstNumber = operations[operator](firstNumber, Number(currentNumber));
        document.getElementById("screen").innerText = formatNumber(firstNumber);

    } else if (firstNumber === null && currentNumber !== "") {

        firstNumber = Number(currentNumber);
        document.getElementById("screen").innerText = formatNumber(firstNumber);

    }

    operator = op;
    justComputed = true;
    currentNumber = "";
});

const numberBtns = document.querySelector(".wrapper");

numberBtns.addEventListener("click", (event) => {

    if (errorOccured === true) {
        return;
    }
        if (justComputed === true) {
        currentNumber = event.target.textContent;
        document.getElementById("screen").innerText = currentNumber;
        justComputed = false;

    } else {
        currentNumber += event.target.textContent;
        document.getElementById("screen").innerText = currentNumber;
    }
});
const enterBtn = document.querySelector(".enter-delete #enter");

enterBtn.addEventListener("click", () => {

    if (errorOccured === true) {
        return;
    }
    if (firstNumber !== null && operator !== null && currentNumber !== "") {

        if (operator === "/" && Number(currentNumber) === 0) {
            errorOccured = true;
            document.getElementById("screen").innerText = "Cannot divide by zero";
            return;
        }

        firstNumber = operations[operator](firstNumber, Number(currentNumber));

        operator = null;
        currentNumber = "";
        justComputed = true;

        document.getElementById("screen").innerText = formatNumber(firstNumber);

    }
});

const clearBtn = document.querySelector(".enter-delete #clear");

clearBtn.addEventListener("click", () => {
    errorOccured = false;
    currentNumber = "";
    firstNumber = null;
    operator = null;
    justComputed = true;
    document.getElementById("screen").innerText = 0;
});