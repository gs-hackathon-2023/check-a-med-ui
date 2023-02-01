import axios from "axios";

export async function createMedications(props) {
  const { data } = await axios.post("/SOME_URL", props);
  return data;
}

export async function getMedicationsByUserID() {
  const { data } = await axios.get(
    "http://team1.gigaspaces.net/api/getrestrictionsbyuserid?userid=12344"
  );
  return data;
}

export async function getSideEffects() {
  const { data } = await axios.get(
    "http://team1.gigaspaces.net/api/sideefects"
  );
  return data;
}

export async function getSideEffectsById(userId, sideEffectId) {
  const { data } = await axios.get(
    `http://team1.gigaspaces.net/api/getmedicinebysideeffectidanduserid?sideeffectid=${sideEffectId}&userid=${userId}`
  );
  return data;
}

export async function getConflictsByUserId(userId) {
  const { data } = await axios.get(
    `http://team1.gigaspaces.net/api/getconflictsbyuserid?userid1=${userId}&userid2=${userId}`
  );
  return data;
}

export async function getConflictsFromNewMed(medicineId) {
  const { data } = await axios.get(
    `http://team1.gigaspaces.net/api/getnewmedicineconflicts?userid='12344'&medicine='CID100017358'`
  );
  return data;
}
