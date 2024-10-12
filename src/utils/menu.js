import prompt from "./prompt.js";

const mainMenu = () => {
    let option = prompt(
        "Select an option: \n 1.Manage clients \n 2.MAnage books \n\n\n")
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
            console.log("Invalid,please insert another option ");
            mainMenu()
            break;
    }
}

const clientsMenu = () => {
    let option = prompt("Select an option: \n 1.Create an client \n 2.Edit an client \n 3.Delete an client\n\n\n ")
    switch (option) {
        case 1: createClient();
            break;
        case 2: updateClient();
            break;
        case 3: deleteClient();
            break;
        default:
            console.log("Invalid,please insert another option ");
            clientsMenu()
            break;
    }
}

const booksMenu = () => {
    const option = Number(prompt("Select an option : \n 1.Create an book \n 2.Edit an book \n 3.Delete an book\n\n\n "));
    switch (option) {
        case 1: createBooks();
            break;
        case 2: updateBooks();
            break;
        case 3: deleteBooks();
            break;
        case 4: readLoans();
            break;
        default:
            console.log("Invalid,please insert another option ");
            booksMenu();
            break;

    }
}

const loansMenu = () => {
    const option = Number(prompt("Select an option : \n 1.Create an loans \n  2.Edit an loans \n 3.Delete  an loans\n\n\n  "));
    switch (option) {
        case 1: createLoans();
            break;
        case 2: updateLoans();
            break;
        case 3: deleteLoans();
            break;
        case 4: readLoans();
        default:
            console.log("Invalid,please insert another option ");
            loansMenu();
            break;
    }
}

export { mainMenu };