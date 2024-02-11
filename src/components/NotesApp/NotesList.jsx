import React, { useState } from "react";

function NotesList() {
  const [popUpValue, setPopUpValue] = useState(false);

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
          setPopUpValue(true);
          window.localStorage.setItem("popUpValue", JSON.stringify(popUpValue));
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
        }}
      >
        +
      </div>
    </div>
  );
}

export default NotesList;
