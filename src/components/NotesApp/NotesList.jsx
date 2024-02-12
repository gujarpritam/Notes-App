import React from "react";

import { useDispatch } from "react-redux";
import { setPopUp } from "../../slices/popUpSlice";

function NotesList() {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        height: "100%",
        width: "30%",
        background: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          background: "none",
          position: "sticky",
          top: "5%",
          paddingLeft: "20%",
          boxSizing: "border-box",
          height: "auto",
        }}
      >
        Pocket Notes
      </h1>
      <div
        onClick={() => {
          dispatch(setPopUp());
        }}
        style={{
          background: "#16008B",
          borderRadius: "50%",
          height: "50px",
          width: "50px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2em",
          position: "fixed",
          left: "23%",
          bottom: "50px",
          cursor: "pointer",
        }}
      >
        +
      </div>
    </div>
  );
}

export default NotesList;
