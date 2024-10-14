import prompt from "../utils/prompt.js";
import { newBook } from '../Repositories/BookRepository.js'
import PromptSync from 'prompt-sync';

let pause = PromptSync()

export const createBook = () => {
    let title = prompt("Ingrese el titulo")
    let author = prompt("Ingrese Autor")
    let genre = prompt("Ingrese  genero")
    let price = prompt("Ingrese el precio")
    let year = prompt("Ingrese año del libro")

    const Book = newBook({
        title: title,
        author: author,
        genre: genre,
        price: price,
        year: year,

    })
    console.log("Libro creado exitosamente", Book)
    pause("Presione una tecla para continuar")
}
