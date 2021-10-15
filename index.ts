let btnEnv = document.getElementById("btnEnviar");
let sueldo = document.getElementById("sueldo");

btnEnv.addEventListener("click", () => {
  let sueldoActual: number = sueldo.value;
  let sueldoFinal: number = 0;
  if (0 < sueldoActual && sueldoActual <= 15000) {
    sueldoFinal = (sueldoActual * 20) / 100;
    console.log("Aumento de un 20%. Cobrará: $ " + sueldoFinal);
  } else if (15001 < sueldoActual && sueldoActual <= 20000) {
    sueldoFinal = (sueldoActual * 10) / 100;
    console.log("Aumento de un 10%. Cobrará: $", sueldoFinal);
  } else if (20001 < sueldoActual && sueldoActual <= 25000) {
    sueldoFinal = (sueldoActual * 5) / 100;
    console.log("Aumento de un 5%. Cobrará: $", sueldoFinal);
  } else {
    console.log("Ud. no tiene aumento");
  }
});
