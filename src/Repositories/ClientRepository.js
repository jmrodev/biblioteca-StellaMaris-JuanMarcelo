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

const removeClient = (id) => {
    const deleteClient = ClientSchema.remove({ _id: id })
    console.log("Cliente eliminado", deleteClient);
}
const getAllClients = () => {
    return ClientSchema.find({});
}

const getClientById = (id) => {
    return ClientSchema.findOne({ _id: id });
}

const updateClient = async (dataClient) => {
    console.log("New client data:", dataClient);
    prompt("presione tecla")
    const id = dataClient.id

        // const userFound = await ClientSchema.findOne({ _id: id })
        const userFound = await ClientSchema.findOne({ _id:36742})
        console.log("userFound",userFound);
        prompt("Presione una tecla para continuar");

        userFound.username = dataClient.username;
        userFound.email = dataClient.email;
        userFound.telefono = dataClient.telefono;
        userFound.direccion = dataClient.direccion;

        const updatedUser = await userFound.save();

        return updatedUser;
  
   
}

export { newClient, removeClient, getAllClients, updateClient, getClientById }
