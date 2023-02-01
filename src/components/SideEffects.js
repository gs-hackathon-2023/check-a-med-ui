import React from "react";
import Select from "react-select";
import Grid from "@/components/Grid";
import axios from "axios";

const SideEffects = ({ sideEffects }) => {
  const customComponents = {
    DropdownIndicator: () => null,
  };

  const handleChange = async (selectedValue) => {
    console.log(selectedValue);
    if (selectedValue) {
      const result = await axios.get(
        `/api/side-effects/${selectedValue.value}`
      );
    }
  };

  const data = [
    {
      col1: "Hello",
      col2: "World",
    },
    {
      col1: "react-table",
      col2: "rocks",
    },
    {
      col1: "whatever",
      col2: "you want",
    },
  ];

  const headers = [
    {
      Header: "Column 1",
      accessor: "col1", // accessor is the "key" in the data
    },
    {
      Header: "Column 2",
      accessor: "col2",
    },
  ];

  return (
    <div className={"flex items-center justify-center"}>
      <div
        className={
          "flex flex-col items-center space-y-10  bg-white w-10/12 h-4/6  shadow-2xl rounded-2xl items-start p-10"
        }
      >
        <h1 className={"text-4xl font-bold"}>Side Effects</h1>
        <div className={"flex w-full justify-around "}>
          <Select
            className={"w-4/12"}
            isSearchable
            isClearable
            placeholder={""}
            options={sideEffects.map((sideEffect) => ({
              value: sideEffect.id,
              label: sideEffect.name,
            }))}
            onChange={handleChange}
          />
          <div className={"flex space-x-6 "}>
            <Grid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideEffects;
