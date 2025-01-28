import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db";
import { authers } from "@/db/schema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const result = await db.select().from(authers);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch data" });
    }
  } else if (req.method === "POST") {
    try {
      const { auther_name, email } = req.body;
      const result = await db.insert(authers).values({ auther_name, email }).returning();
      res.status(201).json(result[0]);
    } catch (error) {
      res.status(500).json({ error: "Failed to insert data" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
