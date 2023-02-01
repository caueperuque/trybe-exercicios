
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Ex01.Percorrendo o array e imprimindo todos seus valores
// for(let index = 0; index < numbers.length; index +=1){
//     console.log(numbers[index]);
// }



//Ex02.Somando todos os valores do array e imprimindo resultado
// let sum = 0;//Criei uma variável para armazenar o resultado
// for(let index = 0; index < numbers.length; index +=1){ //Percorri a array para pegar cada elemento dele
//quero que o index 0 some com os index restante
//     sum += numbers[index]; //Pego 1 indice, vou para o próximo e somo com o anterior e assim porteriormente (Exemplo: indice[0] + indice[1], resultado anterior + indice[3])
// }
// console.log(sum);



//Ex03.Calculando média artimética do array
// let sum = 0; //Var para armazenar a soma
// let media = 0; //Var para armazenar a média
// for(let index = 0; index < numbers.length; index += 1){ //Percorro o array
//     sum += numbers[index]; //Somo todos elementos do array e armazeno em 'sum'
//     media = sum / numbers.length; //Calculo a média (valor da soma dos elementos, dividido pelo seu tamanho)
// }
// console.log(media); //Imprimo a média



//Ex04.
// let sum = 0; //Var para armazenar a soma
// let media = 0; //Var para armazenar a média
// for (let index = 0; index < numbers.length; index += 1) { //Percorro o array
//     sum += numbers[index]; //Somo todos elementos do array e armazeno em 'sum'
//     media = sum / numbers.length; //Calculo a média (valor da soma dos elementos, dividido pelo seu tamanho)
// }
// if(media > 20){
//     console.log('Valor da média é: ' + media + ', portanto maior que 20');
// }else{
//     console.log('Valor da média é: ' + media + ', portanto menor ou igual a 20');
// }



//Ex05.Pega o maior número do array
// let number = 0;
// let result = numbers[0];
// for (let index = 0; index < numbers.length; index += 1) { //Percorro o array
//     number = numbers[index];
//     if(number > result){ //Caso o número que o index passou seja maior que resultado, ele armazena o número na var 'result'
//         result = number;
//     }
// }
// console.log(result);



//Ex06.Encontrando números impares
// let result = 0;
// for (let index = 0; index < numbers.length; index += 1){
//     if(numbers[index] % 2 !== 0){
//         result += 1;
//     }
// }
// if (result === 0) {
//     console.log('Nenhum valor ímpar encontrado');
// }else{
//     console.log('Existem ' + result + ' números ímpares encontrados na lista.');
// }


// Ex07.Encontrando menor número do array
// let number = 0;
// let result = numbers[0];
// for(let index = 0; index < numbers.length; index += 1){
//     number = numbers[index];
//     if(number < result){
//         result = number;
//     }
// }
// console.log(result);



//Ex08.Criando array que vá de 1 até 25 e imprimindo resultado
// let array2 = []
// for(let index = 1; index <= 25; index += 1){
//     array2.push(index);
// }
// console.log(array2);


//Ex08.Dividindo cada elemento do array por 2
// let array2 = []
// let div = 0;
// let result = 0;
// for(let index = 1; index <= 25; index += 1){
//    array2.push(index);
// }
// console.log(array2);

//primeiro percorrer esse array
// for(let c = 0; c < array2.length; c += 1){
//     //quero pegar cada elemento do array e dividir cada elemento do array por 2
//     result = array2[c] / 2;
//     //imprimir a lista atualizada
//     console.log(result);
// } 



//ExBônus. Bubble Sort de forma decrescente
//Primeiro vamos percorrer o array sem contar o primeiro indice
// for (let index = 1; index < numbers.length; index += 1){
//     //fazendo comparação para ver se o númerio posterior de onde o indice está é maior ou menor
//     for(let secondIndex = 0; secondIndex < index; secondIndex += 1){
//         //verfica se o número for maior, SE sim ele troca a posição
//         if(numbers[secondIndex] < numbers[index]){
//             let position = numbers[index];
//             numbers[index] = numbers[secondIndex];
//             numbers[secondIndex] = position;
//         }
//     }
// }
// console.log(numbers);



// ExBônus02. Multiplica os elementos do array pelo próximo elemento
// for (let index = 1; index < numbers.length; index += 1){
//     for(let secondIndex = 0; secondIndex < index; secondIndex += 1){
//         if(numbers[secondIndex] > numbers[index]){
//             let position = numbers[index];
//             numbers[index] = numbers[secondIndex];
//             numbers[secondIndex] = position;
//         }
//     }
// }
// console.log(numbers);

// let array2 = [];
// let mult = 0;
// for(let c = 0; c < numbers.length; c += 1){
//     if(c + 1 < numbers.length){
//     mult = numbers[c + 1] * numbers[c];
//     array2.push(mult)
//     }else{
//         array2.push(numbers[c] * 2)
//     }
// }
// console.log(array2);