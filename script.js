const display = document.getElementById("display");

// Zahl oder Operator an das Display anfügen
function appendToDisplay(input) {
    display.value += input;
}

// Display leeren
function clearDisplay() {
    display.value = "";
}

// Ergebnis berechnen
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Menü ein- oder ausblenden
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
}
