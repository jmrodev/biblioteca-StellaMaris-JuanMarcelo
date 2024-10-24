import prompt from "../prompt.js";
import clientsMenu from './ClientsMenu.js';
import booksMenu from './BooksMenu.js';
import loansMenu from './LoansMenu.js';
import test from '../../Repositories/find.js';

const mainMenu = async () => {
    let option = 1
    
    while (option !== 0) {
        option = parseInt(
            prompt("Seleccione una opción: \n 1.Gestionar clientes \n 2.Gestionar libros \n 3.Gestionar préstamos \n 4.Prueba \n 0.Salir \n\n\n"
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
            case 4:
                try {
                    const result = await test();
                    console.log('Resultado de la prueba:', result);
                } catch (error) {
                    console.error('Error en la prueba:', error);
                }
                break;
            default:
                if (option !== 0) {
                    console.log("Opción inválida, por favor ingrese otra opción");
                } else {
                    console.log("Adiós");
                }
                break;
        }
    }
}

export default mainMenu;
