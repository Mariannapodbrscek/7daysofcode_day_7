// Funciones de operaciones
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir por 0";
    }
    return a / b;
}

// Función principal
function calculate(operation) {
    let num1 = document.getElementById("num1").value.trim();
    let num2 = document.getElementById("num2").value.trim();
    let resultElement = document.getElementById("result-value");

    // Validar si los campos están vacíos
    if (num1 === "" || num2 === "") {
        resultElement.innerText = "⚠ Ingresa ambos números";
        return;
    }

    // Convertir a número
    let number1 = parseFloat(num1);
    let number2 = parseFloat(num2);

    // Validar si los valores ingresados son números válidos
    if (isNaN(number1) || isNaN(number2)) {
        resultElement.innerText = "⚠ Entrada inválida";
        return;
    }

    let result;
    switch (operation) {
        case "add":
            result = add(number1, number2);
            break;
        case "subtract":
            result = subtract(number1, number2);
            break;
        case "multiply":
            result = multiply(number1, number2);
            break;
        case "divide":
            result = divide(number1, number2);
            break;
        default:
            result = "❌ Error";
    }

    // Mostrar resultado
    resultElement.innerText = result;
}

// Función para salir
function exitCalculator() {
    alert("Hasta la próxima!");
}
