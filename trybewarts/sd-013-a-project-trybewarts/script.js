const agreementInput = document.getElementById('agreement');
const inputSubmitButton = document.getElementById('submit-btn');
const inputCounter = document.getElementById('counter');
const textarea = document.getElementById('textarea');
const inputs = document.getElementsByTagName('input');
const div = document.querySelector('.data-container');
const form = document.getElementById('evaluation-form');
const select = document.querySelectorAll('option[name="select"]');
const radios = document.querySelectorAll('input[name="family"]');
const checkboxes = document.querySelectorAll('input[name="option"]:checked');
const avaliacao = document.querySelectorAll('input[name=rate]');


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

const hideForm = () => {
  form.style.display = 'none';
}
inputSubmitButton.addEventListener('click', hideForm);


const inputData = () => {
  inputSubmitButton.addEventListener('click', () => {
    for (let index = 0; index < 5; index++) {
      const element = inputs[index];
      const p = document.createElement('p');
      p.innerText = `${element.name}: ${element.value}`;
      div.appendChild(p);
    }
  });
}

inputData();

const inputSelect = () => {
  inputSubmitButton.addEventListener('click', () => {
    for (const element of select) {
      if (element.selected) {
        const p = document.createElement('p');
        p.innerHTML = `Casa: ${element.value}`;
        div.appendChild(p);
      }
    }
  });
}

inputSelect();

const inputRadio = () => {
  for (const radio of radios) {
    inputSubmitButton.addEventListener('click', () => {
      if (radio.checked) {
        const p = document.createElement('p');
        p.innerHTML = `Família: ${radio.value}`;
        div.appendChild(p);
      }
    });
  }
}

inputRadio();

const inputCheckboxes = () => {
  let selected = '';
  inputSubmitButton.addEventListener('click', () => {
    for (const checkbox of checkboxes) {
      selected += `${checkbox.value},`
    }
    const p = document.createElement('p');
    p.innerHTML = `Conteúdos: ${selected}`;
    div.appendChild(p);
  });
}

inputCheckboxes();

const inputEvaluation = () => {
  let selected = '';
  inputSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    for (const selected of avaliacao) {
      if (selected.checked) {
        const p = document.createElement('p');
        p.innerHTML = `Avaliação: ${selected.value}`;
        div.appendChild(p);
      }
    }
  });
}
inputEvaluation();
