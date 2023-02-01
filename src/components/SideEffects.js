import React, { useState } from "react";
import Select from "react-select";
import Grid from "@/components/Grid";
import axios from "axios";

const SideEffects = ({ sideEffects }) => {
  const [data, setData] = useState();

  const handleChange = async (selectedValue) => {
    if (selectedValue) {
      const { data } = await axios.get(
        `/api/side-effects/${selectedValue.value}`
      );
      console.log(data.response);
      setData(data.response);
    }
  };

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
            <Grid values={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideEffects;
