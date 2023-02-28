var countSheep = function (num) {
  let sheeps = [];
  let stringSheeps = 0;
  if (typeof num === 'number') {
    if (num === 0) {
      return "";
    } else {
      for (let index = 1; index <= num; index += 1) {
        sheeps.push(`${index} sheep...`)
        stringSheeps = sheeps.join('');
      }
    }
  }
  return stringSheeps
}