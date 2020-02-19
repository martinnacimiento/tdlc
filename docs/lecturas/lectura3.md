---
prev: ./lectura2
next: false
---
# Descripción de los lenguajes de programación

Los lenguajes deben describirse de manera formal, completa y precisa. Además esta descripción ha de ser independiente de la máquina y de la implementación. Para ello se utilizan estándares aceptados universales, ya que de esta formalización depende tanto el diseño del lenguaje como la precisión del comportamiento del programa escrito por los programadores. Sin embargo no todos los niveles de descripción de un lenguaje disponen de un estándar.

Los elementos fundamentales para la definición de un lenguaje son los siguientes:

- El **léxico** o conjunto de las "palabras" o unidades léxicas que son las cadenas de caracteres significativas del lenguaje, también denominados **tokens**.
  
  También son unidades léxicas los **identificadores**, los símbolos especiales de **operadores**, como "+" o "<=" y los **símbolos de puntuación** como el punto y coma o el punto. 

  Por ejemplo, una sentencia condicional en C tendría como tokens las cadenas *if* y *else*.

- La **sintaxis** o estructura conlleva la descripción de los diferentes componentes del lenguajey de sus combinaciones posibles. Para ello se utilizan las **gramáticas libres de contexto**, un estándar aceptado universalmente. Por ejemplo la sentencia *if* en el lenguaje C se define por:

  ``` C
  <sentencia if> ::= if (<expresion>) <sentencia> [else <sentencia>]
  ```

- La **semántica** expresa los efectos de la ejecución en un contexto determinado. A veces esta definición interactúa con los significados de otros elementos del lenguaje, y por ello, la semántica es la parte mas difícil en la definición de un lenguaje. Siguiendo el ejemplo del *if* del lenguaje C, y según Kernighan y Richie: 
 
  > Una sentencia *if* es ejecutada, primero, evaluando su expresión, que debe ser de tipo aritmético o apuntador (incluyendo todos sus efectos colaterales), y si el resultado de la comparación de la expresión es cierta, entonces se ejecuta la sentencia que siga a la expresión. Si existe una parte *else* y el resultado de la expresión no es cierto, entonces se ejecuta la sentencia que sigue al *else*.

  Además es necesario comprobar la *seguridad* de las sentencias. En el ejemplo del *if*, ¿qué ocurre si la expresión no se evalúa correctamente a cierto o false, porque haya un error de división por cero? La alternativa a esta definición *incompleta* es el uso de un método formal para describir la semántica. Pero en la bibliografía no existe uno aceptado, por lo que es un poco habitual encontrarse con definiciones formales de la semántica de un lenguaje, aunque existen algunos formalismos que construyen el significado de las construcciones del lenguaje.

  Entre los sistemas de notación para definiciones semánticas formales se encuentran:
   - La **semántica operacional** donde el significado de una construcción es una descripción de su ejecución en una máquina hipotética.
   - La **denotacional** que asigna objetos matemáticos a cada componente del lenguaje para que modele su significado.
   - La **axiomática** que modela el significado con un conjunto de axiomas que describen a sus componentes junto con algún tipo de inferencia del significado.

## Traducción de los programas para su ejecución

Para la ejecución de los programas escritos en un lenguaje de programación, es necesario disponer de un traductor, un programa que acepta como entrada los programas del lenguaje y los ejecuta o transforma en una forma adecuada para su ejecución (lenguaje máquina). En el primer caso al traductor se lo denomina **intérprete** y en el segundo **compilador**.

- **Intérprete**: la ejecución de un programa se realiza en un paso, con los datos necesarios y el programa como entrada, el intérprete produce la ejecución del programa sobre esos datos.
- **Compilador**: es un proceso de 2 pasos, el programa original o **código fuente** de la entrada se convierte en un nuevo programa o **código objeto**, que es el que puede ser ejecutado (si ya está en lenguaje máquina) sobre los datos que se desee.

En general, el lenguaje del código objeto debe ser a su vez traducido por un **ensamblador** en un nuevo código objeto, que será **linkado** (o unido) con otros códigos objeto, cargado en localizaciones de memoria adecuadas y finalmente ejecutado. Incluso en ocasiones el lenguaje objetivo es a su vez otro lenguaje de programación, con lo que el proceso es mas complejo, aunque similar. Otro caso posible es aquel en el que un **pseudo-intérprete** no produce un programa objetivo, sino que traduce el programa fuente aun lenguaje intermedio que posteriormente es interpretado (por ejemplo Perl).

También en general, se desea que el traductor siga exactamente a la definición del lenguaje, aunque el programador tiene que estar al tanto de las características tanto del lenguaje como del traductor. En ocasiones un lenguaje está definido por el comportamiento de su intérprete o compilador en particular, denominado **traductor definicional**, aunque sea una mala práctica.

Las fases que tanto un intérprete como un compilador deben llevar a cabo son:

1. Primero, un **analizador léxico** debe identificar los tokens del programa (palabras clave, constantes, identificadores, etc.), ya que inicialmente el programa se entiende como una secuencia de caracteres. En ocasiones, hay un procesamiento previo, para transformar el programa en una entrada correcta del analizador léxico.
2. A continuación, un **analizador sintáctico** o gramatical identifica las estructuras correctas que definen las secuencias de tokens.
3. Finalmente, un **analizador semántico** asigna el significado de forma suficiente para su ejecución o la obtención del programa objetivo.