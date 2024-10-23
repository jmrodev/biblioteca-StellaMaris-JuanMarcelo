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
        username: username,
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
    const clients = getAllClients();
    console.table(clients);
    pause("Presionar una tecla para continuar");
}

const editClient = () => {

    let idClient = prompt("Ingrese el id del cliente a editar")
    let username = prompt("Ingrese el nombre")
    let email = prompt("Ingrese email")
    let telefono = prompt("Ingrese el telefono")
    let direccion = prompt("Ingrese la direccion")

    const dataClient = updateClient({
        idClient,
        username,
        email,
        telefono,
        direccion
    });

    console.table("cliente editado", dataClient);
    prompt("Presione Enter para continuar........");

}

const viewOneClient = () => {
    const buscarId = prompt("buscar id")
    const client = getClientById(buscarId);
    if (client) {

        console.table([client]);
    } else {
        console.log("Cliente no encontrado");
    }
    pause("Presionar una tecla para continuar");
}


export { createClient, deleteClient, viewClients, editClient, viewOneClient}
