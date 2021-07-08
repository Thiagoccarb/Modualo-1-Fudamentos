function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const newArray = [];
    for (let i = 0; i < 10; i += 1) {
      newArray.push(getRandom(1, 50));
    }
    const squareArray = newArray.map((element) => element * element);
    const sum = squareArray.reduce((acc, crr) => acc + crr, 0);
    (sum < 8000) ? resolve(sum) : reject(sum);
  });

  promise
    .then((sum) => ([2, 3, 5, 10].map((element) => sum / element)))
    // .then(() => console.log('Promise resolvida'))
    // .catch(() => console.log('Promise rejeitada'));
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));

};

fetchPromise();
