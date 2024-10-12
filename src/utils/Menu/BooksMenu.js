import prompt from "../prompt.js";
import  mainMenu  from "./MainMenu.js";

const booksMenu = () => {
    console.clear()
    const option = Number(prompt("Select an option : \n 1.Create an book \n 2.Read an book \n 3.Edit an book \n 4.Delete an book \n 5.Return to main menu \n\n\n "));
    switch (option) {
        case 1: createBooks;
            break;
        case 2: readBooks;
            break;
        case 3: updateBooks;
            break;
        case 4: deleteBooks;
            break;
        case 5: mainMenu;
            break;
        default:
            console.log("Invalid,please insert another option ");
            booksMenu;
            break;

    }
}
export default booksMenu