# biblioteca-StellaMaris-JuanMarcelo

## TP Programación Primer Año TECDA - Lucas Salvatori
### TP Integrador - Octubre 2024

## Sistema de Préstamos de Libros

Este proyecto es una aplicación de consola que gestiona préstamos de libros de una librería. El sistema permite cargar, editar y eliminar información de libros, clientes y préstamos, los cuales están relacionados entre sí.

### Funcionalidades principales:

1. Gestión de Libros:
   - Cargar nuevos libros con propiedades como título, autor, género, ISBN, fecha de publicación y estado.
   - Editar información de libros existentes.
   - Eliminar libros del sistema.
   - Ver lista de todos los libros y buscar libros específicos.

2. Gestión de Clientes:
   - Registrar nuevos clientes con información como nombre, email, teléfono y dirección.
   - Editar información de clientes existentes.
   - Eliminar clientes del sistema.
   - Ver lista de todos los clientes y buscar clientes específicos.

3. Gestión de Préstamos:
   - Crear nuevos préstamos vinculando clientes con libros.
   - Registrar fechas de inicio y devolución de préstamos.
   - Editar información de préstamos existentes.
   - Eliminar préstamos del sistema.
   - Ver lista de todos los préstamos y buscar préstamos específicos.

4. Funcionalidades adicionales:
   - Calcular cuántos libros ha tomado prestado un cliente.
   - Verificar qué libros están disponibles para préstamo.

### Estructura del Proyecto:

- `src/Controllers/`: Contiene la lógica de negocio para libros, clientes y préstamos.
- `src/Repositories/`: Maneja las operaciones de datos para cada entidad.
- `src/Models/`: Define los esquemas de datos para libros, clientes y préstamos.
- `src/utils/Menu/`: Contiene los archivos para la interfaz de usuario en consola.
- `databases/`: Almacena los archivos JSON que actúan como base de datos local.

### Tecnologías Utilizadas:

- JavaScript (Node.js)
- db-local: Para almacenamiento local de datos
- prompt-sync: Para manejo de entrada de usuario en consola
- @formkit/tempo: Para formateo de fechas

### Instrucciones de Uso:

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Ejecuta el programa con `npm start`.
4. Sigue las instrucciones en consola para navegar por el sistema.

---

## Información del TP

1. El programa permite cargar, editar y eliminar información de diferentes elementos relacionados entre sí.
2. El trabajo puede ser realizado en grupo con un máximo de 3 integrantes.
3. El código debe ser realizado en un repositorio GitHub con commits de todos los integrantes.
4. Fecha de entrega: viernes 25 de octubre.
5. La defensa de los trabajos se realizará entre los días 29 y 31 de octubre.
6. Durante la defensa, se deberá explicar lo realizado y realizar una mejora propuesta.
7. Una nota de 7 o más promociona la materia.

Para la realización del programa, se ha modularizado correctamente el código utilizando funciones y declarando las variables de forma local cuando es posible. Se han utilizado estructuras de datos adecuadas para garantizar la escalabilidad del programa, y las funcionalidades se han agrupado en diferentes archivos JavaScript, importándolas según sea necesario.

---

Desarrollado por Stella Maris Ibarra y Juan Marcelo Rodriguez
