import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";

const MedicineSelect = ({ medicines }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (selectedOption) => {
    setSelectedValues(selectedOption);
  };

  const submitMedications = async () => {
    await axios.post("/api/medications", selectedValues);
  };

  return (
    <div className={"col-span-2 shadow-2xl bg-indigo-300 gap-x-10"}>
      <div className={"flex space-x-6 p-4"}>
        <Select
          isSearchable
          placeholder={""}
          closeMenuOnSelect={false}
          menuPlacement="auto"
          isMulti
          options={medicines.map((medicine) => ({
            value: medicine.id,
            label: medicine.name,
          }))}
          className={"w-3/12"}
          onChange={handleChange}
        />
        <button
          disabled={selectedValues.length < 1}
          onClick={submitMedications}
          className="flex items-center bg-green-500 p-3 rounded-lg hover:bg-green-400 h-10 disabled:bg-gray-400"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MedicineSelect;
