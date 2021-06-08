const name= prompt("Como você se chama?");
document.getElementById("root").innerHTML = ("Olá, " + name + "!");


function codificar(){
    const offset = document.getElementById("offsetNumber").value
    const text = document.getElementById("text").value;
    const arr = text.split("");

    for (i = 0; i< arr.length; i++){

        //falta terminar essa função

    }
}

import cipher from './cipher.js';
// não estou conseguindo importar o código no cipher para o o index.js/html
