
import Schema from '../Models/ClientSchema.js';
import chalk from 'chalk';
import Book  from "../Models/BookSchema.js";

  const statusOfBook = (statusBook ) =>{
    return Book.find( (obj) => obj.status == statusBook )
}

export default statusOfBook


// import Schema from '../Models/ClientSchema.js';
// import chalk from 'chalk';

// const test = async () => {
//   try {
//     let clients = await Schema.find({});

    
//     console.log(chalk.yellowBright("************************************************************************************************"));
//     console.log(chalk.green.bold("Clientes encontrados:"));
    
//     console.log(chalk.blue.bold("ID".padEnd(15)) + chalk.blue.bold("Nombre".padEnd(20)) + chalk.blue.bold("Teléfono".padEnd(15)) + chalk.blue.bold("Dirección".padEnd(25)) + chalk.blue.bold("Fecha de registro"));

//     clients.forEach(client => {
//       console.log(
//         chalk.yellow(client._id.toString().padEnd(15)) + 
//         chalk.cyan(client.username.padEnd(20)) + 
//         chalk.green(client.phone.padEnd(15)) + 
//         chalk.magenta(client.address.padEnd(25)) + 
//         chalk.red(client.registrationDate)
//       );
//     });

//     // Línea decorativa de pie
//     console.log(chalk.yellowBright("************************************************************************************************"));

//     return null
//   } catch (error) {
//     console.error(chalk.red.bold('Error finding users:'), error);
//   }
// };

// export default test;
