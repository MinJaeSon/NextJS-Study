import { connectDB } from "@/utils/database";

export default async function handler(request, response) {
  const db = (await connectDB).db("forum");
  let data = await db.collection("post").find().toArray();
  return response.status(200).json(data)
}