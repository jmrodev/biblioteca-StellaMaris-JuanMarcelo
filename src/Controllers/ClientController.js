import prompt from "../utils/prompt.js";
import { createNewClient, getAllClients, getClientById, removeClient, updateClient } from '../Repositories/ClientRepository.js'
import PromptSync from "prompt-sync";

let pause = PromptSync()

const createClient = () => {
    let username = prompt("Ingrese el nombre")
    let email = prompt("Ingrese email")
    let phone = prompt("Ingrese el teléfono")
    let address = prompt("Ingrese la dirección")

    const client = createNewClient({
        username,
        email,
        phone,
        address,
    })
    console.log("Cliente creado exitosamente", client)
    pause("Presionar una tecla para continuar")
}

const deleteClient = () => {
    const clientId = prompt("Eliminar un Cliente, ingrese el id")
    removeClient(clientId);
}

const viewClients = () => {
    const clients = getAllClients();
    console.table(clients);
    pause("Presionar una tecla para continuar");
}

const editClient = () => {
    let clientId = prompt("Ingrese el id del cliente a editar")
    let username = prompt("Ingrese el nombre")
    let email = prompt("Ingrese email")
    let phone = prompt("Ingrese el teléfono")
    let address = prompt("Ingrese la dirección")

    const updatedClient = updateClient({
        clientId,
        username,
        email,
        phone,
        address
    });

    console.table("Cliente editado", updatedClient);
    prompt("Presione Enter para continuar........");
}

const viewOneClient = () => {
    const searchId = prompt("Buscar id")
    const client = getClientById(searchId);
    if (client) {
        console.table([client]);
    } else {
        console.log("Cliente no encontrado");
    }
    pause("Presionar una tecla para continuar");
}

export { createClient, deleteClient, viewClients, editClient, viewOneClient }
