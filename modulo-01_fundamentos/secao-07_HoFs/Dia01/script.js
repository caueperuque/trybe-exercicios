const emailGenerator = (name) => {
  const email = name.replace(" ", "_").toLowerCase();
  return { name, email: `${email}@trybe.com` };
}

const newEmployees = () => {
  const employees = {
    id1: emailGenerator('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: emailGenerator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: emailGenerator('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());
// console.log(emailGenerator('caue peruque'));

