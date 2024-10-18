import prompt from "../utils/prompt.js";
import { newClient } from '../Repositories/ClientRepository.js'
import PromptSync from "prompt-sync";

let pause = PromptSync() 

 const createClient = () => {
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

const deleteClient= ()=> {
const remove = prompt("Eliminar un Cliente, ingrese el id")
 removeClient(remove);
}
const viewClients = ()=>{
    const Clients = prompt("Lista de clientes")
    getAllClients(Clients);
}

const editClient = ()=>{
    const editar = prompt("Editar Cliente")
    updateClient(editar);

}

const viewOneClient = ()=>{
    const buscarId = prompt ("buscar id")
    getClientById(buscarId);
}


export {createClient,deleteClient,viewClients,editClient,viewOneClient}