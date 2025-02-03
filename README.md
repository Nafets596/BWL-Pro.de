# BWL-Pro.de
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator with Menu</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="calculator">
        <input id="display" readonly>
        
        <div id="keys">
            <button onclick="appendToDisplay('+')" class="operator-btn">+</button>
            <button onclick="appendToDisplay('7')">7</button>
            <button onclick="appendToDisplay('8')">8</button>
            <button onclick="appendToDisplay('9')">9</button>
            <button onclick="appendToDisplay('-')" class="operator-btn">-</button>
            <button onclick="appendToDisplay('4')">4</button>
            <button onclick="appendToDisplay('5')">5</button>
            <button onclick="appendToDisplay('6')">6</button>
            <button onclick="appendToDisplay('*')" class="operator-btn">*</button>
            <button onclick="appendToDisplay('1')">1</button>
            <button onclick="appendToDisplay('2')">2</button>
            <button onclick="appendToDisplay('3')">3</button>
            <button onclick="appendToDisplay('/')" class="operator-btn">/</button>
            <button onclick="appendToDisplay('0')">0</button>
            <button onclick="appendToDisplay('.')">.</button>
            <button onclick="calculate()">=</button>
            
            <!-- C Button und Menü-Button -->
            <button onclick="clearDisplay()" class="operator-btn">C</button>
            <button id="menuButton" onclick="toggleMenu()"></button>
        </div>
        
        <!-- Menü -->
        <div id="menu" class="hidden">
            <button onclick="clearDisplay()">Clear Display</button>
            <button onclick="alert('Menu Option 2 Clicked')">Option 2</button>
            <button onclick="alert('Menu Option 3 Clicked')">Option 3</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
