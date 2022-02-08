

let nome = prompt("Qual o seu nome?");
let velocidadeAtual = 0;
let novaVelocidade = prompt("A que velocidade você gostaria de acelerar a nave?");


let retorno = confirm("Você ira passar de 0 km/s, para " + novaVelocidade + " km/s.");

if(retorno) {
    velocidadeAtual = novaVelocidade;
}

if(velocidadeAtual <= 0){
    alert("Nava está parada. Considere partir e aumentar a velocidade.");
} else if (velocidadeAtual > 0 && velocidadeAtual <= 40) {
    alert("Você está devagar, podems aumentar mais.");
} else if (velocidadeAtual >= 40 && velocidadeAtual < 80){
    alert("Parece uma boa velocidade para manter.");
} else if (velocidadeAtual >= 80 && velocidadeAtual < 100){
    alert("Velocidade alta. Considere diminuir");
} else {
    alert("Velocidade perigosa. Controle automático forçado.");
}

alert("O piloto " +nome+ " esta a uma velocidade de " +velocidadeAtual+ " km/s.");
