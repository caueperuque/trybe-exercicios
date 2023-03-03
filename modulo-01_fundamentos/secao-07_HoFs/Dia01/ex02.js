// const teste = (num) => {
//   if (num === generateRandomNum()) {
//     return 'Parabéns, você ganhou!';
//   }
//   return 'Tente novamente';
// };

// console.log(teste(2));

const checkNumber = (myNumber, number) => myNumber === number;

const betNumber = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return callback(myNumber, number) ? 'Parabéns, você ganhou!' : 'Tente novamente';
}

console.log(betNumber(4,checkNumber));