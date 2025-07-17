import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongoDb';
import Contact, { IContact } from '@/models/contact';

export async function POST(req: Request) {
  try {
    const { name, email, company, budget, message }: Partial<IContact> = await req.json();

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectDB();

    // Create new contact document
    const contact: IContact = new Contact({
      name,
      email,
      company: company?.trim() || '',
      budget: budget?.trim() || 'Not sure',
      message,
    });

    // Save to database
    const result = await contact.save();

    return NextResponse.json(
      { success: true, message: 'Message sent successfully.', id: result._id },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}