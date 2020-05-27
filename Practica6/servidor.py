import socket

mi_socket = socket.socket()
mi_socket.bind(('localhost', 6543))
mi_socket.listen(5)#Numero de mensajes en el bufer de espera

while True:
	conexion, addr = mi_socket.accept()
	print ("Nueva conexion establecida!")
	print ("La direccion es: ")
	print (addr)

	peticion = conexion.recv(1024)
	
	aux = str(peticion.decode())
	
	numeros = list(aux.split(" "))
	print ("Cliente-> " + str(numeros))


	#for i in range(len(numeros)):
	#	numeros[i] = int(numeros[i])
	numeros.remove('0')
	numeros.sort()
	print(numeros)

	#mensaje = b"Hola, saludos desde el servidor :)"
	conexion.sendall(bytes(" ".join(str(e) for e in numeros), 'utf-8'))
    #peticion = conexion.recv(1024)
	#print ("Cliente-> " + peticion.decode())
	conexion.close()

