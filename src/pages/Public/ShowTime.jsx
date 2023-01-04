import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Filter from "../../components/Public/filters/Filter";
import Navbar from "../../components/Public/Navbar/Navbar";
import ShowTimePage from "../../screens/public/showtiming/ShowTimePage";

function ShowTime() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [filters, setFilters] = useState([])
    const [count, setCount] = useState(0)
  const handleFilters = (item) => {
    const newData = filters;
    if (filters.indexOf(item) >= 0) {
      newData.splice(filters.indexOf(item), 1);
      setFilters(newData);
    } else {
      newData.push(item);
      setFilters(newData);
    }
    setCount((prev) => prev + 1);
  };
  return (
    <div style={{ backgroundColor: "#F2F2F2", paddingBottom: 20 }}>
      <Navbar />
      <Filter handleFilters={handleFilters} filters={filters} />
      <ShowTimePage filters={filters} />
    </div>
  );
}

export default ShowTime;
