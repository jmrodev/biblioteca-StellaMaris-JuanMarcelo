import Client from '../Models/ClientSchema.js'

function createClient(id, name, email, telefono, direccion, fecha_registro) {
    try {
        const newClient = Client.create({
            _id: id,
            name: name,
            email: email,
            telefono: telefono,
            direccion: direccion,
            fecha_registro: fecha_registro,
        }).save();

        return newClient;
    } catch (error) {
        console.error("Error al crear el cliente:", error);
        throw error;
    }
}

function findClient(id) {
    return Client.findOne(id);
}

function updateClient(id, updateData) {
    const client = Client.findOne(id);
    if (client) {
        Object.assign(client, updateData);
        return client.save();
    }
    return null;
}

function removeClient(id) {
    return Client.remove(id);
}

export { createClient, findClient, updateClient, removeClient };
