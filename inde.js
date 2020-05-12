'use strict'

var http = require('http').createServer(webServer),
	form = require('fs').readFileSync('./form.html'),
	bar = require('fs').readFileSync('./bar.html'),
	url = require('url'),
	querystring = require('querystring'),
	dataString = '';

function webServer(req, res){

	if(req.method == 'GET')
	{
		res.writeHead(200, {'Content-Type' : 'text/html'});
		
		var parametros = url.parse(req.url, true).query;

		if(parametros.nombre){
			console.log('Nombre: ',parametros.nombre);
			//res.write('<h1>Sludso</h1>');
			res.write('<h1>');
			res.write('Nombre: '+parametros.nombre + ' -- Apellido: '+parametros.apellido);
			res.write('</h1>');
			res.write(bar);
		}else{
			res.write(form);
			res.end();
		}
	
		
	
		//

	}
	if(req.method == 'POST'){
		req
			.on('data', function(data){
				dataString += data;
			})
			.on('end',function(){
				var templateString = `Los datos son: ${dataString}`;
				console.log(templateString);
				//res.send('<h1>Estamosn andando</h1>');
				res.end(templateString);

			})
	}
}

http.listen(3000);

console.log('Servidor corriendo en el puerto 3000');