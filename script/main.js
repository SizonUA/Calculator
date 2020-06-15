var numbers = document.querySelectorAll('.number'),
  operations = document.querySelectorAll('.operation'),
  resultBtn = document.getElementById('result'),
  clearBtn = document.getElementById('clear'),
  display = document.getElementById('scoreboard'),
  MemoryCurrentNumber = 0,
  MemoryNewNumber = false,
  MemoryPandingOperation = "";

//Numbers
for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  number.addEventListener('click', function(e) {
    numberPress(e.target.textContent);
  });
}

//Operation
for (var i = 0; i < operations.length; i++) {
  var operationBtn = operations[i];
  operationBtn.addEventListener('click', function(e) {
    operation(e.target.textContent);
  });
}

clearBtn.addEventListener('click', clear);

function numberPress(number) {
  if (MemoryNewNumber) {
    display.value = number;
    MemoryNewNumber = false;
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
  if (MemoryNewNumber && MemoryPandingOperation != '=') {
    display.value = MemoryCurrentNumber;
  } else {
    MemoryNewNumber = true;
    if (MemoryPandingOperation === '+') {
      MemoryCurrentNumber += parseFloat(localOperationMemory);
    } else if (MemoryPandingOperation === '-') {
      MemoryCurrentNumber -= parseFloat(localOperationMemory);
    } else if (MemoryPandingOperation === '*') {
      MemoryCurrentNumber *= parseFloat(localOperationMemory);
    } else if (MemoryPandingOperation === '/') {
      MemoryCurrentNumber /= parseFloat(localOperationMemory);
    } else {
      MemoryCurrentNumber = parseFloat(localOperationMemory);
    }
    display.value = MemoryCurrentNumber;
    MemoryPandingOperation = op;
  }
};

// let clear = id => id === 'clear'

function cClear(id) {
  if (id === 'clear') {
    display.value = '0';
    MemoryCurrentNumber = 0;
    MemoryNewNumber = false;
    MemoryPandingOperation = "";
  } else {
    display.value = '0';
    MemoryCurrentNumber = 0;
    MemoryNewNumber = false;
    MemoryPandingOperation = "";
  }
};

// function result() {
//   console.log('Click Result');
// };


// document.getElementById('sum').onclick = function() {
//   var input = document.getElementById('scoreboard').value;
//   document.getElementById('scoreboard').value = eval(input);
//
// }