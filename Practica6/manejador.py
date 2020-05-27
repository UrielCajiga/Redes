import threading
import socket
import time
from random import randint, uniform,random

def conectarS(mensaje):
	mi_socket = socket.socket()
	mi_socket.connect(('localhost', 6543))

	#mensaje = b"Hola desde el cliente"

	mi_socket.sendall(bytes(" ".join(str(e) for e in mensaje), 'utf-8'))
	respuesta = mi_socket.recv(1024)

	print ("Servidor-> " + respuesta.decode())

	
	mi_socket.close()
	return respuesta.decode()

def cubetas(cubetas):

	arreglo = []
	columnas = []

	cubetas = int(cubetas)
	rango = 1000/cubetas
	ini = 0
	fin = rango

	for i in range(cubetas):
		arreglo.append(columnas)

	for i in range(cubetas):
		arreglo[i] = [0]


	#print("El arreglo: " + str(arreglo))


	for i in range(20):
		num = randint(0,999)
		#print("El numero: " + str(num))
		ini = 0
		fin = rango
		for j in range(len(arreglo)):
			if(ini <= num and num <= fin):
				#print("Inicio " + str(ini) + " Fin " + str(fin))
				aux = arreglo[j]			
			
				#print("el aux : " + str(aux))
				aux.append(num)
				#print("el aux despues: " + str(aux))
				
				arreglo[j] = aux
				#print("Toda la lista: " + str(arreglo))
				break

			else:
				ini = fin
				fin = fin + rango
	return arreglo
'''
	for i in range(cubetas):
		print("Arreglo en "+str(i))
		print(str(arreglo[i]))
'''
	


if __name__ == '__main__':
	
	sockCliente = socket.socket()
	sockCliente.bind(('localhost', 8000))
	sockCliente.listen(5)

	print("Esperando cliente...")

	conexion, addr = sockCliente.accept()
	print ("Nueva conexion establecida!")
	print ("La direccion es: ")
	print (addr)

	senal = b"Estoy listo para recibir..."
	conexion.sendall(senal)

	res = conexion.recv(1024)

	res = res.decode()

	cub = cubetas(int(res))
	cubor = []
	for i in range(int(res)):

		from multiprocessing.pool import ThreadPool
		pool = ThreadPool(processes=1)

		async_result = pool.apply_async(conectarS, args=(cub[i],)) #Aqui se pone la funcion y los parametros		
		return_val = async_result.get()  # Optine el resultado de la funcion ejecutada en el hilo
		cubor.append(return_val)
		#print("Return -> " + str(return_val))
	print("\nLa cubeta ordenada")



	for i in range(int(res)):
		aux = cubor[i]
		conexion.sendall(bytes(aux, 'utf-8'))
		print(cubor[i])
		time.sleep(.2)

'''
	from multiprocessing.pool import ThreadPool
	pool = ThreadPool(processes=1)

	async_result = pool.apply_async(conectarS, args=(res,)) # Tuple of args for foo

	return_val = async_result.get()  # get the return value from your function.
	print(str(return_val))

	print("Hola desde la Main")

'''



'''
	thread = threading.Thread(target=conectarS, args=(res,))
	print(thread)
	thread.start()
	thread = threading.Thread(target=conectarS, args=(res,))
	thread.start()
	thread.join()#espera a que el hilo se termine de ejecutar
'''
	