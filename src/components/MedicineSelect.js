import React from "react";
import Select from "react-select";
import axios from "axios";

const MedicineSelect = ({
  medicines,
  selectedValues,
  setSelectedMedicines,
}) => {
  const handleChange = (selectedOption) => {
    setSelectedMedicines(selectedOption);
  };

  const submitMedications = async () => {
    await axios.post("/api/medications", selectedValues);
  };

  return (
    <div
      className={"col-span-2 flex justify-center items-center bg-indigo-300"}
    >
      <div
        className={
          "bg-white flex h-3/6 w-8/12 items-center gap-x-10 justify-center rounded-2xl shadow-2xl"
        }

      >
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
        <div className={"flex space-x-6 "}>
          <label className={"flex items-center space-x-2"}>
            <span>Subscribe to articles</span>
            <input className={"h-6 w-6"} type={"checkbox"} />
          </label>
          <label className={"flex items-center space-x-2"}>
            <span>Subscribe to warnings</span>
            <input className={"h-6 w-6"} type={"checkbox"} />
          </label>
        </div>
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
