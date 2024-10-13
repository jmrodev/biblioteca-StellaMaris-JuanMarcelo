import BookSchema from '../Models/BookSchema.js'
import { format } from '@formkit/tempo'
import PromptSync from 'prompt-sync'

let prompt = PromptSync()

const newBook = (dataBook) => {
    console.log(dataBook);
    if (!dataBook.title || !dataBook.author || !dataBook.genre || !dataBook.price || !dataBook.year) {
        console.log("Todos los campos son obligatorios");
        prompt("Presione una tecla para continuar")
    }
    const newBook = BookSchema.create({
        _id: Math.floor(Math.random() * 100000), // Usa timestamp como ID único
        title: dataBook.title,
        author: dataBook.author,
        genre: dataBook.genre,
        price: dataBook.price,
        year: dataBook.year,
        fecha_registro: format(new Date(), "full")
    });
    return newBook.save();
}


export { newBook }