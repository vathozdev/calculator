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