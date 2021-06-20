const agreementInput = document.getElementById('agreement');
const inputSubmitButton = document.getElementById('submit-btn');
const inputCounter = document.getElementById('counter');
const textarea = document.getElementById('textarea');
const inputs = document.getElementsByTagName('input');
const div = document.querySelector('.data-container');
const form = document.getElementById('evaluation-form');
const selected = document.querySelector('#house').selectedOptions[0];
const radios = document.querySelectorAll('input[name="family"]');

function checkData() {
  const inputButton = document.querySelector('.loginButton');
  const loginInput = document.getElementById('login');
  const senhaInput = document.getElementById('senha');
  inputButton.addEventListener('click', (e) => {
    e.preventDefault();
    if ((loginInput.value === 'tryber@teste.com') && (senhaInput.value === '123456')) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

checkData();

function prevent() {
  agreementInput.addEventListener('click', () => {
    if (agreementInput.checked) {
      inputSubmitButton.removeAttribute('disabled');
    }
  });
}

prevent();

function counter() {
  textarea.addEventListener('keyup', () => {
    if (textarea.value.length >= 0) {
      inputCounter.innerText = '500' - textarea.value.length;
    }
  });
}

counter();

// // const hideForm = () => {
// //   form.style.display = 'none';
// // }

// // inputSubmitButton.addEventListener('click', hideForm);

// const inputData = () => {
//     // inputs
//     for (let index = 0; index < 5; index++) {
//       const element = inputs[index];
//       const p = document.createElement('p');
//       p.innerText = `${element.name}: ${element.value}`;
//       div.appendChild(p);
//     }
// }



// const inputSelect = () => {
//     const p = document.createElement('p');
//     p.innerHTML = `Casa: ${selected.value}`;
//     div.appendChild(p);
// }


// const inputRadio = () => {
//     for (let i = 0; i < radios.length; i++) {
//       const element = radios[i];
//       if (element.checked) {
//         p = document.createElement('p');
//         p.innerHTML = element.checked.value;
//         div.appendChild(p);
//         break;
//       }
//     }
// }




