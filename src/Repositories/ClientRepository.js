import Client from '../Models/ClientSchema.js'
import { format } from "@formkit/tempo"

const createNewClient = (clientData) => {
    if (!clientData.username || !clientData.email || !clientData.phone || !clientData.address) {
        throw new Error("Todos los campos son obligatorios");
    }

    const newClient = Client.create({
        _id: Math.floor(Math.random() * 100000),
        username: clientData.username,
        email: clientData.email,
        phone: clientData.phone,
        address: clientData.address,
        registrationDate: format(new Date(), "full")
    });

    return newClient.save();
}

const removeClient = (id) => {
    const deletedClient = Client.remove({ _id: parseInt(id) });
    return deletedClient;
}

const getAllClients = () => {
    return Client.find({});
}

const getClientById = (id) => {
    return Client.findOne({ _id: parseInt(id) });
}

const updateClient = (clientData) => {
    const client = Client.findOne({ _id: parseInt(clientData.clientId) });

    if (!client) {
        throw new Error("Cliente no encontrado");
    }

    client.username = clientData.username;
    client.email = clientData.email;
    client.phone = clientData.phone;
    client.address = clientData.address;

    return client.save();
}

export { createNewClient, removeClient, getAllClients, updateClient, getClientById }
