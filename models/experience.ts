import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  images: {
    type: [Object],
    required: true,
  },
  strands: {
    type: [String],
    required: true,
  },
  dates: {
    type: [String],
    required: true,
  },
  members: {
    type: [String],
    required: true,
  },
  hashtags: {
    type: [String],
    required: true,
  },
  los: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tips: {
    type: String,
    required: true,
  },
});


export const Experience =   mongoose.models.Experience || mongoose.model('Experience', experienceSchema);