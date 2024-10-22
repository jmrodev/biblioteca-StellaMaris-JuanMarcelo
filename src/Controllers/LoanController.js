import prompt from "../utils/prompt.js";
import { newLoan, getAllLoans, getLoanById, removeLoan, updateLoan } from '../Repositories/LoanRepository.js'

const createLoan = () => {
    try {
        let client_id = prompt("Ingrese el ID del cliente: ");
        let book_id = prompt("Ingrese el ID del libro: ");

        const loan = newLoan({
            client_id,
            book_id
        });
        console.log("Préstamo creado exitosamente", loan);
    } catch (error) {
        console.error("Error al crear el préstamo:", error.message);
    }
}

const deleteLoan = () => {
    try {
        const idLoan = prompt("Eliminar un Préstamo, ingrese el id: ");
        const result = removeLoan(idLoan);
        console.log("Préstamo eliminado", result);
    } catch (error) {
        console.error("Error al eliminar el préstamo:", error.message);
    }
}

const viewLoans = () => {
    try {
        const loans = getAllLoans();
        console.log("Lista de préstamos:", loans);
    } catch (error) {
        console.error("Error al obtener los préstamos:", error.message);
    }
}

const editLoan = () => {
    try {
        let idLoan = prompt("Ingrese el id del préstamo a editar: ");
        let client_id = prompt("Ingrese el nuevo ID del cliente: ");
        let book_id = prompt("Ingrese el nuevo ID del libro: ");
        let fecha_devolucion = prompt("Ingrese la nueva fecha de devolución (YYYY-MM-DD): ");
        let estado = prompt("Ingrese el nuevo estado (activo/devuelto): ");

        const dataLoan = updateLoan({
            idLoan,
            client_id,
            book_id,
            fecha_devolucion,
            estado
        });

        console.log("Préstamo editado", dataLoan);
    } catch (error) {
        console.error("Error al editar el préstamo:", error.message);
    }
}

const viewOneLoan = () => {
    try {
        const buscarId = prompt("Buscar id del préstamo: ");
        const loan = getLoanById(buscarId);
        console.log("Préstamo encontrado:", loan);
    } catch (error) {
        console.error("Error al buscar el préstamo:", error.message);
    }
}

export { createLoan, deleteLoan, viewLoans, editLoan, viewOneLoan }
