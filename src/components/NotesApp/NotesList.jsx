import React from "react";
import { useDispatch } from "react-redux";
import { setPopUp } from "../../slices/popUpSlice";
import { showNote } from "../../slices/noteDisplaySlice";

function NotesList() {
  const dispatch = useDispatch();

  let groupList = [];
  if (localStorage.hasOwnProperty("groupList")) {
    groupList = JSON.parse(localStorage.getItem("groupList"));
  }

  return (
    <div
      style={{
        height: "100%",
        width: "30%",
        background: "white",
        display: "flex",
        flexDirection: "column",
        // border: "1px solid blue",
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

          // border: "1px solid red",
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
          border: "1px solid black",
        }}
      >
        {groupList.map((groupInfo, i) => {
          return (
            <div
              key={i}
              id={i}
              onClick={(e) => {
                dispatch(showNote(e.target.id));
              }}
              style={{
                display: "flex",
                height: "auto",
                width: "100%",
                margin: "3% 0% 5% 0%",
                border: "1px solid red",
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
                  // textAlign: "center",
                  // padding: "2% 2%",
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
