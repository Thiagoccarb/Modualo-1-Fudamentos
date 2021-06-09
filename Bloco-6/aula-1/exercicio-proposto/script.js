const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];
const fieldset = document.getElementById('dados');
const label = document.createElement('label');
label.textContent = "Estado";  
fieldset.appendChild(label);
const select = document.createElement('select');
select.id = 'inputEstados';
select.name = 'estado';
select.required = true;
label.appendChild(select);
for (let i = 0; i < states.length; i++) {
    const element = states[i];
    const option = document.createElement('option');
    option.value = element;
    option.innerText = element;
    select.appendChild(option);
}