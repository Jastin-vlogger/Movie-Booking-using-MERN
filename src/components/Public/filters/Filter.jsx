import React from "react";
import Calendar from "../Calendar";
// import DropDowns from "../DropDowns";

function Filter({ handleFilters, filters }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px 7.5%",
      }}
    >
      <Calendar style={{display:"flex" ,flexDirection:"row"}}/>
      {/* <DropDowns handleFilters={handleFilters} filters={filters} /> */}
    </div>
  );
}

export default Filter;
