let distanciaAnosLuz = prompt("Qual a distância em anos-luz?");
confirm("1 - Parsec(pc) \n2 - Unidade astronômica(AU) \n3 - Quilômetros(km)");
let opcao = prompt("Digite o número correspondente a opção:");
let valorConvertido = 0;
switch(opcao){
    case "1":
        opcao = "pc";
        valorConvertido = distanciaAnosLuz * 0.306601;
        break;

    case "2":
        opcao = "AU";
        valorConvertido = distanciaAnosLuz * 63241.1;
        break;

    case "3":
        opcao = "km";
        valorConvertido = distanciaAnosLuz * (9.5 * Math.pow(10,12));
        break;

    default:
        alert("Opção não encontrada");
        break;
}

alert("Distância em Anos-Luz: "+ distanciaAnosLuz + " -> " + valorConvertido);

