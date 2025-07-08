let display = document.getElementById('display');

function append(value) {
  if (display.value === "0" && value !== ".") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "0";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
  if (display.value === "") display.value = "0";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}