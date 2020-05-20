# Diseño de los lenguajes de programación

> Un lenguaje de programación se entiende como una herramienta para describir computaciones.

El reto de un lenguaje es lograr la potencia, expresividad y comprensión que requiere la legibilidad del programador conservando la precisión y simplicidad necesarias para su traducción al lenguaje máquina.

La legibilidad de los programadores es parcialmente proporcional a las capacidades de abstracción del lenguaje, como son la **abstracción de datos y del control**. Por lo tanto, el objetivo principal de la abstracción en el diseño de los lenguajes es el control de la **complejidad**.

## Eficiencia

Este principio se refiere a que el diseño debe permitir al traductor la **generación de código ejecutable eficiente**, también conocido como **optimizabilidad**.

La eficiencia se organiza en tres principios:

- **De traducción**: estipula que el diseño del lenguaje debe permitir el desarrollo de un traductor eficiente y de tamaño razonable.
- **De implementación**: es la eficiencia con que se puede escribir un traductor, que a su vez depende de la complejidad del lenguaje.
- **De programación**: está relacionada con la rapidez y la facilidad para escribir programas o capacidad expresiva del lenguaje.

## Regularidad

- Es un principio, se refiere al comportamiento de las características del lenguaje.
- Se subdivide en:
  - Generalidad
  - Ortogonalidad.
  - Uniformidad.
- Si se viola una de ellas, el lenguaje ya se puede clasificar como **irregular**.
- Las irregularidades suceden por causa de prioridades de diseño (ej: C++ ser compatible con C).
- Si la irregularidad no puede justificarse entonces es probablemente un error de diseño.

## Generalidad

- se consigue cuando el uso y la disponibilidad de los constructores no están sujetas a casos especiales y cuando el lenguaje incluye solo a los constructores necesarios y el resto se obtienen por combinaciones de constructores relacionados.

## Ortogonalidad (o independencia)

- Ocurre cuando los constructores del lenguaje pueden admitir combinaciones significativas y en ellas, la interacción entre los constructores o con el contexto, no provocan restricciones ni comportamientos inesperados.

## Uniformidad

- Se refiere a que lo similar se ve similar y lo diferente, diferente lo que implica la consistencia entre la apariencia y el comportamiento de los constructores.
