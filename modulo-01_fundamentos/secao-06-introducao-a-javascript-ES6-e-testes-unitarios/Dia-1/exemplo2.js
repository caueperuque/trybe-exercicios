// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newkey = 'lastName';
//   const lastName = 'Ferreira'

//   const adicionaPropriedade = (object, key, value) => {
//     object[key] = value
//   }

// adicionaPropriedade(customer, newkey, lastName);

// newkey = 'fullName';
// const fullName = `${customer.firstName} ${customer.lastName}`;

// adicionaPropriedade(customer, newkey, fullName);

// console.log(customer);

const pessoaEstudante = {}

const addProperties = (object, newKey, value) => {
  object[newKey] = value;
}

addProperties(pessoaEstudante, 'Name', 'Cauê Peruque');
addProperties(pessoaEstudante, 'Email', 'cauepptrybe@gmail.com');
addProperties(pessoaEstudante, 'Telephone', '+5518998877665');
addProperties(pessoaEstudante, 'Github', 'https://github.com/caueperuque');
addProperties(pessoaEstudante, 'Linkedin', 'https://www.linkedin.com/in/caueperuque/');

console.log(pessoaEstudante);

