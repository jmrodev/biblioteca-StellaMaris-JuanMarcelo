import ClientSchema from '../Models/ClientSchema.js'
import { format } from "@formkit/tempo"
import PromptSync from 'prompt-sync';

let prompt = PromptSync()
const newClient = (dataClient) => {
    console.log(dataClient);
    if (!dataClient.name || !dataClient.email || !dataClient.telefono || !dataClient.direccion) {
        console.log("Todos los campos son obligatorios");
        prompt("Presione una tecla para continuar")
    }

    const newClient = ClientSchema.create({
        _id: Math.floor(Math.random()*100000), // Usa timestamp como ID único
        name: dataClient.name,
        email: dataClient.email,
        telefono: dataClient.telefono,
        direccion: dataClient.direccion,
        fecha_registro: format(new Date(), "full")
    });

    return newClient.save();
}

const removeClient =(id)=>{
    const deleteClient = ClientSchema.remove({_id:id})
    console.log("Cliente eliminado",deleteClient);
}
const getAllClients = ()=>{
  return  ClientSchema.find({});
}

const getClientById = (id)=>{
    return ClientSchema.findOne({_id:id});
}
const updateClient = (id)=>{
    return ClientSchema.update({_id:id});
}
export { newClient,removeClient,getAllClients,updateClient,getClientById}
