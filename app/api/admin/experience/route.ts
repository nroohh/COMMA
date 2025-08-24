import { NextResponse } from "next/server";
import { dbConnect } from "@/app/_lib/db";
import { Experience } from "@/app/_models/experience";

export async function GET() {
    try {
        await dbConnect();
        const experiences = await Experience.find({});
        return NextResponse.json(experiences, { status: 200 });
    } catch {
        return NextResponse.json({ error: "not found error" }, { status: 404 });
    }
}

export async function POST(request: Request) {
    try {
        const experience: ExperienceType = await request.json();
        if (!experience.title || !experience.cover || !experience.evidence || !experience.strands || !experience.timeline || !experience.dates || !experience.members || !experience.los || !experience.description || !experience.tips) {
            return NextResponse.json({ error: "bad request" }, { status: 400 });
        }
        await dbConnect();
        const newExperience = new Experience(experience);
        await newExperience.save();
        return NextResponse.json(newExperience, { status: 201 });
    } catch (err: unknown) {
        console.error(err);
        return NextResponse.json({ error: "internal server error" }, { status: 500 });
    }
}
