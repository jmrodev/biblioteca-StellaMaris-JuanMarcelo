import { date } from "@formkit/tempo";
import dbLocal from "db-local";

const { Schema } = new dbLocal({ path: "./databases" });
const Book = Schema("Book", {
    _id: { type: Number },
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    isbn: { type: String, required: true },
    genero: { type: String, required: true },
    fecha_publicacion: { type: String, required: true },
    estado: { type: String, default: "disponible" }
})
export default Book;
