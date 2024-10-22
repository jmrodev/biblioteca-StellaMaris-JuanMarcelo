import prompt from "../prompt.js";
import mainMenu from "./MainMenu.js";
import { createLoan, deleteLoan, viewLoans, editLoan, viewOneLoan } from "../../Controllers/LoanController.js";

const loansMenu = () => {
    console.clear();
    let option = prompt(
        "Seleccione una opción: \n 1.Crear un préstamo \n 2.Ver un préstamo \n 3.Editar un préstamo \n 4.Eliminar un préstamo \n 5.Ver lista de préstamos \n 6.Volver al menú principal \n\n\n "
    );
    
    switch (Number(option)) {
        case 1: 
            createLoan();
            break;
        case 2: 
            viewOneLoan();
            break;
        case 3: 
            editLoan();
            break;
        case 4: 
            deleteLoan();
            break;
        case 5: 
            viewLoans();
            break;
        case 6:
            mainMenu();
            break;
        default:
            console.log("Opción inválida, por favor ingrese otra opción");
            break;
    }
    prompt("Presione Enter para continuar...");
    loansMenu();
}

export default loansMenu;
