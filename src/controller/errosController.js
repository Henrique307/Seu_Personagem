
function tamanhoMaximo(event, limite) {
  let valorNoInput = event.target.value;
  valorNoInput = valorNoInput.substring(0, limite);
  return valorNoInput;
}

function tamanhoMinimo(event) {
  if (event.target.value.length < 5 ) {
    return false;
  }
return true;
}

export { tamanhoMaximo, tamanhoMinimo };
