import Clients from '../data/clients.js'

export const createClient =  () => {
    console.log("Crear cliente");
}

export const readClient = (id = null) => {
    if (id === null) {
        // Si no se proporciona un id, imprimir todos los clientes
        console.log("Listing all clients:");
        Clients.forEach(client => console.log(client));
    } else {
        // Si se proporciona un id, buscar el cliente correspondiente
        const client = Clients.find(client => client.id === id);
        if (client) {
            console.log(client);
        } else {
            console.log(`Client with id ${id} not found`);
        }
    }
}


export const updateClient =  () => {
    console.log("Actualizar cliente");
}

export const deleteClient =  () => {
    console.log("Eliminar cliente");
}



