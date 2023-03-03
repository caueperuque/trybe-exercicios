const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswer = (solutions, answer) => {
  if(answer === solutions) {
    return 1;
  } if (answer === 'N.A') {
    return 0;
  }
  return -0.5;
}

const countPoints = (solutions, answer, action) => {
  let points = 0;
  for(let index = 0; index < solutions.length; index += 1) {
    const actionReturn = action(solutions[index], answer[index]);
    points += actionReturn;
  }
  return `Resultado final: ${points} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswer));