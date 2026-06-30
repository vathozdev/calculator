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
