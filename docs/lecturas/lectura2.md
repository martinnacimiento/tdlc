---
prev: ./lectura1
next: ./lectura3
---

# Introducción a los paradigmas de computación
Al principio los lenguajes de programación se basaron en el **modelo de computación Von Neumann**, que propuso que el programa se almacenara en la máquina antes de ejecutarse y a su vez:
1. La ejecución secuencial de instrucciones.
2. El uso de variables para la representación de las posiciones de memoria.
3. El uso de la asignación para cambiar el valor de las variables.

Estos lenguajes se conocen como **imperativos**, porque sus instrucciones representan órdenes. También se les ha denominado **procedurales**, aunque no tengan nada que ver con el concepto de abstracción de procedimiento.

No es requisito que la **computación** sea una secuencia de instrucciones donde cada una opere sobre un dato (esto se conoce como **cuello de botella de Von Neumann**), sino que puede ser **paralela**, actuar sobre diferentes datos simultáneamente, o **no determinista** e independiente del orden. Por estas distintas formas de describir la computación se considera a los lenguajes imperativos un paradigma o patrón (**paradigma imperativo**).

Dos paradigmas diferentes al anterior, basados en abstracciones matemáticas, son el **funcional** que usa la noción de función según plantea en el **lambda cálculo**, y el **paradigma lógico** que se basa en la lógica simbólica. Permiten que tareas muy complejas se describan precisa y concisamente, facilitando la verificación de lo programas.

En algunas bibliografías se denomina **programación declarativa** al grupo formado por la  programación funcional y la lógica, por la gran diferencia con el resto de lenguajes. En estos, las propiedades se declaran y no se especifica la secuencia de ejecución.

Un cuarto paradigma es el de la **programación orientada objetos** (POO), que facilita la reutilización de programas y su ampliación, siendo más *natural* la elaboración de código que se quiere ejecutar. Sin embargo de alguna manera este paradigma es también imperativo pues se basa en una ejecución secuencial sobre un conjunto cambiante de posiciones de memoria. La diferencia es que los programas están formados por pequeñas piezas de código, cuyas interacciones están controladas y se cambian fácilmente. En la práctica este tipo de programación tiene dificultad en predecir con precisión el comportamiento y determinar la corrección de programas. Actualmente es un estándar ampliamente utilizado.

A modo de entender los paradigmas nombrados, vamos a calcular el máximo común divisor (MCD) en cada uno de ellos para ver sus similitudes y diferencias. Recuerda que los lenguajes de hoy en día se pueden clasificar en diferentes paradigmas.

## Programación Orientada a Objetos

Este paradigma se basa en la idea de que un objeto se puede describir como una colección de posiciones de memoria junto con todas las operaciones que pueden cambiar los valores de dichas posiciones. Los objetos se agrupan en clases que representan a todos los que tienen las mismas propiedades. Las clases se definen mediante declaraciones parecidas a las de los tipos estructurados en C o Pascal. Tras la declaración de una clase, se pueden crear objetos concretos a partir de la misma, mediante la instanciación de la clase.

Para implementar el ejercicio de MCD lo haremos en Java:

``` Java
public class IntWithGcd {
    
    public IntWithGcd(int val){ value = val; }
    
    private int value;

    public int intVal() {return value;}
    
    public int gcd (int v) {
        int dividendo = value;
        int divisor = v;
        while (divisor != 0) {
            int auxDivisor = divisor;
            int resto = dividendo % divisor;
            int cociente = dividendo/auxDivisor;
            System.out.println(dividendo + "/" + divisor + "=" + cociente + "  R: " + resto);
            divisor = resto;
            dividendo = auxDivisor;
        }
        return dividendo;
    }
}
```
En este ejemplo se define una nueva clase mediante:
1. Un constructor. Estos asignan memoria y aportan valores iniciales para los datos del objeto.
2. Un método de acceso a este valor (inVal).
3. El método gcd.
4. El entero *value*.

``` Java
public class Main {
    public static void main(String args[]) {
        System.out.println("Máximo común divisor entre 8 y 18!");
        IntWithGcd x;
        x = new IntWithGcd(8);
        int y = x.gcd(18);
        System.out.println("El resultado es: " + y);
    }
}
```
La clase IntWithGcd se utiliza definiendo un nombre de variablepara contener un objeto de la clase: IntWithGcd x;
Al principio la variable x no contiene la referencia a un objeto, por lo que hay que instanciarla con la sentencia:
``` Java
x = new IntWithGcd (8);
```
A continuación se llama al método gcd mediante:
``` Java
int y = x.gcd(18);
```
Y tras la ejecución de esta sentencia, la variable y contendrá el valor 2, que es el máximo común divisor de 18 y 8.

## Programación funcional

La computación en el paradigma funcional se fundamenta en la evaluación de funciones o en la aplicación de funciones a valores conocidos, por lo que también se denominan lenguajes aplicativos. El mecanismo básico es la evaluación de funciones, con las siguientes características:
- La transferencia de valores como parámetros de las funciones que se evalúan.
- La generación de resultados en forma de valores devueltos por las funciones.

Este proceso no involucra de ningún modo a la asignación de una variable a una posición de memoria, aspecto que le aleja de la programación orientada a objetos. Tampoco las operaciones repetitivas se presentan por ciclos (que requieren de **variables de control** para su terminación), sino mediante las **funciones recursivas**, un mecanismo muy potente.

Que un lenguaje de programación prescinda de las variables y ciclos, ofrece ventajas relacionadas con la verificación de lo programas. Volviendo al ejemplo de MCD haremos dicha función en Haskell:
``` Haskell
gcd u v
    | v == 0 -> u
    | otherwise -> gcd v (mod u v)
```
- En la primer línea se define la cabecera de la función *gcd* y sus dos **parámetros formales** *u* y *v*.
- En la segunda se comprueba si *v* es igual a 0, en cuyo caso devuelve el valor de *u*.
- En la tercera se establece la recursión, llamando a *gcd* nuevamente con los parámetros *v* y el resto de dividir *u* entre *v*.

## Programación lógica

En un lenguaje de programación lógica, un programa está formado por un conjunto de sentencias que describen lo que es *verdad* o *conocido* con respecto a un problema, en vez de indicar la secuencia de pasos que llevan al resultado. No necesita de abstracciones de control condicionales ni de ciclos ya que el control lo aporta el modelo de inferencia lógica que subyace.

La definición de MCD es la siguiente:
- El *gcd* de *u* y *v* es *u* si *v* es 0.
- El *gcd* de *u* y *v* es el *gcd* de *v* y de *u mod v*, si *v* no es 0.

Y esto puede programarse en Prolog, con el predicado (que podrá ser verdad o falso) gcd(U,V,X), que se entiende como "es verdad que el gcd de U y V es X":
``` Prolog
gcd(U, 0, U) .
gcd(U, V, U) :- not (V = 0),
                Y is U mod V,
                gcd(V, Y, X) .
```
Así, para calcular el MCD entre 18 y 8, se deberá escribir la consulta PROLOG:
``` Prolog
?- gcd(18, 8, X) .
```
que busca un valor que, asignado a X, haga cierta esa pregunta.

En Prolog un programa es un conjunto de sentencias, denominadas **cláusulas** de la forma: a :- b,c,d. que es una afirmación que se entiende como "*a* es cierto, o resoluble, si *b*, a continuación *c* y finalmente *d* son ciertos o resolubles en este orden". A diferencia de las funciones de la programación funcional, Prolog requiere de variables para representar los valores de las funciones, aunque no representan posiciones de memoria. En Prolog las variables se distinguen sintácticamente de otros elementos del lenguaje (por ejemplo, empezando por mayúsculas).