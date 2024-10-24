import { date } from "@formkit/tempo";
import dbLocal from "db-local";

const { Schema } = new dbLocal({ path: "./databases" });

const Book = Schema("Book", {
    _id: { type: Number },
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true },
    genre: { type: String, required: true },
    publicationDate: { type: String, required: true },
    status: { type: String, default: "available" }
});

export default Book;
