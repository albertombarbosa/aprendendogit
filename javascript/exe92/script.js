let nomeNave = prompt("Digite o nome da nave:");

let dobra = 0;
let resposta = prompt("Deseja entrar na dobra espacial? \n1-Sim \n2-Não");

if(resposta == "1"){
    while(resposta == "1"){
        resposta = prompt("Deseja entrar na dobra espacial? \n1-Sim \n2-Não");
        dobra++;
    }
}

alert("O nome da nave é " +nomeNave+ " e ela fez " +dobra+ " dobra(s).");