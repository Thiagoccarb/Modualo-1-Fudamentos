function checkData() {
  const inputButton = document.querySelector('.loginButton');
  const loginInput = document.getElementById('login');
  const senhaInput = document.getElementById('senha');
  inputButton.addEventListener('click', (e) => {
    e.preventDefault();
    if ((loginInput.value === 'tryber@teste.com') && (senhaInput.value === '123456')) {
      alert('Olá,Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

checkData();

function prevent() {
  const agreementInput = document.getElementById('agreement');
  const inputSubmitButton = document.getElementById('submit-btn');
  agreementInput.addEventListener('click', () => {
    if (agreementInput.checked) {
      inputSubmitButton.removeAttribute('disabled');
    }
  });
}

prevent();

function counter() {
  const inputCounter = document.getElementById('counter');
  const textarea = document.getElementById('textarea');
  inputCounter.innerText = '500';
  textarea.addEventListener('keypress', ()=>{
    if (textarea.value.length ==1) {
      inputCounter.innerText = '499';
    }else {
      inputCounter.innerText = 500 - textarea.value.length;
    }
  });
}

counter();
