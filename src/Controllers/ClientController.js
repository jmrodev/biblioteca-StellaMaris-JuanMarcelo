import prompt from "../utils/prompt.js";
import ClientRepository from '../Repositories/ClientRepository.js'
import { format, parse } from "@formkit/tempo"

export const createClient = () => {
    let id = Math.floor(Math.random() * 100000)
    let username = prompt("Ingrese el nombre")
    let email = prompt("Ingrese email")
    let telefono = prompt("Ingrese el telefono")
    let direccion = prompt("Ingrese la direccion")
    let fecha_registro = format(new Date(), "full")

    const newClient = ClientRepository.create({
        id: id,
        name: username,
        email: email,
        telefono: telefono,
        direccion: direccion,
        fecha_registro: fecha_registro,
    })
    console.log("Cliente creado existosamente", newClient)
}