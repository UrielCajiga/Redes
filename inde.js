'use strict'

var http = require('http').createServer(webServer),
	form = require('fs').readFileSync('./form.html'),
	dar = require('fs').readFileSync('./dar.html'),
	querystring = require('querystring'),
	dataString = '';

function webServer(req, res){

	if(req.method == 'GET')
	{
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.end(dar);

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