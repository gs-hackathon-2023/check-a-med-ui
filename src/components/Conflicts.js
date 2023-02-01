import React, { useState } from "react";
import Select from "react-select";
import Grid from "@/components/Grid";
import axios from "axios";

const Conflicts = ({ medicines }) => {
  const [data, setData] = useState();

  const handleChange = async (selectedValue) => {
    console.log(selectedValue);
    if (selectedValue) {
      const { data } = await axios.get(`/api/conflicts/${selectedValue.value}`);
      setData(data.response);
    }
  };

  const headers = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Direction",
      accessor: "direction",
    },
  ];

  return (
    <div className={"flex items-center justify-center"}>
      <div
        className={
          "flex flex-col items-center space-y-10  bg-white w-10/12 h-4/6  shadow-2xl rounded-2xl items-start p-10"
        }
      >
        <h1 className={"text-4xl font-bold"}>Conflict with new medicines</h1>
        <div className={"flex w-full justify-around "}>
          <Select
            isSearchable
            placeholder={""}
            menuPlacement="auto"
            options={medicines.map((medicine) => ({
              value: medicine.id,
              label: medicine.name,
            }))}
            className={"w-3/12"}
            onChange={handleChange}
          />
          <div className={"flex space-x-6 "}>
            {data && <Grid values={data} columns={headers} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conflicts;
