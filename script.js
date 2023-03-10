
const botonEncriptar= document.querySelector("#btn-encriptar");
const botonDesencriptar= document.querySelector("#btn-desencriptar");
const botonCopy = document.querySelector("#btn-copy");


const textoEntrada= document.getElementById("input-texto");
const textoSalida= document.getElementById("msg");



async function copiarEnElPortapapeles(){
   

   await navigator.clipboard.writeText(textoSalida.value)
   
   .catch(error => {
     
      console.log("Hubo un error: ", error);
   });

} 

botonCopy.addEventListener("click", () => {
   if(navigator.clipboard){
     
      copiarEnElPortapapeles();
      
    }else{
      
    }

});


function encriptar(){
   
   let texto= textoEntrada.value; 
   let aux="";
   
   
   for(let i=0; i < texto.length; i++){
      let st="";
      let car= texto[i];
      switch ( car ){
         case "a": 
                  st="ai";            
                  break;
         case "e":
                  st="enter";      
                  break;
         case "i":
                  st="imes";      
                  break;
         case "o":
                  st="ober";      
                  break;  
         case "u":
                  st="ufat";      
                  break;             
         default:
                  st= car;
                  break;
      }

      aux+= st;
   }
   
   textoSalida.value= aux;

}

function desencriptar(){
   
   let texto= textoEntrada.value; 
   let aux="";
   
   
   let i=0;
   while ( i < texto.length){
      let st="";
      let car= texto[i];
      switch ( car ){
         case "a":                       
                  st= "a";
                  i+= 2;
                  break;
         case "e":              
                  st= "e";
                  i+= 5;    
                  break;
         case "i":                
                  st="i";
                  i+= 4;
                  break;
         case "o":                 
                  st= "o";
                  i+= 4;
                  break;  
         case "u":                
                  st= "u";
                  i+= 4;
                  break;             
         default:
                  st= car;          
                  i += 1;        
                  break;
      }
      aux+= st;   
   }   
   
   textoSalida.value= aux;

}


function esMayuscula(caracter){
   
   return /[A-Z]/.test(caracter); 
}

function esNumero(caracter){
   
   return /[0-9]/.test(caracter);  
}

function tieneAcento(caracter){
   
   return /[??,??,??,??,??,??,??,??,??,??]/.test(caracter);  

}

function textoValido(){

   let texto= textoEntrada.value;

   let valido= true;
   
   for (let i=0; i< texto.length; i++){
      car= texto.charAt(i);
                           
      if( esMayuscula(car) || esNumero(car) || tieneAcento(car) ){
         valido= false;
         break;
      }
   }

   return valido;

}

botonDesencriptar.addEventListener("click", (event) => {
   event.preventDefault();
   desencriptar();
   
});

botonEncriptar.addEventListener("click", (event) => {
   event.preventDefault();
   if (textoValido()){
      encriptar();   
   }else{
      textoEntrada.value= "Texto no valido";
   }
   
   
});

