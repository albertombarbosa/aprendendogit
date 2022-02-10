let nomeNave = prompt("Digite o nome da nave");
let velocidade = 0;

function acelerar(){
    velocidade += 5;
}

function desacelerar(){
    velocidade -= 5;
}

function imprimirDados(){
    alert("O nome da nave é: " +nomeNave+ " e sua velocidade é de: " +velocidade);
}

function sair(){
    alert("Programa finalizado!")
}

function menu(){
    let opcao = prompt("Escolha uma das seguintes opções: \n 1 - Acelerar 5km/s\n 2 - Desacelerar 5km/s\n 3 - Imprimir Dados\n 4- Sair do Programa");
    return opcao;
}

function sistema(opcao = menu()){
    switch(opcao){
        case "1":
            acelerar();
            sistema();
            break;
        case "2":
            desacelerar();
            sistema();
            break;
        case "3":
            imprimirDados();
            sistema();
            break;
        case "4":
            sair();
            break;
        default:
            alert("Digite uma opção valida!");
            sistema();
            break;
    }
}

sistema();