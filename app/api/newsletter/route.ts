import connectDB from "@/lib/mongoDb";
import { IContact } from "@/models/contact";
import Newsletter from "@/models/newsLetter";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email }: Partial<IContact> = await req.json();
    if (!email?.trim()) {
      return NextResponse.json(
        { success: false, message: "email is required." },
        { status: 400 }
      );
    }

    await connectDB();
    const result = await Newsletter.create({ email: email.trim() });

    return NextResponse.json(
      { success: true, message: "Newsletter Subscribed successfully.", id: result._id },
      { status: 201 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
