const costProduct = 1000.00;
const costSell = 1750.00;

let profit = null;
let totalCost = null;

if(costProduct >= 0 && costSell >= 0){
    totalCost = costProduct + (0.2 * costProduct);
    profit = 1000 * (costSell - totalCost);
    console.log('Lucro dos produtos foi de R$' + profit);
} else {
    console.log('Valor de entrada ínvalido')
}