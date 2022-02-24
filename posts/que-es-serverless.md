---
title: '¿Qué es la computación sin servidor?'
date: '2022-02-23'
tags: 'Tecnologias'
img: 'posts/what-is-serverless/thumb.jpg'
lang: 'es'
category: 'article'
---
## Aspectos generales
También conocido como **computación sin servidor** este es un método que ha estado tomando fuerza recientemente para servir el backend a los usuarios de tu sitio o aplicación. Este modelo está basado en **la nube** lo que facilita el desarrollo de aplicaciones sin preocuparse por la infraestructura o la gestión de los servidores. 

Cabe mencionar que aunque el nombre mencione explícitamente que no hay servidores involucrados esto no es acertado. Dado que sí hay servidores, sin embargo, el desarrollador no tiene que preocuparse por administrarlo. Ya que el proovedor de este es el que se encarga de todas las tareas rutinarias que estén relacionadas con el servidor. Dandole más tiempo al desarrollador para preocuparse por el **funcionamiento de su aplicación**.

Una de las principales ventajas de una *arquitectura sin servidor*  es que esta solo permanece activa cuando se la necesita. Es decir, cuando se presenta un evento en el código que deba ejecutar alguna función que normalmente la correríamos en el servidor, el proveedor se encarga de destinar solamente los recursos necesarios para ejecutar aquella tarea y cobrar por estos recursos específicos. Este modelo de pagar por porción de código ejecutada se conoce como **"Funciones como servicio"** *(**FaaS** - functions as a service)*

## Ventajas presentes en la computacion sin servidor
- **Costos menores:** al solo pagar por los recursos que utilizamos, es mucho más económico mantener tu aplicación.
- **Facil escalabilidad:** cuando desarrollamos en esta arquitectura, no tenemos que preocuparnos con que nuestro servidor sea suficiente para suplir la demanda de nuestros usuarios.
- **Código más simple:** como solo tenemos que preocuparnos por ejecutar las funciones que necesitamos para un correcto funcionamiento, nuestro código **"Backend"** va a ser mucho más conciso al no tener el resto del código que necesitamos para mantener el servidor en funcionamiento.

## Desventajas presentes en la computacion sin servidor
- No poder controlar tu propia lógica en el servidor.
- Las restricciones que el proveedor establezca pueden afectar la flexibilidad y personalización de su sistema.
- Arranques en frío cuando hay una demanda baja.

## ¿Qué nos espera en un futuro?
La computación sin servidor es una arquitectura muy nueva todavía. Las empresas que proveen este tipo de servicio trabajan dia tras dia para intentar contrarestar las respectivas desventajas de este modelo. Lo que si es bastante seguro es que este tipo de arquitectura está llegando al mercado para quedarse y para solucionar uno de los principales problemas que muchos desarrolladores y empresas enfrentan a la hora de crear y desplegar una aplicación en la nube.