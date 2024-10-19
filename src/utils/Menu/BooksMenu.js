import prompt from "../prompt.js";
import mainMenu from "./MainMenu.js";
import { createBook } from "../../Controllers/BookController.js";

const booksMenu = () => {
    //console.clear()
    const option = Number(prompt("Seleccione una opción: \n 1. Crear un libro \n 2. Leer un libro \n 3. Editar un libro \n 4. Eliminar un libro \n 5. Volver al menú principal \n\n\n "));
    switch (option) {
        case 1: 
            createBook();
            break;
        case 2: 
            readBook();
            break;
        case 3: 
            updateBook();
            break;
        case 4: 
            deleteBook();
            break;
        case 5: 
            mainMenu();
            break;
        default:
            console.log("Opción inválida, por favor ingrese otra opción");
            break;
    }
}

export default booksMenu;
