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