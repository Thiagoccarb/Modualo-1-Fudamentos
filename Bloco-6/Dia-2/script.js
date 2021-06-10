function createStates(){
    const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];
    const select = document.getElementById('estados');
    for (let i = 0; i < states.length; i++) {
        let option = document.createElement('option');
        const element = states[i];
        option.value = element;
        option.innerText = element;
        select.appendChild(option);
    }
}
createStates();

function clear(){
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        let element = inputs[i].value;
        element = '';
    }
};
let limpar = document.getElementsByClassName('btn btn-danger')[0];
limpar.addEventListener('click',clear);