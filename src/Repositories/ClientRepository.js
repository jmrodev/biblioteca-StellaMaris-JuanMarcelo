import ClientSchema from '../Models/ClientSchema.js'

const client = ClientSchema.create({
    _id: id,
    name: username,
    email:email,
    telefono:telefono,
    direccion:direccion,
    fecha_regitro: fecha_regitro,


}).save();
return client;

