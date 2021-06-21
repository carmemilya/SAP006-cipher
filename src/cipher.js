
const cipher = {
  encode: function encode(offset, string){
    offset = parseInt(offset, 10);
    let cryptography;
    let crypt = "";
    
      if (offset === 0 || offset === "" || string === "" ){
          
        throw new TypeError(alert("Entre com um valor válido"));

      } 
      else{

       for(let i=0 ; i < string.length ; i++){
          const codeAsc = string.charCodeAt(i);
              
          if (codeAsc >= 65 && codeAsc <= 90 ){

            cryptography = ((codeAsc - 65) + offset) % 26 + 65; 
              
          }
          else if (codeAsc >= 97 && codeAsc <= 122){

            cryptography = ((codeAsc - 97) + offset) % 26 + 97;

          }
          else if (codeAsc >= 48 && codeAsc<= 57) {

            cryptography = (((codeAsc - 48) + offset) % 10) + 48; 

          }
          else{

            cryptography = codeAsc;
              
          }  
          
          crypt += String.fromCharCode(cryptography);

        }
      } 
    return crypt; 
  },

  decode: function decode(offset, string){
   offset = parseInt(offset, 10);
   let decryptography;
   let decrypt = "";

      if (offset === 0 || offset === "" || string === ""){

        throw new TypeError(alert("Entre com um valor válido"));

      }
      else{

        for(let i=0 ; i < string.length ; i++) {
          const codeAsc = string.charCodeAt(i)

          if (codeAsc >= 65 && codeAsc <= 90 ){

            decryptography = ((codeAsc - 90) - offset) % 26 + 90; 
        
          }
          else if(codeAsc >= 97 && codeAsc <= 122) {

            decryptography = ((codeAsc - 122) - offset) % 26 + 122;
          }
          else if (codeAsc >= 48 && codeAsc <= 57) {

            decryptography = (((codeAsc - 57)- offset) % 10) + 57; 

          }
          else {

           decryptography = codeAsc;

          }

         decrypt += String.fromCharCode(decryptography);
    
        }
      }
    return decrypt;
  },

};

 export default cipher;
