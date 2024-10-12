import prompt_Sync from "prompt-sync";
const prompt = prompt_Sync();

const mainMenu = () => {
  const option = Number(prompt("select an option: "));
  switch (option) {
    case 1: clientsMenu();
      break;
    case 2: booksMenu();
      break;
    case 3: loansMenu();
      break
    default:
      console.log("Invalid,please insert another option ");
      mainMenu()
      break;
  }
}

const clientsMenu = () => {
  const option = Number(prompt("select an option: "));
  switch (option) {
    case 1: createClient();
      break;
    case 2: updateClient();
      break;
    case 3: deleteClient();
      break;
    default:
      console.log("Invalid,please insert another option ")
      break;
  }
}

const booksMenu = () => {
  const option = Number(prompt("select an option : "));
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
      console.log("Invalid,please insert another option ")
      break;

  }
}

const loansMenu = () => {
  const option = Number(prompt("select an option : "));
  switch (option) {
    case 1: createLoans();
      break;
    case 2: updateLoans();
      break;
    case 3: deleteLoans();
      break;
    case 4: readLoans();
    default:
      console.log("Invald,please insert another option ");

      break;
  }
}

export { mainMenu };