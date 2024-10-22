import Book from '../Models/BookSchema.js'

const newBook = (dataBook) => {
    if (!dataBook.titulo || !dataBook.autor || !dataBook.isbn || !dataBook.genero || !dataBook.fecha_publicacion) {
        throw new Error("Todos los campos son obligatorios");
    }

    const newBook = Book.create({
        _id: Math.floor(Math.random() * 100000),
        titulo: dataBook.titulo,
        autor: dataBook.autor,
        isbn: dataBook.isbn,
        genero: dataBook.genero,
        fecha_publicacion: dataBook.fecha_publicacion,
        estado: dataBook.estado || "disponible"
    });

    return newBook;
}

const removeBook = (id) => {
    const deleteBook = Book.remove({ _id: parseInt(id) });
    return deleteBook;
}

const getAllBooks = () => {
    return Book.find({});
}

const getBookById = (id) => {
    return Book.findOne({ _id: parseInt(id) });
}

const updateBook = (dataBook) => {
    const book = Book.findOne({ _id: parseInt(dataBook.idBook) });

    if (!book) {
        throw new Error("Libro no encontrado");
    }

    book.titulo = dataBook.titulo;
    book.autor = dataBook.autor;
    book.isbn = dataBook.isbn;
    book.genero = dataBook.genero;
    book.fecha_publicacion = dataBook.fecha_publicacion;
    book.estado = dataBook.estado;

    return book.save();
}

export { newBook, removeBook, getAllBooks, updateBook, getBookById }
