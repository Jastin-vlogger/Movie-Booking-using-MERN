import React, { useState } from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
    ></Spinner>
  );
}

export default Loading;
