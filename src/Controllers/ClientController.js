import prompt from "../utils/prompt.js";
import Client from '../Models/ClientSchema.js';
import clientsMenu from "../utils/Menu/ClientsMenu.js";

export const createClient = () => {


    console.log("Ingrese el nombre");
    let name = prompt()
    console.log("Ingrese email");
    
   