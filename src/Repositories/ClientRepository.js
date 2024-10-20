import ClientSchema from '../Models/ClientSchema.js'
import { format } from "@formkit/tempo"
import PromptSync from 'prompt-sync';

let prompt = PromptSync()
const newClient = (dataClient) => {
    console.log(dataClient);
    if (!dataClient.username || !dataClient.email || !dataClient.telefono || !dataClient.direccion) {
        console.log("Todos los campos son obligatorios");
        prompt("Presione una tecla para continuar")
    }

    const newClient = ClientSchema.create({
        _id: Math.floor(Math.random() * 100000), // Usa timestamp como ID único
        username: dataClient.username,
        email: dataClient.email,
        telefono: dataClient.telefono,
        direccion: dataClient.direccion,
        fecha_registro: format(new Date(), "full")
    });

    return newClient.save();
}

const removeClient = (idString) => {
    const id = parseInt(idString)
    const deleteClient = ClientSchema.remove({ _id: id })
    console.log("Cliente eliminado", deleteClient);

    
}
const getAllClients = () => {
    console.log( ClientSchema.find({  }))
}

const getClientById = (idString) => {
let id = parseInt(idString)
     let findClient= ClientSchema.findOne({ _id: id });
     console.log(findClient);
     
}

const updateClient =  (dataClient) => {
    console.log("New client data nnnfffn:", typeof(dataClient));

    console.log("data destructurada",dataClient.username);
    console.log("ID:", dataClient.idClient);
    console.log("Username:", dataClient.username);
    console.log("Email:", dataClient.email);
    console.log("Teléfono:", dataClient.telefono);
    console.log("Dirección:", dataClient.direccion);
    let ID = parseInt(dataClient.idClient) 
    console.log("ID:", ID);
    const client =  ClientSchema.findOne({ _id: ID});
    prompt("stop")

    if (!client) {
        console.log("Client not found");
        return null;
    }

    client.username = dataClient.username;
    client.email = dataClient.email;
    client.telefono = dataClient.telefono;
    client.direccion = dataClient.direccion;

    return client.save();
}

export { newClient, removeClient, getAllClients, updateClient, getClientById }
