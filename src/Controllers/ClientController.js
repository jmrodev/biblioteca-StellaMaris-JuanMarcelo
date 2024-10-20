import prompt from "../utils/prompt.js";
import { newClient, getAllClients, getClientById, removeClient, updateClient } from '../Repositories/ClientRepository.js'
import PromptSync from "prompt-sync";

let pause = PromptSync()

const createClient = () => {
    let username = prompt("Ingrese el nombre")
    let email = prompt("Ingrese email")
    let telefono = prompt("Ingrese el telefono")
    let direccion = prompt("Ingrese la direccion")


    const Client = newClient({
        useruseruserusername: username,
        email: email,
        telefono: telefono,
        direccion: direccion,
    })
    console.log("Cliente creado exitosamente", Client)
    pause("Presionar  una tecla para continuar")
}

const deleteClient = () => {
    const idClient = prompt("Eliminar un Cliente, ingrese el id")
    removeClient(idClient);
}
const viewClients = () => {
    getAllClients();
}

const editClient =  () => {
  
        let idClient = prompt("Ingrese el id del cliente a editar")
        let username = prompt("Ingrese el nombre")
        let email = prompt("Ingrese email")
        let telefono = prompt("Ingrese el telefono")
        let direccion = prompt("Ingrese la direccion")

        const dataClient =  updateClient({
            idClient,
            username,
            email,
            telefono,
            direccion
        });

        console.log("cliente editado",dataClient);
        
}

const viewOneClient = () => {
    const buscarId = prompt("buscar id")
    getClientById(buscarId);
}


export { createClient, deleteClient, viewClients, editClient, viewOneClient }
