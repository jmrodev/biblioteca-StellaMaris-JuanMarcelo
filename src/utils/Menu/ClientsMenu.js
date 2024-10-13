import prompt from "../prompt.js";
import mainMenu from "./MainMenu.js";
import { createClient, readClient, updateClient, deleteClient } from "../../pseudoControllers/ClientController.js";

const clientsMenu = () => {
    console.clear();
    let option = prompt("Seleccione una opción: \n 1.Crear un cliente \n 2.Leer un cliente \n 3.Editar un cliente \n 4.Eliminar un cliente \n 5.Volver al menú principal \n\n\n ");
    switch (Number(option)) {
        case 1: 
        let name = prompt("Ingrese el nombre del cliente: ");
            createClient(name);
            break;
        case 2: 
            readClient();
            break;
        case 3: 
            updateClient();
            break;
        case 4: 
            deleteClient();
            break;
        case 5: 
            mainMenu();
            break;
        default:
            console.log("Opción inválida, por favor ingrese otra opción");
            break;
    }
}

export default clientsMenu;
