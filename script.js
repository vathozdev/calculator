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
onst operatorBtns = document.querySelector('.operators');

operatorBtns.addEventListener("click", (event) => {
    const op = event.target.textContent;