import { getConflictsFromNewMed } from "@/medications-api";

export default async function handler(req, res) {
  const { medId } = req.query;

  try {
    const response = await getConflictsFromNewMed(medId);
    res.status(201).json({ response });
  } catch (error) {
    res.status(503).json(error);
  }
}
