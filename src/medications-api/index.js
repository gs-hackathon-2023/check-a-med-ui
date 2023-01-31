import axios from "axios";

export async function createMedications(props) {
  const { data } = await axios.post("/SOME_URL", props);
  return data;
}
