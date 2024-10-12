import Clients from '../data/clients.js'

export const createClient =  () => {
    console.log("Crear cliente");
}

export const readClient = (id=2) => {
    Clients.forEach((client)=>client.id == id?console.log(client):null
    )
}

export const updateClient =  () => {
    console.log("Actualizar cliente");
}

export const deleteClient =  () => {
    console.log("Eliminar cliente");
}



