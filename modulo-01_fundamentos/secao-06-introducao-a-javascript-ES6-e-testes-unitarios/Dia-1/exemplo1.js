// Utilizando arrow functions, você criou a função, definiu que ela recebe dois parâmetros e que retorna a soma entre eles.

// Para saber se a função está executando corretamente, é preciso testá-la. Para isso, execute o código abaixo:

// const sum = (value1, value2) => {
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3'));

//   2 + ‘3’ = ‘23’? Uma interação bastante inusitada, concorda?

// O que aconteceu foi que a sua função, ao perceber que estava fazendo uma operação com parâmetros de tipos distintos (número + string), converteu o primeiro parâmetro para uma string, e a operação realizada foi de concatenação de strings por meio do sinal de +.

// Esse comportamento ocorre porque o JavaScript é considerado uma linguagem dinâmica. Ou seja, quando se declara uma variável, não é necessário definir o tipo de dado, o que permite que ela mude de tipo ao longo da execução do código.

// Por mais que esse aspecto traga alguma flexibilidade, ele também produz comportamentos inesperados, como você viu no exemplo acima. Por isso, você, enquanto boa pessoa programadora, deve ser capaz de prever esses comportamentos e evitar que eles ocorram. 😉

// No caso da função que você criou para realizar a soma dos números, é possível adicionar uma condicional para verificar o tipo do dado passado como parâmetro. Analise e execute o código abaixo:

// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       return 'Os valores devem ser numéricos';
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3'));
  
//   Para tratar erros em um código JavaScript, precisamos do fluxo de exceção. Para isso, podemos interromper o funcionamento do código e lançar um erro por meio do throw new Error, que cria e lança um objeto de erro. Veja o exemplo abaixo:

// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3'));

const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos'); // através do construtor `new Error` já sabemos que será lançada a mensagem se algo der errado.
    }
  };
  
  const sum = (value1, value2) => {
    // o `try` vai executar a função verifyNumber e retornar a soma caso os parâmetros sejam números
    try { 
      verifyIsNumber(value1, value2);
      return value1 + value2;
    // se o bloco `try` apresentar erro, o `catch` vai capturar esse erro e retornar a mensagem já criada através da propriedade `.message` nativa do objeto Error.
    } catch (error) {
      return error.message;
    }
  };
  
  console.log(sum(2, '3'));