import { date } from "@formkit/tempo";
import dbLocal from "db-local";

const { Schema } = new dbLocal({ path: "./databases" });

const Loan = Schema("Loan", {
    _id: { type: Number },
    client_id: { type: Number, required: true },
    book_id: { type: Number, required: true },
    fecha_prestamo: { type: Date },
    fecha_devolucion: { type: Date },
    estado: { type: String, default: "activo" }
});

export default Loan;
