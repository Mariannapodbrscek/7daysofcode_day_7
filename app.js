// Funciones para cada operación
function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    return 'Error: No se puede dividir entre cero';
  }
  return a / b;
}

// Función para realizar la operación
function realizarOperacion(operacion) {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultado;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingresa números válidos.");
    return;
  }

  switch (operacion) {
    case 'suma':
      resultado = suma(num1, num2);
      break;
    case 'resta':
      resultado = resta(num1, num2);
      break;
    case 'multiplicacion':
      resultado = multiplicacion(num1, num2);
      break;
    case 'division':
      resultado = division(num1, num2);
      break;
    default:
      resultado = 'Operación no válida';
  }

  // Mostrar el resultado
  document.getElementById("result").innerText = "Resultado: " + resultado;
}

// Función para salir
function salir() {
  alert("¡Hasta la próxima!");
  window.close();  // Cierra la ventana actual
}
