import { date } from "@formkit/tempo";
import dbLocal from "db-local";

const { Schema } = new dbLocal({ path: "./databases" });

const Loan = Schema("Loan", {
    _id: { type: Number },
    clientId: { type: Number, required: true },
    bookId: { type: Number, required: true },
    loanDate: { type: Date },
    returnDate: { type: Date },
    status: { type: String, default: "active" }
});

export default Loan;
