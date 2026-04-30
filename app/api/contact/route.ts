import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { getDb } from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = contactSchema.safeParse(json);
    if (!parsed.success)
      return NextResponse.json(
        { error: "Please fix the form fields and try again." },
        { status: 400 },
      );
    const db = await getDb();
    await db.collection("messages").insertOne({ ...parsed.data, createdAt: new Date() });
    return NextResponse.json({ message: "Thanks — your message was saved to MongoDB." });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to save your message right now. Check your MongoDB connection." },
      { status: 500 },
    );
  }
}
