import ClientSchema from '../Models/ClientSchema.js'

const NewClient = ClientSchema.create({
    _id: id,
    name: username,
    email:email,
    telefono:telefono,
    direccion:direccion,
    fecha_regitro: fecha_regitro,
}).save();

const getClients = () => {
    
}

return NewClient;

