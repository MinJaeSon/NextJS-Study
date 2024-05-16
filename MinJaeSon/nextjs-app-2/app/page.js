import { connectDB } from "@/utils/database";
import { MongoClient } from "mongodb";
import Image from "next/image";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  let data = await db.collection("post").find().toArray();

  // await fetch('/URL', {cache : 'force-cache'})

  return <div>안녕</div>;
}
