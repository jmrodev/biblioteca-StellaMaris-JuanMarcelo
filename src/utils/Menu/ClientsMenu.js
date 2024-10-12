import prompt from "../prompt.js";
import mainMenu from "./MainMenu.js";

const clientsMenu = () => {
    console.clear()
    let option = prompt("Select an option: \n 1.Create an client \n 2.Read an client \n 3.Edit an client \n 4.Delete an client \n 5.Return to main menu \n\n\n ")
    switch (option) {
        case 1: createClient;
            break;
        case 2: readClient;
            break;
        case 3: updateClient;
            break;
        case 4: deleteClient;
            break;
        case 5: mainMenu;
            break;
        default:
            console.log("Invalid,please insert another option ");
            clientsMenu()
            break;
    }
}
export default clientsMenu

