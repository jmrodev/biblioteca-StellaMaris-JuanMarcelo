



import Schema from '../Models/ClientSchema.js';
import chalk from 'chalk';

const test = async () => {
  try {
    let clients = await Schema.find({});

    // Línea decorativa de encabezado
    console.log(chalk.yellowBright("************************************************************************************************"));
    console.log(chalk.green.bold("Clientes encontrados:"));
    
    // Mostrar cabeceras de la tabla con color
    console.log(chalk.blue.bold("ID".padEnd(15)) + chalk.blue.bold("Nombre".padEnd(20)) + chalk.blue.bold("Teléfono".padEnd(15)) + chalk.blue.bold("Dirección".padEnd(25)) + chalk.blue.bold("Fecha de registro"));

    // Recorrer y mostrar clientes con colores personalizados
    clients.forEach(client => {
      console.log(
        chalk.yellow(client._id.toString().padEnd(15)) + 
        chalk.cyan(client.username.padEnd(20)) + 
        chalk.green(client.telefono.padEnd(15)) + 
        chalk.magenta(client.direccion.padEnd(25)) + 
        chalk.red(client.fecha_registro)
      );
    });

    // Línea decorativa de pie
    console.log(chalk.yellowBright("************************************************************************************************"));

  } catch (error) {
    console.error(chalk.red.bold('Error finding users:'), error);
  }
};

export default test;
