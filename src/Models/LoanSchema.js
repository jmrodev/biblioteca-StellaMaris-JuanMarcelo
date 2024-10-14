import dbLocal from "db-local";

const{Schema} = new dbLocal({ path:"./databases"});

const LoanSchema = Schema("Loan",{
    _id: { type: Number, required: true },
    client_id: { type: String, required: true },
    book_id: { type: String, required: true },
    loan_date: { type: Date, required: true },
    due_date: { type: Date, required: true },
    return_date: { type: Date, required: false }
});

export default LoanSchema;
