import { NextResponse } from "next/server";
import { dbConnect } from "@/app/_lib/db";
import { Experience } from "@/app/_models/experience";

export async function GET(request: Request, context: {}) {
    try {
        await dbConnect();

        const { searchParams } = new URL(request.url);
        const query = searchParams.get("search") || "";

        if (query === "") {
            const experiences = await Experience.find({});
            return NextResponse.json(experiences, { status: 200 }); // ok status
        } else {
            const result = await Experience.aggregate([
                {
                $search: {
                    index: "default",
                    text: {
                        query,
                        path: ["title", "description", "hashtags"],
                        fuzzy: { maxEdits: 2 },
                    },
                },
                },
                { $limit: 10 },
            ]);

            return NextResponse.json(result, { status: 200 }); // ok status
        }

    
    } catch (error: any) {
        console.error("Error fetching experiences:", error);
        return NextResponse.json({ error: "internal server error" }, { status: 500 }); // internal server error status
    }
}