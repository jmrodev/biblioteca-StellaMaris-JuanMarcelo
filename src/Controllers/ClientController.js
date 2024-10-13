import prompt from "../utils/prompt.js";
import { newClient } from '../Repositories/ClientRepository.js'
import PromptSync from "prompt-sync";

let pause = PromptSync() 

export const createClient = () => {
    let username = prompt("Ingrese el nombre")
    let email = prompt("Ingrese email")
    let telefono = prompt("Ingrese el telefono")
    let direccion = prompt("Ingrese la direccion")


    const Client = newClient({
        name: username,
        email: email,
        telefono: telefono,
        direccion: direccion,
    })
    console.log("Cliente creado exitosamente", Client)
    pause("Presionar  una tecla para continuar")
}