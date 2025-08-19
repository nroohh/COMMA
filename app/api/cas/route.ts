import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import { Experience } from "@/models/experience";

// DATA STRUCTURE

interface ImageType {
  url: string;
  caption: string;
}

interface ExperienceType {
  title: string;
  images: ImageType[];
  strands: string[];
  dates: string[];
  members: string[];
  hashtags: string[];
  los: string[];
  description: string;
  tips: string;
}

export async function GET() {
    try {
        await dbConnect();
        const experiences = await Experience.find({});
        return NextResponse.json(experiences, { status: 200 }); // ok status
    } catch (error: any) {
        return NextResponse.json({ error: "not found error" }, { status: 404 }); // not found status
    }
}

export async function POST(request: Request) {
    try {
        const experience: ExperienceType = await request.json();
        if (!experience.title || !experience.images || !experience.strands || !experience.dates || !experience.members || !experience.hashtags || !experience.los || !experience.description || !experience.tips) {
            return NextResponse.json({ error: "bad request" }, { status: 400 }); // bad request status
        }
        await dbConnect();
        const newExperience = new Experience(experience);
        await newExperience.save();
        return NextResponse.json(newExperience, { status: 201 }); // created status
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "internal server error" }, { status: 500 }); // internal server error status
    }
}

