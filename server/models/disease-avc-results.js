import mongoose from "mongoose";

const Schema = mongoose.Schema;

const avcResultsSchema = Schema({
  prediction: {
    type: Boolean,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },

  
  /* gender: {
    type: Number,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  hypertension: {
    type: Number,
    required: true,
  },

  heartDisease: {
    type: Number,
    required: true,
  },

  married: {
    type: Number,
    required: true,
  },
  work: {
    type: Number,
    required: true,
  },

  residence: {
    type: Number,
    required: true,
  },
  glucose: {
    type: Number,
    required: true,
  },
  bmi: {
    type: Number,
    required: true,
  },
  smoking_status: {
    type: Number,
    required: true,
  }, */
}, { timestamps: true });

export const AvcResults = mongoose.model("AvcResults", avcResultsSchema);
