import prompt from "../prompt.js";
import mainMenu from "./MainMenu.js";
import { createBook, deleteBook, viewBooks, editBook, viewOneBook,listarBookbyStatus } from "../../Controllers/BookController.js";

const booksMenu = () => {
    console.clear();
    let option = prompt(
        "Seleccione una opción: \n 1.Crear un libro \n 2.Ver un libro \n 3.Editar un libro \n 4.Eliminar un libro \n 5.Ver lista de libros \n 6.Listar libros Disponibles por estado \n 7.Volver al menú principal \n\n\n "
    );

    switch (Number(option)) {
        case 1:
            createBook();
            break;
        case 2:
            viewOneBook();
            break;
        case 3:
            editBook();
            break;
        case 4:
            deleteBook();
            break;
        case 5:
            viewBooks();
            break;
        case 6:
            listarBookbyStatus();
            break;
        case 7:
            mainMenu();
            break;

        default:
            console.log("Opción inválida, por favor ingrese otra opción");
            break;

    }
    prompt("Presione Enter para continuar...");
    booksMenu();
}

export default booksMenu;
