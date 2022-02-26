---
title: 'SQL vs. NoSQL - ¿Cual escoger?'
date: '2022-02-25'
tags: 'Tecnologias'
img: 'posts/sql-vs-nosql-which-one-to-choose/thumb.png'
lang: 'es'
category: 'article'
---

Uno de los primeros problemas que los desarrolladores enfrentan a la hora de desarrollar una aplicación. Es decidir que tipo de base de datos les conviene utilizar.  Inclusive, puede que toda su carrera sólo hayan utilizado un tipo de estas y nunca se detuvieron a pensar si estaban usando la correcta. 

Sabemos que los dos principales tipos de bases de datos son las Relacionales (SQL) y las No Relacionales (NoSQL). Una base de datos relacional es una donde los datos que están almacenados en esta están relacionados con otros datos. Por el otro lado una base de datos no relacional es exactamente lo opuesto.

## Bases de datos Relacionales (SQL)
Estas son colecciones de datos organizadas en forma de tablas, que contienen filas, columnas y celdas tal y como funciona un libro de *Excel* en un acercamiento muy generalizado. Cada tabla de la base de datos debe contar con una columna que almacene llaves primarias que van servir de identificador de cada una de las filas de la tabla. Este identificador es lo que luego va a servir de medio para establecer las relaciones entre las entidades o tablas de la base de datos.

![SQL databases](/images/posts/sql-vs-nosql-which-one-to-choose/sql.png)

### Ventajas de SQL:
- Debido al tiempo que llevan en el mercadillo son menos costosas que si contraparte y además tienen un mayor soporte.
- Son integrales, es decir el tipo de dato especificado para cada campo debe coincidir con el dato que sea ingresado.
- Menos vulnerables a fallas.

### Desventajas de SQL:
- Poca flexibilidad.
- Menos velocidad de lectura a mucho volumen de datos.

## Bases de datos No Relacionales (NoSQL)
Son colecciones de datos con esquemas muy flexibles. Son faciles de desarrollar y cuentan con un muy buen desempeño manejando cantidades muy grandes de datos. Estas NO cuentan con un identificador para sus datos por lo que no es posible establecer relaciones entre los datos de una base de datos *NoSQL*. En estas bases de datos los datos son organizados como documentos.

![NoSQL databases](/images/posts/sql-vs-nosql-which-one-to-choose/nosql.png)

### Ventajas NoSQL:
- Son mucho más flexibles que las bases de datos relacionales.
- Permiten una escalabilidad horizontal.
- Optimizadas para enormes cantidades de datos.

### Desventajas de NoSQL:
- Falta de estandarización.
- Pocas herramientas de uso y manejo.

## ¿Cuando usar una u otra?
- Si los datos que vas a almacenar deben tener una consistencia específica en cada campo: SQL.
- Cuando la estructura de los datos puede variar y no tienen una estructura concreta: NoSQL.
- Si los datos almacenados tienen relaciones con otros datos por medio de identificadores: SQL.
- Si los datos están aislados y no existen relaciones entre sí: NoSQL.
- Si el volumen de datos puede tener picos en los que aumenta bastante: NoSQL.
- Si el volumen de los datos tiene un crecimiento controlado: SQL.

## Conclusiones

Como pudimos ver, tanto las bases de datos relacionales como las no relacionales tienen sus propias características con sus respectivas ventajas y desventajas. Ambas bases de datos son recomendables de utilizar para almacenar tus datos, y con ambas puedes lograr metas muy similares si te lo propones. Sin embargo, es importante saber cual de ambas opciones de bases de datos nos va a convenir más dependiendo las necesidades que tengas y los requerimentos de tu aplicación.