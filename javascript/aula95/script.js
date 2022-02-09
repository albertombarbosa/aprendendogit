let nome = prompt("Nome da nave");
let novaNave = "";
let de = prompt("Qual caractere você deseja substituir?");
let por = prompt("Por qual caractere você deseja substituir?");

for(let i = 0; i <= nome.length; i++){

    if(nome[i] != de){
        novaNave += nome[i];
    } else {
        novaNave += por;
    }
}

console.log(novaNave);


