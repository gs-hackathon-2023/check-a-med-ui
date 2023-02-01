import React, { useState } from "react";
import MedicineSelect from "@/components/MedicineSelect";
import SideEffects from "@/components/SideEffects";
import Conflicts from "@/components/Conflicts";
import {
  getConflictsByUserId,
  getMedicationsByUserID,
  getSideEffects,
} from "@/medications-api";

export default function Dashboard({ medicines, sideEffects, conflicts }) {
  console.log(sideEffects);
  console.log(conflicts);
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  return (
    <div className={"h-screen grid grid-cols-2"}>
      <MedicineSelect
        selectedValues={selectedMedicines}
        medicines={medicines}
        setSelectedMedicines={setSelectedMedicines}
      />
      <SideEffects sideEffects={sideEffects} />
      <Conflicts />
    </div>
  );
}

export async function getServerSideProps(context) {
  const medicines = await getMedicationsByUserID();
  const sideEffects = await getSideEffects();
  const conflicts = await getConflictsByUserId("12344");
  return {
    props: {
      medicines,
      sideEffects,
      conflicts,
    },
  };
}
