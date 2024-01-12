let displayValue = '';
let expression = '';
let result = null;

function appendValue(value) {
  displayValue += value;
  expression += value;
  updateDisplay();
}

function appendOperator(op) {
  if (result !== null) {
    // If there's a result from a previous calculation, clear it
    clearDisplay();
  }

  displayValue += op;
  expression += op;
  updateDisplay();
}

function calculate() {
  if (expression !== '') {
    try {
      result = eval(expression);
      displayValue = result.toString();
      updateDisplay();
    } catch (error) {
      displayValue = "Error";
      updateDisplay();
    }
  }
}

function clearDisplay() {
  displayValue = '';
  expression = '';
  result = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}
