//let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
//console.log(tasksList.length);
// 3

//let searchForFirstTask = tasksList[0];
//console.log(searchForFirstTask);
// Tomar café

//let searchForLastTask = tasksList[tasksList.length - 1];
//console.log(searchForLastTask);
// Brincar com o cachorro

//tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
//console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

//tasksList.unshift('bom dia'); // Add m elemento no começo do array
//console.log (tasksList);

//tasksList.pop(); //retira último elemento
//console.log (tasksList);

//tasksList.shift(); //retira o primeiro
//console.log (tasksList);

//let checkIndex = tasksList.indexOf('bom dia');
//console.log(checkIndex);

// Exercício 1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Serviços');

console.log(menuServices);

let indexOfPortfolio = menu.indexOf('Portifólio');
console.log(indexOfPortfolio);

menu.push('Contato');
console.log(menu);