import { getSideEffectsById } from "@/medications-api";

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const response = await getSideEffectsById("12344", id);
    res.status(201).json({ response });
  } catch (error) {
    res.status(503).json(error);
  }
}
