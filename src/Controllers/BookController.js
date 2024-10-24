import prompt from "../utils/prompt.js";
import { createNewBook, getAllBooks, getBookById, removeBook, updateBook } from '../Repositories/BookRepository.js'

const createBook = () => {
    try {
        let title = prompt("Ingrese el título: ");
        let author = prompt("Ingrese el autor: ");
        let isbn = prompt("Ingrese el ISBN: ");
        let genre = prompt("Ingrese el género: ");
        let publicationDate = prompt("Ingrese la fecha de publicación: ");
        let status = prompt("Ingrese el estado (disponible/prestado): ");

        const book = createNewBook({
            title,
            author,
            isbn,
            genre,
            publicationDate,
            status
        });
        console.log("Libro creado exitosamente", book);
    } catch (error) {
        console.error("Error al crear el libro:", error.message);
    }
}

const deleteBook = () => {
    try {
        const bookId = prompt("Eliminar un Libro, ingrese el id: ");
        const result = removeBook(bookId);
        console.log("Libro eliminado", result);
    } catch (error) {
        console.error("Error al eliminar el libro:", error.message);
    }
}

const viewBooks = () => {
    try {
        const books = getAllBooks();
        console.table(books);
    } catch (error) {
        console.error("Error al obtener los libros:", error.message);
    }
}

const editBook = () => {
    try {
        let bookId = prompt("Ingrese el id del libro a editar: ");
        let title = prompt("Ingrese el título: ");
        let author = prompt("Ingrese el autor: ");
        let isbn = prompt("Ingrese el ISBN: ");
        let genre = prompt("Ingrese el género: ");
        let publicationDate = prompt("Ingrese la fecha de publicación: ");
        let status = prompt("Ingrese el estado (disponible/prestado): ");

        const updatedBook = updateBook({
            bookId,
            title,
            author,
            isbn,
            genre,
            publicationDate,
            status
        });

        console.log("Libro editado", updatedBook);
    } catch (error) {
        console.error("Error al editar el libro:", error.message);
    }
}

const viewOneBook = () => {
    try {
        const searchId = prompt("Buscar id: ");
        const book = getBookById(searchId);
        console.log("Libro encontrado:", book);
    } catch (error) {
        console.error("Error al buscar el libro:", error.message);
    }
}

export { createBook, deleteBook, viewBooks, editBook, viewOneBook }
