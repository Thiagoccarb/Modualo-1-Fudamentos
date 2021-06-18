// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
const button = document.querySelector('button');
const p = document.querySelector('p');
p.innerText = 0;
p.style.fontSize = '40px';
p.style.textAlign = 'center';
count = 0;
button.addEventListener('click', () => {
  count = count + 1;
  p.innerText = count;
});