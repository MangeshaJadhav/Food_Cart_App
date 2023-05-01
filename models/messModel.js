// import mongoose from "mongoose";
const mongoose = require("mongoose");

const messSchema = new mongoose.Schema(
  {
    name: { type: String},
    varients: [],
    star: { type: Number },
    prices: [],
    category: { type: String },
    img: { type: String },
    discription: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports=mongoose.model('user',messSchema)
