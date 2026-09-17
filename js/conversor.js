function convertir() {
  const entrada = document.getElementById("celsius").value;

  // Validar que sea un número
  if (entrada.trim() === "" || isNaN(Number(entrada))) {
    alert(" Error, Debes ingresar un valor numerico ")
    return;
  }

  const celsius = Number(entrada);
  const fahrenheit = celsius * 9 / 5 + 32;
  const kelvin = celsius + 273.15;

  alert("Grados Fahrenheit: " + fahrenheit + "\nGrados Kelvin: " + kelvin);
  console.log("La temperatura en Grados Fahrenheit es: " + fahrenheit);
  console.log("La temperatura en Grados Kelvin es: " + kelvin);
}
