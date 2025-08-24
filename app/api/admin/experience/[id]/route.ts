import { NextResponse } from "next/server";
import { dbConnect } from "@/app/_lib/db";
import { Experience } from "@/app/_models/experience";

// DATA STRUCTURE

export async function DELETE(request: Request, context: { params: { id: string } }) {
    const { id } = context.params;
    try {
        await dbConnect();
        const deletedExperience = await Experience.findByIdAndDelete(id);
        if (!deletedExperience) {
            return NextResponse.json({ error: "not found" }, { status: 404 }); // not found status
        }
        return NextResponse.json({ message: "deleted successfully" }, { status: 200 }); // ok status
    } catch (error: any) {
        return NextResponse.json({ error: "internal server error" }, { status: 500 }); // internal server error status
    }
}

export async function GET(request: Request, context: { params: { id: string } }) {
    const { id } = context.params;
    try {
        await dbConnect();
        const experience = await Experience.findById(id);
        if (!experience) {
            return NextResponse.json({ error: "not found" }, { status: 404 }); // not found status
        }
        return NextResponse.json(experience, { status: 200 }); // ok status
    } catch (error: any) {
        return NextResponse.json({ error: "internal server error" }, { status: 500 }); // internal server error status
    }
}

export async function PUT(request: Request, context: { params: { id: string } }) {
    const { id } = context.params;
    try {
        const experience: ExperienceType = await request.json();
        if (!experience.title || !experience.cover || !experience.evidence || !experience.strands || !experience.timeline || !experience.dates || !experience.members || !experience.los || !experience.description || !experience.tips) {
            return NextResponse.json({ error: "bad request" }, { status: 400 }); // bad request status
        }
        await dbConnect();
        const updatedExperience = await Experience.findByIdAndUpdate(id, experience, { new: true });
        if (!updatedExperience) {
            return NextResponse.json({ error: "not found" }, { status: 404 }); // not found status
        }
        return NextResponse.json(updatedExperience, { status: 200 }); // ok status
    } catch (error) {
        return NextResponse.json({ error: "internal server error" }, { status: 500 }); // internal server error status
    }
}