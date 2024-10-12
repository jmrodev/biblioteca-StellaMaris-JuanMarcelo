import prompt from "../prompt.js";
import mainMenu from "./MainMenu.js";
// import { createLoan, readLoan, updateLoan, deleteLoan } from "../../controllers/LoanController.js";

const loansMenu = () => {
    console.clear()
    const option = Number(prompt("Seleccione una opción: \n 1. Crear un préstamo \n 2. Leer un préstamo \n 3. Editar un préstamo \n 4. Eliminar un préstamo \n 5. Volver al menú principal \n\n\n "));
    switch (option) {
        case 1: 
            createLoan();
            break;
        case 2: 
            readLoan();
            break;
        case 3: 
            updateLoan();
            break;
        case 4: 
            deleteLoan();
            break;
        case 5: 
            mainMenu();
            break;
        default:
            console.log("Opción inválida, por favor ingrese otra opción");
            loansMenu();
            break;
    }
}

export default loansMenu;
