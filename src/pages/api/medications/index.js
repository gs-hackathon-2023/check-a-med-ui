import { createMedications } from "@/medications-api";

export default async function handler(req, res) {
  const { body, method } = req;

  if (method !== "POST") {
    res.status(405).json({ err: "Method not allowed" });
    return;
  }

  try {
    const response = await createMedications(body);
    res.status(201).json({ response });
  } catch (error) {
    res.status(503).json(error);
  }
}
