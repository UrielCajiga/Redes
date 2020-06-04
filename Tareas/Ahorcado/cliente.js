console.log("vamos a empezar la conexión...");

// Crea una nueva conexión.
const socket = new WebSocket('ws://localhost:8765');

//Variables globales del programa
var contador = 0;
var palabra = "pudin";
var Pletra = "";

//Confirma la conexion con el servidor
socket.onopen = function (event) {
  socket.send(palabra); 
};

//Escucha todos los mensaje que entran del servidor
socket.onmessage = function (event) {
  var men = event.data;
  if(men.length > 5){
    console.log('Servidor: ' + men);
  }
  else{
    if(men.length == 5){
      console.log("en el false: " + men);
      contador++;
      switch(contador){
        case 0:
          break;
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          break;
      }      
    }
    else{
      console.log(men)
      var btnle = document.getElementById(men);
      btnle.className = "btn btn-warning";
      btnle.innerText = Pletra;
    }


  }

};

//Crea las casillas de las letras de la palabra
for(var i = 0; i<palabra.length; i++){
  agregarBoton(i);
}

//Selector del boton "Enviar"
const btnSend =  document.getElementById('btnSend');

//Se mentien a la escuhca que no introduscan mas de un caracter en la letra
var input=  document.getElementById('letra');
input.addEventListener('input',function(){
  if (this.value.length > 1) 
     this.value = this.value.slice(0,1); 
})

//Toma el valor que entra en la casilla y la envia al servidor
btnSend.addEventListener('click', () => {
  var letra = document.getElementById("letra").value;
  socket.send(letra);
  Pletra = letra;
});


//Funcion que crea tonones 
//Entra: El id del boton a crear
function agregarBoton(id) {
  var element = document.createElement("button");

  element.id = id;
  element.type = "button";
  //element.class = "btn btn-dark";
  element.innerHTML = "?";
  element.setAttribute('class', 'btn btn-dark');
  
  var foo = document.getElementById("botones");
  //Append the element in page (in span).  
  foo.appendChild(element);
}



/*
socket.addEventListener('message', function (event) {
    
    var senal = parseInt(event.data, 10);
   	if(senal == 11){
   		console.log(senal);
   	} 
   	else{
   		console.log('Servidor: ', event.data);
   	}

    
});
*/
//https://developer.mozilla.org/es/docs/Web/API/WebSocket