const mongoose = require("mongoose");

const constructionSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true, trim: true, },
  email: { type: String, required: true, trim: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
  licenseNumber: { type: String, required: true, trim: true, },
  description: { type: String, required: false, trim: true, },
  status: { type: String, required: false },
}, { timestamps: true });

module.exports = mongoose.model("Construction", constructionSchema);
