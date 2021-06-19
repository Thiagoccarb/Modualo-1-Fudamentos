const id = {
  person: 'thiago',
  age: '34',
  gender: 'male',
}

const address = {
  country: 'Brazil',
  State: 'Sp',
  Street: 'Raul Peixoto',
}

const find = (obj, value) => {
  let info = Object.entries(obj);
  for (let key = 0; key < info.length; key++) {
    const element = info[key][0];
    if (info[key][0] === value) {
      return info[key][1];
    }
  }
}
console.log(find(id, 'age'))