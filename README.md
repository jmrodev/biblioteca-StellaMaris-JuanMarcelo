# biblioteca-StellaMaris-JuanMarcelo

[English version](#english-version)

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

---

# English version

## TECDA First Year Programming Assignment - Lucas Salvatori
### Integrative Assignment - October 2024

## Library Book Loan System

This project is a console application that manages book loans for a library. The system allows loading, editing, and deleting information about books, clients, and loans, which are interrelated.

### Main Features:

1. Book Management:
   - Add new books with properties such as title, author, genre, ISBN, publication date, and status.
   - Edit existing book information.
   - Remove books from the system.
   - View list of all books and search for specific books.

2. Client Management:
   - Register new clients with information such as name, email, phone, and address.
   - Edit existing client information.
   - Remove clients from the system.
   - View list of all clients and search for specific clients.

3. Loan Management:
   - Create new loans by linking clients with books.
   - Record loan start and return dates.
   - Edit existing loan information.
   - Remove loans from the system.
   - View list of all loans and search for specific loans.

4. Additional Features:
   - Calculate how many books a client has borrowed.
   - Check which books are available for loan.

### Project Structure:

- `src/Controllers/`: Contains business logic for books, clients, and loans.
- `src/Repositories/`: Handles data operations for each entity.
- `src/Models/`: Defines data schemas for books, clients, and loans.
- `src/utils/Menu/`: Contains files for the console user interface.
- `databases/`: Stores JSON files that act as a local database.

### Technologies Used:

- JavaScript (Node.js)
- db-local: For local data storage
- prompt-sync: For handling user input in console
- @formkit/tempo: For date formatting

### Usage Instructions:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the program with `npm start`.
4. Follow the console instructions to navigate the system.

---

## Assignment Information

1. The program allows loading, editing, and deleting information of different interrelated elements.
2. The work can be done in groups with a maximum of 3 members.
3. The code must be developed in a GitHub repository with commits from all members.
4. Submission date: Friday, October 25th.
5. Project defense will take place between October 29th and 31st.
6. During the defense, the work must be explained and a proposed improvement must be implemented.
7. A grade of 7 or higher promotes the subject.

For the development of the program, the code has been properly modularized using functions and declaring variables locally when possible. Appropriate data structures have been used to ensure program scalability, and functionalities have been grouped into different JavaScript files, importing them as needed.

---

Developed by Stella Maris Ibarra and Juan Marcelo Rodriguez
