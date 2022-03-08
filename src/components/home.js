export function home() {
  const texto = document.createElement('p');
  texto.innerText = 'hola';
  const divPrueba = document.createElement('div');
  divPrueba.className = 'color';
  divPrueba.appendChild(texto);

  // const div = document.querySelector('.color');
  divPrueba.addEventListener('click', () => {
    console.log('clickeado..');
  });
  return divPrueba;
}
