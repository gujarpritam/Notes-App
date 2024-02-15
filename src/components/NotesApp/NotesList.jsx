import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPopUp } from "../../slices/popUpSlice";
import { showNote } from "../../slices/noteDisplaySlice";

function NotesList() {
  const dispatch = useDispatch();
  const [background, setBackground] = useState(-1);

  let groupList = [];
  if (localStorage.hasOwnProperty("groupList")) {
    groupList = JSON.parse(localStorage.getItem("groupList"));
  }

  const selectElement = (id) => {
    if (background !== -1) {
      document.getElementById(background).setAttribute(
        "style",
        `display: flex;
        height: auto;
        width: 100%;
        margin: 3% 0% 5% 0%;
        border-radius: 10px;
        cursor: pointer;`
      );
    }
    setBackground(id);

    document.getElementById(id).setAttribute(
      "style",
      `display: flex;
      height: auto;
      width: 100%;
      margin: 3% 0% 5% 0%;
      border-radius: 10px;
      cursor: pointer;
      background: #2F2F2F2B;`
    );
  };

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
          background: "white",
          position: "fixed",
          top: "0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          height: "100px",
          width: "29%",
          margin: "auto",
          zIndex: "1",
        }}
      >
        Pocket Notes
      </h1>

      <div
        style={{
          marginTop: "100px",
          height: "auto",
          width: "100%",
          overflowY: "scroll",
          scrollbarColor: "#D9D9D9",
          scrollbarWidth: "10px",
        }}
      >
        {groupList.map((groupInfo, i) => {
          return (
            <div
              key={i}
              id={i}
              onClick={(e) => {
                selectElement(e.target.id);
                dispatch(showNote(e.target.id));
              }}
              style={{
                display: "flex",
                height: "auto",
                width: "100%",
                margin: "3% 0% 5% 0%",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              <div
                id={i}
                onClick={(e) => {
                  dispatch(showNote(e.target.id));
                }}
                style={{
                  height: "45px",
                  width: "45px",
                  borderRadius: "50%",
                  border: "none",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "large",
                  fontWeight: "400",
                  margin: "0% 3% 0% 5%",
                  background: `${groupInfo[2]}`,
                }}
              >
                {groupInfo[1]}
              </div>
              <h3
                id={i}
                onClick={(e) => {
                  dispatch(showNote(e.target.id));
                }}
                style={{
                  height: "auto",
                  width: "auto",
                  display: "flex",

                  alignItems: "center",
                }}
              >
                {groupInfo[0]}
              </h3>
            </div>
          );
        })}
      </div>

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
