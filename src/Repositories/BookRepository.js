import Book from '../Models/BookSchema.js'
import {  } from "module";

const createNewBook = (bookData) => {
    if (!bookData.title || !bookData.author || !bookData.isbn || !bookData.genre || !bookData.publicationDate) {
        throw new Error("Todos los campos son obligatorios");
    }

    const newBook = Book.create({
        _id: Math.floor(Math.random() * 100000),
        title: bookData.title,
        author: bookData.author,
        isbn: bookData.isbn,
        genre: bookData.genre,
        publicationDate: bookData.publicationDate,
        status: bookData.status || "available"
    });

    return newBook.save();
}

const removeBook = (id) => {
    const deletedBook = Book.remove({ _id: parseInt(id) });
    return deletedBook;
}

const getAllBooks = () => {
    return Book.find({});
}

const getBookById = (id) => {
    return Book.findOne({ _id: parseInt(id) });
}

const updateBook = (bookData) => {
    const book = Book.findOne({ _id: parseInt(bookData.bookId) });

    if (!book) {
        throw new Error("Libro no encontrado");
    }

    book.title = bookData.title;
    book.author = bookData.author;
    book.isbn = bookData.isbn;
    book.genre = bookData.genre;
    book.publicationDate = bookData.publicationDate;
    book.status = bookData.status;

    return book.save();
}
const findStatus =(status)=>{
   const findStatus= listarStatus().find({
        "status":status
    })
    return findStatus
}

export { createNewBook, removeBook, getAllBooks, updateBook, getBookById , findStatus}
