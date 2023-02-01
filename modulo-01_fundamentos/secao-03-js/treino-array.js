let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// let searchForFirstTask = tasksList[0];
// console.log(searchForFirstTask);
// // Tomar café

// let searchForLastTask = tasksList[tasksList.length - 1];
// console.log(searchForLastTask);
// // Brincar com o cachorro

tasksList.unshift('Tomar banho'); // ADICIONA NA PRIMEIRA POSIÇÃO
tasksList.push('Dormir'); // ADICIONA NA ÚLTIMA POSIÇÃO
tasksList.pop(); //REMOVE A PRIMEIRA POSIÇÃO
tasksList.shift(); //REMOVE A ÚLTIMA POSIÇÃO

let indexOfTask = tasksList.indexOf('Reunião'); //indexOf usado para procurar o índice de um item no Array
console.log(indexOfTask);

// 1

for(let index = 0; index < tasksList.length; index += 1){
    console.log(tasksList[index]);
}