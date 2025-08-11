import clientPromise from "@/lib/mongodbSingle";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const data = await db.collection("testimonials").find({}).toArray();
    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}