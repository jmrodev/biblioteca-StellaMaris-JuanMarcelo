import prompt from "../prompt.js";
import clientsMenu from './ClientsMenu.js';
import booksMenu from './BooksMenu.js';
import loansMenu from './LoansMenu.js';

const mainMenu = () => {
    let option = 1
    
    while (option !== 0) {
        console.clear()
        option = parseInt(
            prompt("Select an option: \n 1.manage clients \n 2.mananage books \n 3.manage loans \n 0.Salir \n\n\n"
            ))
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
                if (option !== 0) {
                    console.log("Opción inválida, por favor ingrese otra opción");
                } else {
                    console.log("Hasta pronto");
                }

                break;
        }
    }
}

export default mainMenu;
