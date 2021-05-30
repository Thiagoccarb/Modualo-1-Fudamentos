function addDaysWeek() {
  let weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  let getWeekDays = document.querySelector('.week-days');
  for (let index = 0; index < weekDays.length; index++) {
    let days = weekDays[index];
    let daysList = document.createElement('li');
    daysList.innerText = days;
    getWeekDays.appendChild(daysList);
  }
}
addDaysWeek();
//exercicio 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function calendarDays() {
  let days = document.querySelector("#days");
  for (let index = 0; index < dezDaysList.length; index++) {
    let day = document.createElement("li");
    day.className = "day";
    day.innerText = dezDaysList[index];
    days.appendChild(day);
    if (day.innerText == 24 | day.innerText == 25 | day.innerText == 31) {
      day.className += " holiday";
    }
    if (day.innerText == 4 | day.innerText == 11 | day.innerText == 18 | day.innerText == 25) {
      day.className += " friday";
    }
  }
}
calendarDays()
//exercicio 2
function addButton(name) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.innerText = name;
  button.id = "btn-holiday";
  buttonsContainer.appendChild(button);
}
addButton('feriados')
//exercicio 3 (duvidas)
function changeColor() {
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';//branco
  let setNewColor = 'blue';
  for (let index = 0; index < getHolidays.length; index++) {
    if (getHolidays[index].style.backgroundColor === setNewColor) {
      getHolidays[index].style.backgroundColor = backgroundColor;
    } else {
      getHolidays[index].style.backgroundColor = setNewColor;
    }
  }
}

let getHolidayButton = document.getElementById('btn-holiday');
getHolidayButton.addEventListener('click', changeColor);



//exercicio 4
function createButton(name) {
  let getHolidayButton = document.querySelector('.buttons-container');
  button = document.createElement('button');
  button.id = 'btn-friday';
  button.innerText = name;
  getHolidayButton.appendChild(button);
}
createButton('friday');

//exercicio 5

function changeText() {
  let fridayDays = document.querySelectorAll('.friday');
  let originalColor = 'rgb(119, 119, 119)';
  let newColor = 'blue';
  for (let index = 0; index < fridayDays.length; index++) {
    if (fridayDays[index].style.color === newColor) {
      fridayDays[index].style.color = originalColor;
    } else {
      fridayDays[index].style.color = newColor;
    }
  }
}
let getFridayButton = document.querySelector('#btn-friday');
getFridayButton.addEventListener('click', changeText);

//exercicio 6
function zoomIn() {
  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  });
}
zoomIn();
function zoomOut() {
  days.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}
zoomOut();
zoomIn();

//exercicio 7
function customizeCalendar(tarefa) {
  let getMyTasks = document.querySelector('.my-tasks');
  let elemento = document.createElement('span');
  elemento.innerText = tarefa;
  getMyTasks.appendChild(elemento);
}
customizeCalendar('Estudos:');

//exercicio 8
function addColor(cor) {
  let getMyTasks = document.querySelector('.my-tasks');
  let elemento = document.createElement('div');
  elemento.className = 'task';
  elemento.style.backgroundColor = cor;
  getMyTasks.appendChild(elemento);
}
addColor('blue');

//exercicio 9
function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function (event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();
