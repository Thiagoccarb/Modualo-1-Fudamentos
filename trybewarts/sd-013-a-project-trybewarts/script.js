const agreementInput = document.getElementById('agreement');
const inputSubmitButton = document.getElementById('submit-btn');
const inputCounter = document.getElementById('counter');
const textarea = document.getElementById('textarea');
const inputs = document.getElementsByClassName('login');
const email = document.getElementById('input-email');
const div = document.querySelector('.data-container');
const form = document.getElementById('evaluation-form');
const select = document.querySelectorAll('option[name="select"]');
const radios = document.querySelectorAll('input[name="family"]');
const checkboxes = document.querySelectorAll('input[name="option"]');
const avaliacao = document.querySelectorAll('input[name=rate]');
const formContainer = document.querySelectorAll('.form-container');

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
    if (textarea.value.length > 0) {
      inputCounter.innerText = '500' - textarea.value.length;
    }
  });
}

counter();

const inputNameLastname = () => `Nome: ${inputs[0].value} ${inputs[1].value}`;

const inputEmail = () => `Email: ${email.value}`;

const inputSelect = () => {
  let selected = '';
  for (let i = 0; i < select.length; i += 1) {
    if (select.selected) {
      selected = select.value;
    }
  }
  return `Casa: ${selected}`;
};

const inputRadio = () => {
  let selected = '';
  for (const radio of radios) {
    if (radio.checked) {
      selected = `Família: ${radio.value}`;
    }
  }
  return selected;
};

const inputCheckboxes = () => {
  const selected = [];
  for (let i = 0; i < checkboxes.length; i += 1) {
    const element = checkboxes[i];
    if (element.checked) {
      selected.push(` ${element.value}`);
    }
  }
  return `Matérias:${selected}`;
};

const inputEvaluation = () => {
  let element = '';
  for (let i = 0; i < avaliacao.length; i++) {
    if (selected.checked) {
      element = `Avaliação: ${selected.value}`;
    }
  }
  return element;
};

const inputTextarea = () => `Observações: ${textarea.value}`;

const clearForm = () => {
  for (let i = 0; i < formContainer.length; i += 1) {
    formContainer[i].style.display = 'none';
  }
};

const fillData = (str) => {
  const p = document.createElement('p');
  p.innerText = str;
  form.appendChild(div);
  div.appendChild(p);
};

const submitData = () => {
  clearForm();
  fillData(inputNameLastname());
  fillData(inputEmail());
  fillData(inputSelect());
  fillData(inputRadio());
  fillData(inputCheckboxes());
  fillData(inputEvaluation());
  fillData(inputTextarea());
};

inputSubmitButton.addEventListener('click', (e) => {
  e.preventDefault();
  submitData();
});
