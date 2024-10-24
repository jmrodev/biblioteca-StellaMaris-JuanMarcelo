import prompt from "../utils/prompt.js";
import { newBook, getAllBooks, getBookById, removeBook, updateBook } from '../Repositories/BookRepository.js'

const createBook = () => {
    try {
        let titulo = prompt("Ingrese el título: ");
        let autor = prompt("Ingrese el autor: ");
        let isbn = prompt("Ingrese el ISBN: ");
        let genero = prompt("Ingrese el género: ");
        let fecha_publicacion = prompt("Ingrese la fecha de publicación: ");
        let estado = prompt("Ingrese el estado (disponible/prestado): ");

        const book = newBook({
            titulo,
            autor,
            isbn,
            genero,
            fecha_publicacion,
            estado
        });
        console.log("Libro creado exitosamente", book);
    } catch (error) {
        console.error("Error al crear el libro:", error.message);
    }
}

const deleteBook = () => {
    try {
        const idBook = prompt("Eliminar un Libro, ingrese el id: ");
        const result = removeBook(idBook);
        console.log("Libro eliminado", result);
    } catch (error) {
        console.error("Error al eliminar el libro:", error.message);
    }
}

const viewBooks = () => {
    try {
        const books = getAllBooks();
        console.table( books);
    } catch (error) {
        console.error("Error al obtener los libros:", error.message);
    }
}

const editBook = () => {
    
    try {
        let idBook = prompt("Ingrese el id del libro a editar: ");
        let titulo = prompt("Ingrese el título: ");
        let autor = prompt("Ingrese el autor: ");
        let isbn = prompt("Ingrese el ISBN: ");
        let genero = prompt("Ingrese el género: ");
        let fecha_publicacion = prompt("Ingrese la fecha de publicación: ");
        let estado = prompt("Ingrese el estado (disponible/prestado): ");

        const dataBook = updateBook({
            idBook,
            titulo,
            autor,
            isbn,
            genero,
            fecha_publicacion,
            estado
        });

        console.log("Libro editado", dataBook);
    } catch (error) {
        console.error("Error al editar el libro:", error.message);
    }
}

const viewOneBook = () => {
    try {
        const buscarId = prompt("Buscar id: ");
        const book = getBookById(buscarId);
        console.log("Libro encontrado:", book);
    } catch (error) {
        console.error("Error al buscar el libro:", error.message);
    }
}

export { createBook, deleteBook, viewBooks, editBook, viewOneBook }
