const numeroAdivinar = Math.floor(Math.random() * 15) + 1;
let intentos = 0;
function pedirNumero() {
  const numero = prompt('Introduce un número entre 1 y 15');
  return parseInt(numero);
}
function comprobarNumero(numero) {
  intentos++;
  if (numero === numeroAdivinar) {
    alert(`¡Enhorabuena!! Has acertado el número en ${intentos} intentos.`);
    return true;
  } else if (numero < numeroAdivinar) {
    alert('El número que has introducido es más pequeño.');
  } else {
    alert('El número que has introducido es más grande.');
  }
  return false;
}
for (let i = 0; i < 3; i++) {
  const numero = pedirNumero();
  if (comprobarNumero(numero)) {
    break;
  }
}

if (intentos === 3) {
  alert(`Lo siento, tus intentos se han agotado. El número era ${numeroAdivinar}.`);
  alert(`Has agotado tus intentos, el número era ${numeroAdivinar}.`);
}