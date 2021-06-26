const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
const checkauthorsBirth1 = () => {
  let check;
  const checkBirthday = books.forEach((book) => {
    for (let i = 0; i < books.length - 1; i += 1) {
      for (let j = i + 1; j < books.length; j += 1) {
        if (books[i].author.birthYear === books[j].author.birthYear) {
          check = true;
        }
        check = false;
      }
    }
  });
  return check;
}

//using 2 HoF

const checkauthorsBirth2 = () => {
  return books.every((book) => !books.some((booksome) => (book.author.birthYear === booksome.author.birthYear) && (book.author.name !== booksome.author.name)));
}

assert.deepStrictEqual(checkauthorsBirth1(), checkauthorsBirth2());
