import ClientSchema from '../Models/ClientSchema.js'

const newClient = ClientSchema.create({
    _id: id,
    name: username,
    email:email,
    telefono:telefono,
    direccion:direccion,
    fecha_regitro: fecha_regitro,
}).save();



export default newClient;

