import prompt from "../prompt.js";
import mainMenu from "./MainMenu.js";
import { createClient, deleteClient, viewClients, editClient, viewOneClient } from "../../Controllers/ClientController.js";

const clientsMenu = () => {
    let option = parseInt(prompt(
        "Seleccione una opción: \n 1.Crear un cliente \n 2.Ver un cliente \n 3.Editar un cliente \n 4.Eliminar un cliente \n 5.Ver lista de clientes \n 6.Volver al menú principal \n\n\n "
    ));
    switch (option) {
        case 1:
            createClient();
            break;
        case 2:
            viewOneClient();
            break;
        case 3:
            editClient();
            break;
        case 4:
            deleteClient();
            break;
        case 5:
            viewClients();
            break;
        case 6:
            mainMenu();
            break;
        default:
            console.log("Opción inválida, por favor ingrese otra opción");
            break;
    }
    prompt("Presione Enter para continuar...");
    clientsMenu();
}

export default clientsMenu;
