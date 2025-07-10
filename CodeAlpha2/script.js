  let display = document.getElementById('display');
  let currentInput = '';

  function updateDisplay() {
    display.textContent = currentInput || '0';
  }

  function appendNumber(number) {
    currentInput += number;
    updateDisplay();
  }

  function appendOperator(operator) {
    if (currentInput === '') return;
    if (/[+\-*/]$/.test(currentInput)) {
      currentInput = currentInput.slice(0, -1);
    }
    currentInput += operator;
    updateDisplay();
  }

  function clearDisplay() {
    currentInput = '';
    updateDisplay();
  }

  function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  }

  function calculate() {
    try {
      currentInput = eval(currentInput).toString();
      updateDisplay();
    } catch {
      currentInput = 'Error';
      updateDisplay();
      setTimeout(() => {
        clearDisplay();
      }, 1500);
    }
  }

  // Keyboard support
  document.addEventListener('keydown', function (e) {
    if ((e.key >= '0' && e.key <= '9') || e.key === '.') {
      appendNumber(e.key);
    } else if (['+', '-', '*', '/'].includes(e.key)) {
      appendOperator(e.key);
    } else if (e.key === 'Enter') {
      calculate();
    } else if (e.key === 'Backspace') {
      deleteLast();
    } else if (e.key === 'Escape') {
      clearDisplay();
    }
  });

