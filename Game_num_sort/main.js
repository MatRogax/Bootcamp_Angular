const { random_num, imprimir_num } = require("../Game_num_sort/num_sort"); 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite quantos números você quer: ', (num) => {
    const { maior_num, numeros_sorteados } = random_num(parseInt(num));
    imprimir_num(maior_num, numeros_sorteados);
    rl.close();
});

