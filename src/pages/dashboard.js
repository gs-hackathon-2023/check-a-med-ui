import React from "react";
import MedicineSelect from "@/components/MedicineSelect";
import SideEffects from "@/components/SideEffects";
import Conflicts from "@/components/Conflicts";

export default function Dashboard({ fakeMedicines }) {
  return (
    <div className={"h-screen grid grid-cols-2"}>
      <MedicineSelect medicines={fakeMedicines} />
      <SideEffects />
      <Conflicts />
    </div>
  );
}

export async function getServerSideProps(context) {
  const fakeMedicines = [
    { id: 1, name: "Paracetamol" },
    { id: 2, name: "Aspirin" },
    { id: 3, name: "Ibuprofen" },
    { id: 4, name: "Amoxicillin" },
    { id: 5, name: "Metformin" },
    { id: 6, name: "Lisinopril" },
    { id: 7, name: "Atorvastatin" },
    { id: 8, name: "Metoprolol" },
  ];
  return {
    props: {
      fakeMedicines,
    },
  };
}
