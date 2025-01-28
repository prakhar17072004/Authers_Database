import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db";
import { books } from "@/db/schema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const result = await db.select().from(books);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch data" });
    }
  } else if (req.method === "POST") {
    try {
      const { auther_id, books_name } = req.body;
      const result = await db.insert(books).values({ auther_id, books_name }).returning();
      res.status(201).json(result[0]);
    } catch (error) {
      res.status(500).json({ error: "Failed to insert data" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
