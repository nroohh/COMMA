import mongoose from "mongoose";

declare global {
  var mongoose: {
    conn: mongoose.Mongoose | null;
    promise: Promise<mongoose.Mongoose> | null;
  } | undefined;

  interface LinkType {
    url: string;
    type: string;
  }

  interface ExperienceType {
    _id?: string;
    title: string;
    cover: LinkType;
    evidence: LinkType;
    strands: string[];
    dates: string[];
    members: string[];
    los: string[];
    timeline: string[];
    description: string;
    tips: string[];
  }
}

export {};
