import promptSync from 'prompt-sync';

const prompt = promptSync();

const menu = () => {
  switch (prompt(
    'Seleccione una opción: \n1. Gestionar Clientes\n2. Gestionar Libros\n'
  )) {
    case '1':
      return menuClients();
    case '2':
      return menuBooks();
    default:
      console.log('Opción inválida');
      setTimeout(menu(), 3000);
  }
}

const menuClients = () => {
   switch (prompt(
    'Seleccione una opción: \n1. Listar clientes\n2. Agregar cliente\n3. Editar cliente\n4. Eliminar cliente\n5. Volver al menú principal\n'
   )) {
    case '1':
      return listClients();
    case '2':
      return addClient();
    case '3':
      return editClient();
    case '4':
      return deleteClient();
    case '5':
      return menu();
    default:
      console.log('Opción inválida');
      setTimeout(menuClients(), 3000);
   }        
}




const menuBooks = () => {
    switch (prompt(
        'Seleccione una opción: \n1. Listar libros\n2. Agregar libro\n3. Editar libro\n4. Eliminar libro\n5. Volver al menú principal\n'
    )) {
        case '1':
            return listBooks();
        case '2':
            return addBook();
        case '3':
            return editBook();
        case '4':
            return deleteBook();
        case '5':
            return menu();
        default:
            console.log('Opción inválida');
            setTimeout(menuBooks(), 3000);
            
    }       
}

export default menu;


