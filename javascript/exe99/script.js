let nomeNave = prompt("Digite o nome da nave");
let proibido = prompt("Digite uma letra proibida");

let inverso = "";

for(let i = nomeNave.length - 1; i >= 0; i--) {
    if(nomeNave[i] == proibido){
        break;
    } else {
        inverso += nomeNave[i];
    }
}

alert("Nome da nave: " +nomeNave+ "\n inverso: " +inverso);