import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
  url: { type: String, required: true },
  type: { type: String },
});


const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  cover: {
    type: linkSchema,
    required: true,
  },
  evidence: {
    type: linkSchema,
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
  los: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  timeline: {
    type: [String],
    required: true,
  },
  tips: {
    type: [String],
    required: true,
  },
});


export const Experience = mongoose.models.Experience || mongoose.model('Experience', experienceSchema);