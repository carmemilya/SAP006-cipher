import cipher from './cipher.js';
 
const offsetEncode = document.getElementById("offsetCrypt");
const stringEncode = document.getElementById("textCrypt");
const msgEncode = document.getElementById("msgCrypt");
const buttonEncode = document.getElementById("buttonCrypt");
const buttonClearEnc = document.getElementById("clearButtonEn");
const offsetDecode = document.getElementById("offsetDecrypted");
const stringDecode = document.getElementById("textDecrypted");
const msgDecode = document.getElementById("msgDecrypted");
const buttonDecode = document.getElementById("buttonDecrypted");
const buttonClearDec = document.getElementById("clearButtonDec");

function encode(){ 
    
    const offset = parseInt(offsetEncode.value);
    const string = stringEncode.value;
    stringEncode.value = "";
    msgEncode.value = cipher.encode(offset, string);
    
}

buttonEncode.addEventListener("click", encode);

function clearEnc(){

    msgEncode.value = "";

}
buttonClearEnc.addEventListener("click", clearEnc)
    

function decode(){

    const offset = parseInt(offsetDecode.value);
    const string = stringDecode.value;
    stringDecode.value = "";
    msgDecode.value = cipher.decode(offset, string);   
   
}

buttonDecode.addEventListener("click", decode);

function clearDec(){

    msgDecode.value = "";

}
buttonClearDec.addEventListener("click", clearDec)

