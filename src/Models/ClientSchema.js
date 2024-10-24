import { date } from "@formkit/tempo";
import dbLocal from "db-local";

const { Schema } = new dbLocal({ path: "./databases" });

const Client = Schema("Client", {
    _id: { type: Number },
    username: { type: String, required: true },
    email: { type: String, required: true },
    telefono: { type: String, required: true },
    direccion: { type: String, required: true },
    fecha_registro: { type: Date }
});

export default Client;
