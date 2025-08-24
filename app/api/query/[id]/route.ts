import { NextResponse } from "next/server";
import { dbConnect } from "@/app/_lib/db";
import { Experience } from "@/app/_models/experience";

// DATA STRUCTURE
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