const display = document.getElementById("display");

/* Add value to display */
function appendValue(value) {
  display.value += value;
}

/* Clear display */
function clearDisplay() {
  display.value = "";
}

/* Delete last character */
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

/* Calculate result */
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

/* Keyboard Support (Bonus) */
document.addEventListener("keydown", (e) => {
  if ((e.key >= "0" && e.key <= "9") || "+-*/.".includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
