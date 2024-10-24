import { date } from "@formkit/tempo";
import dbLocal from "db-local";

const { Schema } = new dbLocal({ path: "./databases" });

const Client = Schema("Client", {
    _id: { type: Number },
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    registrationDate: { type: Date }
});

export default Client;
