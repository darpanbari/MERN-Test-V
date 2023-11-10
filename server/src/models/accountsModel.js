import mongoose from "mongoose";

const Schema = mongoose.Schema;
const accountsSchema = new Schema({
  products: {
    type: String,
    required: true,
  },
});

export default mongoose.model("accounts", accountsSchema);
