import { NextResponse } from "next/server";
import connectDB from "@/lib/mongoDb";
import Contact, { IContact } from "@/models/contact";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      company,
      phone,
      projectType,
      budget,
      timeline,
      message,
    }: Partial<IContact> = await req.json();
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    await connectDB();
    const result = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || "",
      phone: phone?.trim() || "",
      projectType: projectType?.trim() || "",
      budget: budget?.trim() || "Not sure",
      timeline: timeline?.trim() || "",
      message: message.trim(),
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully.", id: result._id },
      { status: 201 }
    );
  } catch (error: any) {
    console.log("error", error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
