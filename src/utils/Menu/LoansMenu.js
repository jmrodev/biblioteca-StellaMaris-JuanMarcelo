import prompt from "../prompt.js";
import mainMenu from "./Main.js";

const loansMenu = () => {
    console.clear()
    const option = Number(prompt("Select an option : \n 1.Create an loans \n 2.Read an loans \n 3.Edit an loans \n 4.Delete  an loans \n 5.Return to main menu \n\n\n "));
    switch (option) {
        case 1: createLoans;
            break;
        case 2: readLoans;
            break;
        case 3: updateLoans;
            break;
        case 4: deleteLoans;
            break;
        case 5: mainMenu;
            break;
        default:
            console.log("Invalid,please insert another option ");
            loansMenu();
            break;
    }
}
export default loansMenu