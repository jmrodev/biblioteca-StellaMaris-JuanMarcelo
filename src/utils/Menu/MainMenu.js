import prompt from "../prompt.js";
import clientsMenu from './ClientsMenu.js';
import booksMenu from './BooksMenu.js';
import loansMenu from './LoansMenu.js';

const mainMenu = () => {
    console.clear()
    let option = prompt(
        "Select an option: \n 1.manage clients \n 2.mananage books \n 3.manage loans \n\n\n")
    switch (option) {
        case 1:
            clientsMenu();
            break;
        case 2:
            booksMenu();
            break;
        case 3:
            loansMenu();
            break;
        default:
            console.clear();
            console.log("Opción inválida, por favor ingrese otra opción");
            mainMenu();
            break;
    }
}

export default mainMenu;
