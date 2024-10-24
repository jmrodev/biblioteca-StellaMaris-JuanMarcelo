import prompt from "../utils/prompt.js";
import { createNewLoan, getAllLoans, getLoanById, removeLoan, updateLoan } from '../Repositories/LoanRepository.js'
import { viewClients } from "./ClientController.js";
import { viewBooks } from "./BookController.js";

const createLoan = () => {
    try {
        viewClients()
        viewBooks()

        let clientId = prompt("Ingrese el ID del cliente: ");
        let bookId = prompt("Ingrese el ID del libro: ");

        const loan = createNewLoan({
            clientId,
            bookId
        });
        console.log("Préstamo creado exitosamente", loan);
    } catch (error) {
        console.error("Error al crear el préstamo:", error.message);
    }
}

const deleteLoan = () => {
    try {
        const loanId = prompt("Eliminar un Préstamo, ingrese el id: ");
        const result = removeLoan(loanId);
        console.log("Préstamo eliminado", result);
    } catch (error) {
        console.error("Error al eliminar el préstamo:", error.message);
    }
}

const viewLoans = () => {
    try {
        const loans = getAllLoans();
        console.table(loans);
    } catch (error) {
        console.error("Error al obtener los préstamos:", error.message);
    }
}

const editLoan = () => {
    try {
        let loanId = prompt("Ingrese el id del préstamo a editar: ");
        let clientId = prompt("Ingrese el nuevo ID del cliente: ");
        let bookId = prompt("Ingrese el nuevo ID del libro: ");
        let returnDate = prompt("Ingrese la nueva fecha de devolución (YYYY-MM-DD): ");
        let status = prompt("Ingrese el nuevo estado (activo/devuelto): ");

        const updatedLoan = updateLoan({
            loanId,
            clientId,
            bookId,
            returnDate,
            status
        });

        console.log("Préstamo editado", updatedLoan);
    } catch (error) {
        console.error("Error al editar el préstamo:", error.message);
    }
}

const viewOneLoan = () => {
    console.table(getAllLoans())
    try {
        const searchId = prompt("Buscar id del préstamo: ");
        const loan = getLoanById(searchId);
        console.table(loan);
    } catch (error) {
        console.error("Error al buscar el préstamo:", error.message);
    }
}

export { createLoan, deleteLoan, viewLoans, editLoan, viewOneLoan }
