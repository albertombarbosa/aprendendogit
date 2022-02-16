function desacelerar(qtd, funcao) {

    let velocidade = 20

    while(qtd > 0) {
        funcao(qtd);
        qtd -= velocidade;
    }
    alert("Nave parada. As portas podem ser abertas.");
}

let velocidadeNave = 120;

desacelerar(velocidadeNave, function(qtd){
    console.log("Velocidade atual:" +   qtd);
});

//Estudar este exercício! ! ! !