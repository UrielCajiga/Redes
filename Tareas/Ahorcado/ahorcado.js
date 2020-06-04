function triangulo() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;

  
    ctx.beginPath();
    ctx.moveTo(75,50);
    ctx.lineTo(100,75);
    ctx.lineTo(100,25);
    ctx.closePath();
    ctx.fill();
  }
}

function p_derecho(ctx) {
  
   	ctx.fillStyle = "#3081ac";
   	ctx.fillRect(350,290,20,70);

   	ctx.fillStyle = "#000000";
	ctx.beginPath();
   	ctx.arc(360,370,15,0,Math.PI*2,true); // Círculo externo
    ctx.closePath();
    ctx.fill();	
}


function p_izquierdo(ctx) {
  
   	ctx.fillStyle = "#3081ac";
   	ctx.fillRect(310,290,20,70);

   	ctx.fillStyle = "#000000";
	ctx.beginPath();
   	ctx.arc(320,370,15,0,Math.PI*2,true); // Círculo externo
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

    ctx.arc(430,250,8,0,Math.PI*2,true); // Círculo externo
    ctx.fill();


}

function b_derecho(ctx) {
  
   	ctx.fillStyle = "#87591d";
    ctx.beginPath();
  	ctx.moveTo(300,200);
    ctx.lineTo(250,250);
    ctx.closePath();
    ctx.stroke();

    ctx.arc(250,250,8,0,Math.PI*2,true); // Círculo externo
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

var canvas = document.getElementById('canvas');
canvas.width = 600;
canvas.height = 600;
if (canvas.getContext){
	var ctx = canvas.getContext('2d');
	
	horca(ctx);
	cabeza(ctx);
	cuerpo(ctx);
	b_derecho(ctx);
	b_izquierdo(ctx);
	p_izquierdo(ctx);
	p_derecho(ctx);
	
}



//draw();
//triangulo();
//circulo();

//  https://developer.mozilla.org/es/docs/Web/Guide/HTML/Canvas_tutorial/Dibujando_formas

//  https://developer.mozilla.org/es/docs/Web/Guide/HTML/Canvas_tutorial/Basic_usage