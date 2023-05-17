let i = 0

while (i <10) {
    console.log(i);

    i++
    // i = i + 1
}





//ex. 1

let numero;
let somatorio = 0;
while(numero!==0){
    numero = Number(prompt("Digite um número"))
    somatorio = somatorio + numero
    // somatorio += numero
}

console.log("O somatório é", somatorio);



const numeros = [10, 42, 53, 68, 87]

for(let i = 0;i < numeros.length;i++){
    console.log(numeros[i]);
    //console.log(numeros);
}



// ex. 2

const numeros = [11, 15, 18, 14, 12, 13]

function devolveMaiorNumero(arrayNumeros) {
    
    let maiorNumero = 0

    for(let i = 0; i < arrayNumeros.length; i++) {
        let numeroAtual = arrayNumeros[i]
        
        if(numeroAtual >= maiorNumero) {
            maiorNumero = numeroAtual
        }
    }

    console.log(`O maior número do array é ${maiorNumero}`)
}

devolveMaiorNumero(numeros)



const numeros = [11, 15, 18, 14, 12, 13]

for(let numero of numeros){
    console.log("numero",numero);
}




//ex. 3

const palavras = ["Oi", "sumido", "tudo", "bem", "saudades"]

for(let palavra of palavras){
    console.log(palavra);
}



