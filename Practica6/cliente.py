import socket

mi_socket = socket.socket()
mi_socket.connect(('localhost', 8000))

#mensaje = b"Hola desde el cliente"
mi_lista = [3,5,9,2]
#mi_socket.sendall(mensaje)
respuesta = mi_socket.recv(1024)

print ("Servidor-> " + respuesta.decode())
print ("¿Cuantas cubetas quieres?: ")



mensaje = input()

#mi_socket.sendall(bytes(" ".join(str(e) for e in mi_lista), 'utf-8'))
mi_socket.sendall(bytes(mensaje, 'utf-8'))

numOrd = []
for i in range(int(mensaje)):
	respuesta = mi_socket.recv(1024)

	aux = str(respuesta.decode())

	numeros = list(aux.split(" "))

	numOrd.append(numeros)

	print("Cubeta " + str(i+1) + ": " + str(numeros) )


#print ("Servidor-> " + respuesta.decode())

mi_socket.close()