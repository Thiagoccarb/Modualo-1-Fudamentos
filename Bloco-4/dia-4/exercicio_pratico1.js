let player = {
    bestinTheWorld: [2006, 2007, 2008, 2009, 2010, 2018], //inserido na parte 2 do exercício
    name: 'Marta',
    lastName: "Silva",
    age:"34",
    medals: {
        golden: 2,
        silver: 3,
    }
};
// dot notation
console.log('A jogadora' + ' ' + player.name + ' ' + player.lastName +' ' + 'tem' + ' ' + player.age + ' ' + 'anos de idade.');
console.log('A jogadora possui' + ' ' + player.medals.golden + ' ' + 'medalhas de ouro e' + ' ' + player.medals.silver +' ' + 'medalhas de prata.'); 
//notação de colchetes
console.log('A jogadora possui' + ' ' + player['medals']['golden'] + ' ' + 'medalhas de ouro e' + ' ' + player['medals']['silver'] +' ' + 'medalhas de prata.');