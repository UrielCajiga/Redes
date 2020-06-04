console.log("vamos a empezar la conexión...");

// Crea una nueva conexión.
const socket = new WebSocket('ws://localhost:8765');

//Variables globales del programa
var contador = 0;
var palabra = "pudin";
var Pletra = "";
var ganar = 0;

//Confirma la conexion con el servidor
socket.onopen = function (event) {
  socket.send(palabra); 
};

//Selecciona el canvasy lo dimenciona 
var canvas = document.getElementById('canvas');
canvas.width = 550;
canvas.height = 550;
var ctx = canvas.getContext('2d');
horca(ctx);

//Escucha todos los mensaje que entran del servidor
socket.onmessage = function (event) {
  var men = event.data;
  if(men.length > 5){
    console.log('Servidor: ' + men);
  }
  else{
    if(men.length == 5){
      console.log("en el false: " + men);
      switch(contador){
        case 0:
          cabeza(ctx);
          break;
        case 1:
          cuerpo(ctx);
          break;
        case 2:
          b_derecho(ctx);
          break;
        case 3:
          b_izquierdo(ctx);
          break;
        case 4:
          p_izquierdo(ctx);
          break;
        case 5:
          p_derecho(ctx);
          alert("¡Has perdido!");
          break;
      }
      contador++;      
    }
    else{
      console.log(men)
      var btnle = document.getElementById(men);
      btnle.className = "btn btn-warning mr-4 mt-4";
      btnle.innerText = Pletra;
      ganar+=1;
      if(ganar == palabra.length)
        alert("¡¡¡G A N A S T E !!!");
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
  letra = document.getElementById("letra");
  letra.value = "";
});

//Escucha el boton de reiniciar y reinicia la pagina
var recargar = document.getElementById('reload');

recargar.addEventListener('click', () => {
  document.location.reload();
});


//Funcion que crea tonones 
//Entra: El id del boton a crear
function agregarBoton(id) {
  var element = document.createElement("button");

  element.id = id;
  element.type = "button";
  //element.class = "btn btn-dark";
  element.innerHTML = "?";
  element.setAttribute('class', 'btn btn-dark mr-4 mt-4');
  
  var foo = document.getElementById("botones");
  //Append the element in page (in span).  
  foo.appendChild(element);
}



/*** Funciones para dibujar el ahorcado****/

function p_derecho(ctx) {
  
     ctx.fillStyle = "#3081ac";
     ctx.fillRect(350,290,20,70);

     ctx.fillStyle = "#000000";
  ctx.beginPath();
     ctx.arc(360,370,15,0,Math.PI*2,true); 
    ctx.closePath();
    ctx.fill();  
}


function p_izquierdo(ctx) {
  
     ctx.fillStyle = "#3081ac";
     ctx.fillRect(310,290,20,70);

     ctx.fillStyle = "#000000";
  ctx.beginPath();
     ctx.arc(320,370,15,0,Math.PI*2,true); 
    ctx.closePath();
    ctx.fill();  
}

function b_izquierdo(ctx) {
  
     ctx.fillStyle = "#87591d";
    ctx.beginPath();
    ctx.moveTo(380,200);
    ctx.lineTo(430,250);
    ctx.closePath();
    ctx.stroke();

    ctx.arc(430,250,8,0,Math.PI*2,true); 
    ctx.fill();


}

function b_derecho(ctx) {
  
     ctx.fillStyle = "#87591d";
    ctx.beginPath();
    ctx.moveTo(300,200);
    ctx.lineTo(250,250);
    ctx.closePath();
    ctx.stroke();

    ctx.arc(250,250,8,0,Math.PI*2,true); 
    ctx.fill();

}

function cuerpo(ctx) {
  
     ctx.fillStyle = "#78ac30";
    ctx.fillRect(300,170,80,120);
    //Cuello
    ctx.beginPath();
    ctx.moveTo(335,150);
    ctx.lineTo(335,170);
    ctx.closePath();
    ctx.stroke();
}

function cabeza(ctx) {
  
    ctx.fillStyle = "#fae2a5";
    ctx.beginPath();
    ctx.arc(335,110,40,0,Math.PI*2,true); 
    ctx.fill();
    ctx.stroke();
}

function horca(ctx){
  
  ctx.fillStyle = "#7b440f";
  ctx.fillRect(25,25,40,500);
  
  ctx.fillStyle = "#a3a3a3";
  ctx.fillRect(65,25,270,25);

}


//https://developer.mozilla.org/es/docs/Web/API/WebSocket