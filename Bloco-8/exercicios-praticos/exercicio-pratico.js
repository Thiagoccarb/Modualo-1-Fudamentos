const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const nameUpper = (element, index) => { 
  names[index] = element.toUpperCase();
};

names.forEach(nameUpper);

//console.log(names);

//1)-Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);

