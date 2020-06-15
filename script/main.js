const numbers = document.querySelectorAll('.number'),
  operations = document.querySelectorAll('.operation'),
  resultBtn = document.getElementById('result'),
  clearBtn = document.getElementById('clear'),
  display = document.getElementById('scoreboard');

let memoryCurrentNumber = 0,
  memoryNewNumber = false,
  memoryOperation = "";

//Numbers
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  number.addEventListener('click', function (e) {
    numberPress(e.target.textContent);
  });
}

//Operation
for (let i = 0; i < operations.length; i++) {
  const operationBtn = operations[i];
  operationBtn.addEventListener('click', function (e) {
    operation(e.target.textContent);
  });
}

clearBtn.addEventListener('click', clear);

function numberPress(number) {
  if (memoryNewNumber) {
    display.value = number;
    memoryNewNumber = false;
  } else {
    if (display.value === "0") {
      display.value = number;
    } else {
      display.value += number;
    }
  }
}

function operation(op) {
  let localOperationMemory = display.value;
  if (memoryNewNumber && memoryOperation != '=') {
    display.value = memoryCurrentNumber;
  } else {
    memoryNewNumber = true;
    if (memoryOperation === '+') {
      memoryCurrentNumber += parseFloat(localOperationMemory);
    } else if (memoryOperation === '-') {
      memoryCurrentNumber -= parseFloat(localOperationMemory);
    } else if (memoryOperation === '*') {
      memoryCurrentNumber *= parseFloat(localOperationMemory);
    } else if (memoryOperation === '/') {
      memoryCurrentNumber /= parseFloat(localOperationMemory);
    } else {
      memoryCurrentNumber = parseFloat(localOperationMemory);
    }
    display.value = memoryCurrentNumber;
    memoryOperation = op;
  }
};

function clear(id) {
  if (id === 'clear') {
    display.value = '0';
    memoryCurrentNumber = 0;
    memoryNewNumber = false;
    memoryOperation = "";
  } else {
    display.value = '0';
    memoryCurrentNumber = 0;
    memoryNewNumber = false;
    memoryOperation = "";
  }
};
