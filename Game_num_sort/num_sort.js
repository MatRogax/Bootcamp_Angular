function random_num(num) {
    let maior_num = 0;
    let numeros_sorteados = [];

    for (let i = 0; i < num; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        numeros_sorteados.push(numeroAleatorio);

        if (numeroAleatorio > maior_num) {
            maior_num = numeroAleatorio;
        }
    }

    return { maior_num, numeros_sorteados };
}

function imprimir_num(maior_num, numeros_sorteados) {
    console.log("Os números sorteados foram:");
    numeros_sorteados.forEach(numero => {
        console.log(numero);
    });
    console.log("O maior número é: " + maior_num);
}


module.exports = { random_num, imprimir_num };
