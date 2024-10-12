import prompt from "./prompt.js";

const mainMenu = () => {
    console.clear()
    let option = prompt(
        "Select an option: \n 1.manage clients \n 2.mananage books \n 3.manage loans \n\n\n")
    switch (option) {
        case 1:
            clientsMenu();
            break;
        case 2:
            booksMenu();
            break;
        case 3:
            loansMenu();
            break

        default:
            console.clear()
            console.log("Invalid,please insert another option ");
            mainMenu()
            break;
    }
}

const clientsMenu = () => {
    console.clear()
    let option = prompt("Select an option: \n 1.Create an client \n 2.Read an client \n 3.Edit an client \n 4.Delete an client \n 5.Return to main menu \n\n\n ")
    switch (option) {
        case 1: createClient();
            break;
        case 2: readClient();
            break;
        case 3: updateClient();
            break;
        case 4: deleteClient();
            break;
        case 5: mainMenu();
            break;
        default:
            console.log("Invalid,please insert another option ");
            clientsMenu()
            break;
    }
}

const booksMenu = () => {
    console.clear()
    const option = Number(prompt("Select an option : \n 1.Create an book \n 2.Read an book \n 3.Edit an book \n 4.Delete an book \n 5.Return to main menu \n\n\n "));
    switch (option) {
        case 1: createBooks();
            break;
        case 2: readBooks();
            break;
        case 3: updateBooks();
            break;
        case 4: deleteBooks();
            break;
        case 5: mainMenu();
            break;
        default:
            console.log("Invalid,please insert another option ");
            booksMenu();
            break;

    }
}

const loansMenu = () => {
    console.clear()
    const option = Number(prompt("Select an option : \n 1.Create an loans \n 2.Read an loans \n 3.Edit an loans \n 4.Delete  an loans \n 5.Return to main menu \n\n\n "));
    switch (option) {
        case 1: createLoans();
            break;
        case 2: readLoans();
            break;
        case 3: updateLoans();
            break;
        case 4: deleteLoans();
            break;
        case 5: mainMenu();
            break;
        default:
            console.log("Invalid,please insert another option ");
            loansMenu();
            break;
    }
}

export { mainMenu };