import prompt from "../prompt.js";
import clientsMenu from './ClientsMenu.js';
import booksMenu from './BooksMenu.js';
import loansMenu from './LoansMenu.js';
import test from '../../Repositories/find.js';

const mainMenu = async () => {
    let option = 1
    
    while (option !== 0) {
        // console.clear()
        option = parseInt(
            prompt("Select an option: \n 1.manage clients \n 2.manage books \n 3.manage loans \n 4.Test \n 0.Exit \n\n\n"
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
                    console.log('Test result:', result);
                } catch (error) {
                    console.error('Error in test:', error);
                }
                break;
            default:
                if (option !== 0) {
                    console.log("Invalid option, please enter another option");
                } 
                console.log("Goodbye");
                break;
        }
    }
}

export default mainMenu;
