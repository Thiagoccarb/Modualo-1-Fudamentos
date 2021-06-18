//  const student1 = {
//    Html: 'Muito Bom',
//    Css: 'Bom',
//    JavaScript: 'Ótimo',
//    SoftSkills: 'Ótimo',
//  };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

//  usando for in
//  for (i in student1){
//    console.log(`${i}: ${student1[i]}`);
//  }
//   usando Object.keys()
//  console.log(Object.keys(student1));


//////////////////////////////////////////////////////////

 const student1 = {
   Html: 'Muito Bom',
   Css: 'Bom',
   JavaScript: 'Ótimo',
   SoftSkills: 'Ótimo',
 };

 const student2 = {
   Html: 'Bom',
   Css: 'Ótimo',
   JavaScript: 'Ruim',
   SoftSkills: 'Ótimo',
   Git: 'Bom',  //chave adicionada
 };

 const listSkills = (student) => {
   const arrayOfSkills = Object.keys(student);
   for(index in arrayOfSkills){
     console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
   }
 };

 console.log('Estudante 1');
 listSkills(student1);

 console.log('Estudante 2');
 listSkills(student2);