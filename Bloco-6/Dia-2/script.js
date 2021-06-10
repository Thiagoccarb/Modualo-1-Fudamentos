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