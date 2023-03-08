// name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo *COMO EU FIZ*
// const personLikes = (namee) => {
//   const { name, age, likes} = namee;
//   return `${name} is ${age} years old and likes ${likes}.`
// };
// <nome> tem <anos de idade> e gosta de <gostos da pessoa>

//Como também da para fazer
const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes}.`;

// Retornos esperados:
console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'