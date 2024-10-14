import prompt from "../utils/prompt.js";
import { newLoan } from '../Repositories/LoanRepository.js'
import PromptSync from "prompt-sync";

let pause = PromptSync() 

export const createLoan= () => {
    let book_name = prompt("Ingrese el nombre del libro")
    let client_name = prompt("Ingrese el nombre del cliente")
    let date_loan = prompt("Ingrese fecha prestamo (YYYY-MM-DD)")
    let date_return = prompt("Ingrese fecha devolucion (YYYY-MM-DD)")


    const Loan = newLoan({
        book_name: book_name,
        client_name: client_name,
        date_loan: date_loan,
        date_return: date_return,
    })
    console.log("Registro creado exitosamente", Loan)
    pause("Presionar  una tecla para continuar")
}