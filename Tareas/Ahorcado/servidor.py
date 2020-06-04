#!/usr/bin/env python

# WS server example

import asyncio
import websockets

async def hello(websocket, path):
    name = await websocket.recv()
    print(f"Cliente: {name}")

    palabra = str(name)


    #cadena = input()
    #greeting = f"{cadena}"
    greeting = f"Soy el servidor"

    await websocket.send(greeting)

    greeting = f"Vamos a empezar a transmitir"

    await websocket.send(greeting)

    while(True):
        name = await websocket.recv()
        print(f"Cliente: {name}")
        aux = str(name)
        cont = 0
        for i in palabra:            
            if(i == aux):
                await websocket.send(f""+str(cont))
                break
            cont+=1
        if(cont == len(palabra)):
            await websocket.send(f"False")


"""
	greeting = f"Mi nombre es Uriel"
    
    await websocket.send(greeting)
"""

start_server = websockets.serve(hello, "localhost", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()

#https://websockets.readthedocs.io/en/stable/intro.html

#pip install websockets