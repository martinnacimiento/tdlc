---
prev: ./
next: ./lectura2
---
# Paradigmas de la computación
Con lo que el estudio de los paradigmas de los lenguajes de programación es tan importante para el programador, como lo es dominar 5 lenguajes concretos, ya que este conocimiento va a permitir saber qué lenguaje es el más adecuado para cada tipo de escenario y cada problema a resolver.

Antes de la década de los 40 (siglo XX) se programaba **cableando**, y es dicha década cuando Von Neumann plantea el uso de **códigos** (0s y 1s) para determinar las acciones de los ordenadores, evitando el uso de **cables**. A continuación se asignaron **símbolos** a los códigos de las instrucciones y a las localizaciones de memoria, naciendo el **lenguaje ensamblador**. 

Pero el lenguaje ensamblador, de **bajo nivel de abstracción**, dependía de cada ordenador y era difícil de entender. Entonces se fueron añadiendo al lenguaje construcciones con mayor nivel abstracción como la **asignación**, los **bucles** (también llamados ciclos) o las **sentencias condicionales** y opciones, que ya son instrucciones independientes del ordenador, mas concisas y fáciles de comprender. Pero al principio los lenguajes seguían reflejando la arquitectura Von Newman: un área de memoria donde se almacenaban tanto a los programas como a los datos de los mismos, y por separado había una unidad de procesamiento que ejecutaba secuencialmente las instrucciones de la memoria. Los lenguajes estaban muy lejos de lo que ahora se entiende por un **lenguaje de programación de alto nivel**.

Los lenguajes modernos, aunque siguen conservando en esencia ese tipo de procesamiento, aumentan el nivel de abstracción y utilizan nuevas arquitecturas en paralelo, se hacen independientes de la máquina y solo describen el procesamiento en general, en lugar de detallar todas las instrucciones que debe ejecutar la unidad de procesamiento.

## Qué es un lenguaje de programación?
Un lenguaje de programación es un sistema notacional para describir computaciones en una forma legible tanto para el ordenador como para el programador.

A veces los lenguajes se diseñan con un propósito concreto (como SQL para el mantenimiento de una base de datos), pero los mas interesantes desde el punto de vista de paradigma, son los lenguajes de propósito general.

La evolución de los lenguajes de programación se ha organizado en cinco generaciones:

| Generación | Descripción                                                                                                                                                                                                                                                                                                                                                             |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1          | Se incluyen los **lenguajes máquina**, en los que los datos y las operaciones sobre ellos se describen mediante ceros y unos. Son códigos o notaciones muy difíciles de entender por los programadores y cada procesador tiene el suyo propio. Por ejemplo, el byte 01111000 le dice al procesador Z80 de Zilog que copie en el registro A el contenido del registro B. |
| 2          | Es la que incluye a los **lenguajes ensambladores**, cuya traducción a lenguaje máquina es muy sencilla, y aún hoy se utilizan para tareas muy específicas, como puede ser para programar d r i v e r s para dispositivos. Siguiendo con el ejemplo anterior, el byte 01111000 se representa mediante el nemotécnico "LD A, B'\ que es más sencillo de recordar 1.       |
| 3          | Es la que incluye a **los lenguajes de alto nivel** como Pascal, Fortran, C o Java. Se denominan de alto nivel porque están muy alejados de la máquina pero muy cercanos al los programadores. Para su traducción a lenguaje máquina se necesitan compiladores o intérpretes.                                                                                           |
| 4          | Agrupa a **lenguajes de propósito específico**, como SQL, Natural. o el del paquete estadístico SPSS que permite manipular grandes cantidades de datos con fines estadísticos.                                                                                                                                                                                          |
| 5          | Se incluyen lenguajes que se utilizan en el área de la IA, con los que se especifica mas qué problema hay que resolver que cómo se resuelve dicho problema con una secuencia de acciones. El primero que se incluye en este grupo es el lenguaje Prolog, aunque otros lenguajes funcionales como Haskell.                                                               |

## Abstracción de los lenguajes de programación
Se refiere a la:
- **Abstracción de datos**: que resume sus propiedades.
- **Abstracción del control**: que resume las propiedades de la transferencia de control.

A su vez las abstracciones se clasifican en básicas, estructuradas y unitarias.

### Abstracción de datos
- **Básica**: se refieren a la representación interna de los datos de tipo atómico 3 que ofrece el lenguaje, junto a sus operaciones estándar (como las aritméticas para los datos numéricos o las del Algebra de Boole para los valores booleanos). Otro tipo de abstracción básica es el uso de nombres simbólicos para referenciar las localizaciones de memoria que contienen los datos del programa. Esto se conoce con el nombre de variable. Las variables abstraen estas direcciones por medio de un nombre y un tipo de datos establecidos mediante una declaración, por ejemplo el siguiente código en Pascal:

  ``` pascal
  var x: integer;
  ```

- **Estructurada**: son el mecanismo de abstracción para colecciones de datos. Una estructura típica es el arrav (también llamado vector o, en una desafortunada traducción, arreglo) que reúne datos como una secuencia de elementos. Por ejemplo la declaración en C:
  ``` c
  int tabla[7];
  ```
  En muchos lenguajes se puede dar nombre también a los tipos de datos, mediante una definición de tipo como la siguiente en C:
  ``` c
  typedef int Mitabla[7];
  ```
  que define un nuevo tipo Mitabla que es un array de 7 enteros. A estos tipos se les denomina **tipos estructurados**.

- **Unitarias**: se refieren a la agrupación, como una **única unidad**, **de datos y operaciones sobre ellos**. Introducen el concepto de **encapsulado de datos** u ocultación de información, mecanismo muy útil para reunir códigos relacionados entre sí en localizaciones específicas dentro del programa, ya sea en forma de archivos por separado o como estructuras del lenguaje separadas dentro de un archivo. Estas abstracciones unitarias se asocian a menudo con los **tipos abstractos de datos**, separando las operaciones que se pueden realizar con los valores de dicho tipo de datos (lo que se conoce como interfaz) de su implementación interna.
Ejemplos son los **módulos** en Haskell (o ML) y los **paquetes** en Java (o Ada). Las **clases** de los lenguajes orientados a objetos son un mecanismo conceptualmente mas cercano a las abstracciones unitarias, pero también a las abstracciones estructuradas, ya que ofrecen un encapsulamiento de datos y tienen algunas características de los módulos o paquetes.
Dos de las características mas importantes de las abstracciones de datos unitarias son la capacidad de **reutilización** de la misma abstracción en programas diferentes, a través de bibliotecas y su **interoperabilidad** o facilidad de combinación de abstracciones al proporcionar convenciones estándar para sus interfaces.

### Abstracciones de control

- **Básica**: son sentencias individuales que permiten modificar (directa o indirectamente) el control del flujo de la ejecución de un programa. Como ejemplos de abstracciones de control básicas están la **sentencia de asignación**. 0 el goto de Fortran, que se encarga del proceso de cambiar la transferencia de control de una sentencia a otra parte dentro del programa. Actualmente las sentencias g o t o se consideran de muy baja abstracción y en los lenguajes modernos se encuentran solo de torma muy limitada, por su escasa Habilidad.
- **Estructurada**: agrupan sentencias más simples para crear una estructura con un propósito común que permite gobernar la ejecución del programa. Ejemplos típicos son los bucles o las sentencias condicionales, como *if* ,
la sentencia *case* de Pascal o el *switch* de C. Otro mecanismo muy útil para estructurar el control es el **subprograma**. Necesita una **declaración**, con un nombre y un conjunto de acciones a realizar que se abstraen bajo dicho nombre. Esta declaración es similar a la declaración de variable y de tipo. En segundo lugar es necesario que el subprograma sea llamado o invocado en el punto en que las acciones deben ejecutarse. Típicos ejemplos de subprogramas son los procedimientos de Pascal o los métodos de Java.
- **Unitaria**: permiten agrupar una colección de subprogramas como una unidad en sí misma e independiente del programa. De esta forma, aislando partes del programa cuyo funcionamiento no es necesario conocer en detalle, se mejora la comprensión del mismo. Esencialmente son idénticas a las abstracciones de datos unitarias (y generalmente se implementan con **módulos** y **paquetes** al igual que aquellas). Simplemente varía el enfoque, que en esta ocasión se orienta más a las operaciones que a los datos. No obstante mantienen las propiedades de las abstracciones de datos unitarias como la **reutilización** mediante la creación de bibliotecas.

Un grupo de abstracción de control **difícil de clasificar** en alguno de los niveles anteriores es los **mecanismos de programación en paralelo**, que los lenguajes modernos suelen incluir. Java por ejemplo, contiene los mecanismos de **hilos** (trayectorias de control ejecutadas por separado dentro del entorno Java). Ada contiene el mecanismo de **tarea** para lo mismo aunque se puede clasificar como una abstracción unitaria, mientras que los hilos y procesos de Java son clases y por lo tanto son abstracciones estructuradas.

| Abstracción | de Datos | de Control |
| :---------: | -------- | ---------- |
| Básica      | - tipos atómicos<br>- variables| - asignación<br>- goto | 
| Estructurada      | - tipos estructurados| - bucles<br>- condicionales<br>- subprogramas | 
| Unitaria      | - módulos <br> - paquetes | - módulos <br> - paquetes |

Finalmente, indicar que si un lenguaje de programación sólo necesita describir computaciones, entonces sólo necesita mecanismos suficientes para describir todos los cálculos que puede llevar a cabo una **máquina de Türing**, puesto que cualquier máquina de Turing puede ejecutar cualquier cálculo conocido en un ordenador. Un lenguaje de este tipo se conoce como **lenguaje completo en Türing**, debe incluir variables enteras y aritméticas, así como la ejecución de sentencias de forma secuencial, incluyendo sentencias de asignación, condicionales ( *if* ) y bucles (*while*).
